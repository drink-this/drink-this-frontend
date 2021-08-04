import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
const queryString = require('query-string');

export default class SearchResults extends React.Component {
  source = axios.CancelToken.source()
  constructor(props) {
    super(props);
    this.state = {
      query: this.parseParams(props),
      cocktails: []
    }
  }

  parseParams = (props) => {
    const { location: { search } } = props;
    let parsed = queryString.parse(search);
    return parsed.q;
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/cocktails/search`, {cancelToken: this.source.token, params:{search: this.state.query, auth_token: Cookies.get('authToken')}})
      .then((res) => {
        this.setState({cocktails: res.data.data})
      })
      .catch((err) => {
        this.source.cancel('unmounting')
      })
  }

  componentWillUnmount() {
    this.source.cancel('unmounting')
  }

  render() {
    if (this.state.cocktails.length == 0) {
    let cocktails = this.state.cocktails
      return(
        <div className="font-playfair font-normal text-3xl text-center mx-56">
          <h2 className="mb-16">Search results for <span className="italic">'{this.state.query}'</span></h2>
          <div className="grid grid-cols-5 gap-4 justify-items-stretch">
            {cocktails.map((drink) => {
              let image = drink.attributes.thumbnail
              let name = drink.attributes.name
              return (
                <div className="justify-self-center" key={drink.id} id={drink.id}>
                  <img src={image} alt="" />
                  <a className="text-base mt-4 hover:underline cursor-pointer" href={`/cocktails/${drink.id}`}>{name}</a>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else {
      return <h1 className="font-playfair font-normal text-3xl text-center mx-56">Sorry no results for <span className="italic">'{this.state.query}'</span></h1>
    }
  }
}