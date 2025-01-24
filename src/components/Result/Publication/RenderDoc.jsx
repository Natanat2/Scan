export const convertDocObjectToCard = (docs) => {
  return docs.map(doc => {
    console.log("Document attributes:", doc.ok.attributes);
    const customDate = new Date(doc.ok.issueDate)
    const formatDate = `${customDate.getDate()}.${customDate.getMonth()}.${customDate.getFullYear()}`
    return {
      date: formatDate,
      articleUrl: doc.ok.url,
      articleUrlTitle: doc.ok.source.name,
      articleTitle: doc.ok.title.text,
      articleTags: getArtTags(doc.ok.attributes),
      articleContent: parseXml(doc.ok.content.markup),
      imageUrl: parseImageUrl(doc.ok.content.markup),
      wordCount: doc.ok.attributes.wordCount
    }
  })
}
const imgParseRegExp = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/gm
const parseXml = (xml) => {
  const DOMParse = new DOMParser();
  const xmlDoc = DOMParse.parseFromString(xml, 'text/html');
  const imgs = xmlDoc.documentElement.textContent.match(imgParseRegExp)
  const htmlText = imgs?.reduce((acc, el) => {
    const text = acc.replace(el, '')
    return text
  }, xmlDoc.documentElement.textContent)
  return htmlText || xmlDoc.documentElement.textContent
}
const parseImageUrl = (xml) => {
  const DOMParse = new DOMParser();
  const xmlDoc = DOMParse.parseFromString(xml, 'text/html')
  const imgs = xmlDoc.documentElement.textContent.match(imgParseRegExp)

  const imagesSources = imgs?.reduce((acc, img) => {
      const src = img.match(/src\s*=\s*"([^"]+)"/)
      if(src && src[1]) {
        return [...acc, src[1]]
      }
      return acc
    }, [])
  return imagesSources ? imagesSources[0] : null
}
const getArtTags = (artType) => {
  const availibleTags = [];
  if (artType.isTechNews) {
    availibleTags.push('технические новости');
  }
  if (artType.isAnnouncement) {
    availibleTags.push('анонсы и события');
  }
  if (artType.isDigest) {
    availibleTags.push('сводки новостей');
  }
  return availibleTags.length ? availibleTags : null;
};