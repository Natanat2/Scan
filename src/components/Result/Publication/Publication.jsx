import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDocuments } from '../../Requests/histograms';
import './Style/Publication.css';
import { convertDocObjectToCard } from './RenderDoc';
import Badge from 'react-bootstrap/Badge';
import { dropDocumentsInfo } from '../../Requests/histograms';

const PublicationCards = () => {
  const { publicationIds, documents } = useSelector(state => ({
    publicationIds: state.histograms.publicationIds,
    documents: state.histograms.documents
  }));

  const dispatch = useDispatch();
  const [offSet, setOffSet] = useState(0);

  useEffect(() => {
    if (publicationIds.length) {

      dispatch(dropDocumentsInfo());

      const idsForRequest = publicationIds.slice(offSet, offSet + 10);
      if (idsForRequest.length) {
        dispatch(getDocuments({ ids: idsForRequest }));
      }
    }
  }, [publicationIds, dispatch, offSet, dropDocumentsInfo]);

  if (!documents.length) {
    return null;
  }

  const docs = convertDocObjectToCard(documents);

  const showTenArticles = () => {
    setOffSet(offSet + 10);
  };

  const isDone = documents.length >= publicationIds.length;
  return (
    <>
      <div className='publication'>
        {docs.map((obj, ind) =>
          <div className='publication_content' key={ind}>
            <div className='publication_date'>
              <span className='publication_span'>{obj.date}</span>
              <a className='publication_article' href={obj.articleUrl}>{obj.articleUrlTitle}</a>
            </div>
            <h4 className='publication_title'>{obj.articleTitle}</h4>
            {obj.articleTags && obj.articleTags.map(tag => (
              <Badge bg="warning" text="dark" key={tag}>{tag}</Badge>
            ))}
            {!obj.articleTags && <Badge bg="warning" text="dark">Тег не найден</Badge>}
            {obj.imageUrl && <img className='publication_img' src={obj.imageUrl} alt='article pic' />}
            <div dangerouslySetInnerHTML={{ __html: obj.articleContent }} />
            <div className='publication_button'>
              <form action={obj.articleUrl} target="_blank">
                <button className='publication_btn'>Читать источник</button>
              </form>
              <section className='publication_section'>{obj.wordCount} слов</section>
            </div>
          </div>
        )}
      </div>
      <div className='addBox'>
        {!isDone && <button onClick={showTenArticles} className='publication_showBtn'>Показать больше</button>}
      </div>
    </>
  );
};
export default PublicationCards;
