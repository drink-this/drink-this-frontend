import React from 'react';
import StarterCocktails from './starter_cocktails.js';
import axios from 'axios';
import Cookies from 'js-cookie';

export default class Onboard extends React.Component {
  source = axios.CancelToken.source()
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/api/v1/dashboard`, {cancelToken: this.source.token, params:{auth_token: Cookies.get('authToken')}})
      .then((res) => {
        this.setState({data: res.data.data, isLoaded: true})
      })
      .catch((err) => {
        this.source.cancel('unmounting')
      })
  }

  componentWillUnmount() {
    this.source.cancel('unmounting')
  }

  render () {
    if (!this.state.isLoaded) {
      return <div className="font-playfair font-normal text-3xl text-center mx-56">Loading...</div>
    } else {
      return (
      <div className="font-playfair">
        <h1 className="text-center mb-12 text-3xl">To give you the best recommendations, please rate these cocktails</h1>
        <StarterCocktails data={this.state.cocktails}/>
      </div>
      )
    }
  }
}
