import React from 'react'

export default class Star extends React.Component {
  constructor(props) {
    super(props)
    this.state = {filled: false}
  }

  render() {
    return(
        <svg 
          data-star-id={this.props.starId}
          className={`${this.props.marked ? 'text-black' : ''} hover:fill-current transition`}
          width="26" height="23" viewBox="0 0 26 23" fill={this.props.marked ? 'black' : 'none'} xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8567 3.15498L14.7947 8.95425L15.023 9.63729H15.7431H21.9352L16.9501 13.1587L16.3431 13.5875L16.5787 14.2924L18.4978 20.0351L13.4336 16.4578L12.8567 16.0502L12.2797 16.4578L7.21548 20.0351L9.13464 14.2924L9.37021 13.5875L8.76316 13.1587L3.77813 9.63729H9.97015H10.6903L10.9186 8.95425L12.8567 3.15498Z" stroke="black" stroke-width="2"/>
        </svg>
    )
  }
}
