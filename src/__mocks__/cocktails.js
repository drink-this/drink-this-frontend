const getSearch = (query) => {
  const data = [
    {
      id: "1",
      type: "cocktails_search",
      attributes: {
        name: "Cocktail 1",
        rating: 4,
        thumbnail: "pic"
      }
    },
    {
      id: "2",
      type: "cocktails_search",
      attributes: {
        name: "Cocktail 2",
        rating: 3,
        thumbnail: "pic"
      }
    }
  ]
  return Promise.resolve(data)
}

export default getSearch