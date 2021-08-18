import React from 'react';
import authStore from '../stores/auth_store.js';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userConfirmed: props.isOfAge
    }
  }

  // componentDidMount() {
  //   this.userConfirm()
  // }

  // userConfirm = () => {
  //   authStore.setUserOfAge('over21')
  //   this.setState({
  //     userConfirmed: true
  //   });
  // }

  underAge = () => {
    alert("Sorry too young!");
  }

  render() {
    return (
    <section className={`${this.props.cname} bg-black bg-opacity-70 absolute top-0 left-0 h-screen w-screen`}>
      <div>
        <p className="font-montserrat font-bold uppercase">To enter, you must be at least 21 years old.</p><br/>
        <button
        className="flex flex-col w-60 font-montserrat font-semibold border-2 border-black px-8 py-2 text-xl disabled:opacity-50">
        Yes
        </button><br/>
        <button
        className="flex flex-col w-60 font-montserrat font-semibold border-2 border-black px-8 py-2 text-xl disabled:opacity-50">
        No
        </button>
      </div>
    </section>
  ) }
};
