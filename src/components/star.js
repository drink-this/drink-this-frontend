import React from 'react'

export default class Star extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filled: false}
  }

  render() {
    if (this.props.marked) {
      return <img data-star-id={this.props.starId} src="/star_marked.png" alt="marked star" />
    } else {
      return <img data-star-id={this.props.starId} src="/star_not_marked.png" alt="empty star" />
    }
  }
}



