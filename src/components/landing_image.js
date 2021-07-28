import React from 'react';

export default class LandingImage extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div className='h-screen'>
                <img className='inline h-screen' src={this.props.src} />
            </div>
        );
    }
}