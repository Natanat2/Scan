export const returnIdsArray = (data) => {
    return data.items.map(idObj => idObj.encodedId)
}