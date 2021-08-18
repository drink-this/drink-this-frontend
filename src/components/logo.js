import React from 'react';
import { Link } from 'react-router-dom';

export default class Logo extends React.Component {
  render() {
    return (
      <Link to='/dashboard'>
        <div className="border-4 border-black w-min m-8 p-2 font-playfair font-black text-sm">
          <p className="w-max">drink this</p>
          <p className="w-max opacity-70">drink this</p>
          <p className="w-max opacity-50">drink this</p>
        </div>
      </Link>
    )
  }
}
