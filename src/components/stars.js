import axios from 'axios'
import Cookies from 'js-cookie'
import React from 'react'
import { GOOGLE_TOKEN_NAME } from '../constants.js'
import Star from './star.js'

export default class Stars extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: parseInt(this.props.value),
      selection: 0
    }
  }

  hoverOver = (e) => {
    let val = 0
    if (e && e.target && e.target.getAttribute('data-star-id')) {
      val = e.target.getAttribute('data-star-id')
    }
    this.setState({selection: val})
  }

  handleClick = (e) => {
    let val = e.target.getAttribute('data-star-id') || this.state.rating
    this.setState({rating: val})
    if (val != null && !isNaN(val)) {
      let data = {
        stars: val,
        auth_token: Cookies.get(GOOGLE_TOKEN_NAME)
      }
      axios.post(`${process.env.REACT_APP_SERVER_URL}/api/v1/cocktails/${this.props.cocktail_id}/rating`, data)
    }
  }

  render() {
    return(
      <div 
        onClick={this.handleClick}
        onMouseOut={() => this.hoverOver(null)}
        onMouseOver={this.hoverOver}
        className={this.props.cname}>
          {Array.from({length: 5 }, (v, i) => (
            <Star starId={i + 1} key={`star_${i + 1}`} marked={this.state.selection ? this.state.selection >= i + 1 : this.state.rating >= i + 1} />
          ))}
      </div>
  
    )
  }
}
