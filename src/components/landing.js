import React from 'react';
import AuthPanel from './auth_panel';
import WhiteLogo from './white_logo';
import Cookies from "js-cookie";
import authStore from '../stores/auth_store.js';
import Modal from './modal.js';

export default class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userConfirmed: authStore.isUserOfAge()
      // userConfirmed: true
    };
  }

  userConfirm = () => {
    authStore.setUserOfAge('over21')
    this.setState({
      userConfirmed: true
    });
  }
  
  underAge = () => {
    alert("Sorry too young!");
  }

  render() {
    // if (this.state.userConfirmed) {
      return (
        <div className='bg-hero-pattern bg-cover h-screen'>
          <div className="flex">
            <WhiteLogo />
          </div>
          <div className='grid grid-cols-11 place-items-center'>
            <div className='col-span-7 '></div>
            <div className='col-span-4'>
             <AuthPanel/>
            </div>
          </div>
          <Modal
          yes={this.userConfirm}
          no={this.underAge}
          cname={this.state.userConfirmed ? 'hidden' : 'block'}
          />
        </div>
      );
    // } else {
      // return (
        // <section className="flex justify-evenly">
        //   <div className='age-consent'>
        //     <p className="font-montserrat font-bold uppercase">Are you 21 years or older?</p><br/>
        //     <button onClick = {this.userConfirm} className="flex flex-col w-60 font-montserrat font-semibold border-2 border-black px-8 py-2 text-xl disabled:opacity-50">
        //     Yes
        //     </button><br/>
        //     <button onClick={this.underAge}  className="flex flex-col w-60 font-montserrat font-semibold border-2 border-black px-8 py-2 text-xl disabled:opacity-50">
        //     No
        //     </button>
        //   </div>
        // </section>
      // );
  }
}
