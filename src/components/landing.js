import React from 'react';
import LandingImage from './landing_image';
import AuthPanel from './auth_panel';

export default class Landing extends React.Component {
  render() {
    return (
      <div className='grid grid-cols-2 w-screen h-screen place-items-center'>
        <LandingImage src='https://i.etsystatic.com/22774987/r/il/f27b6b/3029064875/il_1588xN.3029064875_pl3z.jpg'/>
        <AuthPanel/>
      </div>
    );
  }
}
