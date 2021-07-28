import React from 'react';

export default class Logo extends React.Component {
  render() {
    return (
      <div className="border-4 border-black w-min mt-8 ml-8 p-2 font-playfair font-black text-sm">
        <p className="w-max">drink this</p>
        <p className="w-max opacity-70">drink this</p>
        <p className="w-max opacity-50">drink this</p>
      </div>
    )
  }
}