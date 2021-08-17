import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { GOOGLE_TOKEN_NAME } from '../constants';
const queryString = require('query-string');

export default class YelpSearch extends React.Component {
  source = axios.CancelToken.source()
  constructor(props) {
    super(props);
    let [q, loc] = this.parseParams(props)
    this.state = {query: q, loc: loc, results: [], isLoaded: false}
  }

  parseParams = (props) => {
    const { location: { search } } = props;
    let parsed = queryString.parse(search);
    return [parsed.q, parsed.loc];
  }

  componentDidMount() {
    let url = `${process.env.REACT_APP_SERVER_URL}/api/v1/yelp_search`
    let {q, loc} = this.state
    axios.get(url, {cancelToken: this.source.token, params: {auth_token: Cookies.get(GOOGLE_TOKEN_NAME), location: loc, cocktail_name: q}}).then((res) => {
      this.setState({results: res.data.data, isLoaded: true})
    }).catch(err => console.log(err))
  }

  // componentDidMount() {}

  render() {
    let image = 'https://via.placeholder.com/200'
    let {results, isLoaded} = this.state
    if (results.length > 0 && isLoaded) {
      return(
        <div className="font-playfair font-normal text-3xl text-center">
          <h2 className="mb-16">Search results for <span className="italic">'{this.state.query}'</span> around <span className="italic">'{this.state.loc}'</span></h2>
          <div className="grid grid-cols-2 mx-28">
            {results.map((result) => {
              let {name, address, thumbnail, business_type, yelp_link} = result.attributes
              let types = business_type.map(type => type.title)
              return (
                <div className="flex mb-8" key={name}>
                  <img className="w-48 h-48" src={thumbnail} alt="" />
                  <div className="text-left ml-8">
                    <p className="text-sm italic" href="#">{types.join(', ')}</p>
                    <a className="font-bold my-2 underline" href={yelp_link}>{name}</a>
                    <p className="text-base" href="#">{address.join(' ')}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
    } else if (results.length == 0 && !isLoaded) {
      return <h1 className="font-playfair font-normal text-3xl text-center mx-56">Loading...</h1>
    } else {
      return <h1 className="font-playfair font-normal text-3xl text-center mx-56">Sorry no results for <span className="italic">'{this.state.query}'</span></h1>
    }
    
  }
}
