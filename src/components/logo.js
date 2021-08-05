import React from 'react';

export default class Logo extends React.Component {
  render() {
    return (
      <a href='/dashboard'>
        <div className="border-4 border-black w-min m-8 p-2 font-playfair font-black text-sm">
          <p className="w-max">drink this</p>
          <p className="w-max opacity-70">drink this</p>
          <p className="w-max opacity-50">drink this</p>
        </div>
      </a>

    )
  }
}
