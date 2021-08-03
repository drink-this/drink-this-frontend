import React from 'react';

export default class WhiteLogo extends React.Component {
  render() {
    return (
      <div className="w-min border-4 p-2 font-playfair font-white text-sm">
        <p className="w-max text-white">drink this</p>
        <p className="w-max opacity-70 text-white">drink this</p>
        <p className="w-max opacity-50 text-white">drink this</p>
      </div>
    )
  }
}
