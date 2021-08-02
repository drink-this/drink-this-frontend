import React from 'react'
import Cocktail from './cocktail.js'
import axios from 'axios'

export default class ShowPage extends React.Component {
  source = axios.CancelToken.source()
  constructor(props) {
    super(props)
    this.state = {cocktail: {}, isLoaded: false}
  }

  componentDidMount() {
    let url = 'http://localhost:3001/api/v1/cocktails/11007'
    axios.get(url, {cancelToken: this.source.token}).then((res) => {
      this.setState({cocktail: res.data.data, isLoaded: true})
    }).catch(err => console.log(err))
  }

  componentWillUnmount() {
    this.source.cancel('unmounting')
  }
  
  render () {
      if (!this.state.isLoaded) {
        return <div>Loading...</div>
      } else {
        return <Cocktail cocktail={this.state.cocktail} tagline='You should have a...'/>
      }
  }
}