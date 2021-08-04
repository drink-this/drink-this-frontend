import React from 'react'
import Cocktail from './cocktail.js'
import axios from 'axios'
import Cookies from 'js-cookie'

export default class ShowPage extends React.Component {
  source = axios.CancelToken.source()
  id
  tagline
  constructor(props) {
    super(props)
    this.state = {cocktail: {}, isLoaded: false, tagline: ''}
    if (this.props.match) {
      this.id = this.props.match.params.id;
    }
  }

  componentDidMount() {
    if (this.id) {
      let url = `${process.env.REACT_APP_SERVER_URL}/api/v1/cocktails/${this.id}`
      axios.get(url, {cancelToken: this.source.token, params: {auth_token: Cookies.get('authToken')}}).then((res) => {
        this.setState({cocktail: res.data.data, isLoaded: true, tagline: 'Have a...'})
    }).catch(err => console.log(err))
    } else {
      let url = 'http://localhost:3001/api/v1/cocktails/11007'
      axios.get(url, {cancelToken: this.source.token, params: {auth_token: Cookies.get('authToken')}}).then((res) => {
        this.setState({cocktail: res.data.data, isLoaded: true, tagline: 'You should have a...'})
      }).catch(err => console.log(err))
    }
    
  }

  componentWillUnmount() {
    this.source.cancel('unmounting')
  }
  
  render () {
      if (!this.state.isLoaded) {
        return <div className="font-playfair font-normal text-3xl text-center mx-56">Loading...</div>
      } else {
        return <Cocktail cocktail={this.state.cocktail} tagline={ this.state.tagline }/>
      }
  }
}