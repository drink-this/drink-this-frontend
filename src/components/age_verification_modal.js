import React from 'react';
import ageConfirmStore from '../stores/age_confirm_store';

export default class AgeVerificationModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userConfirmed: ageConfirmStore.isUserOfAge()
    };
  }

  userConfirm = () => {
    ageConfirmStore.setUserOfAge('over21');
    this.setState({
      userConfirmed: true
    });
  }

  underAge = () => {
    window.open("https://www.cdc.gov/alcohol/fact-sheets/underage-drinking.htm");
  }

  isHidden = () => {
    return this.state.userConfirmed ? 'hidden' : 'block';
  }

  render() {
    return (
      <section className={`${this.isHidden()} bg-black bg-opacity-50 absolute top-0 left-0 h-screen w-screen`}>
        <div className="bg-white fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 filter drop-shadow-c p-6">
          <div className="font-montserrat font-bold uppercase m-2 text-3xl text-center">To enter, you must be at least 21 years old.</div><br/>
          <div className="flex space-x-4 m-2">
            <button
            onClick={this.userConfirm}
            className="flex-1 p-1 font-montserrat font-semibold border-2 border-black px-4 py-2 text-xl hover:bg-black hover:text-white transition">
              Yes
            </button><br/>
            <button
            onClick={this.underAge}
            className="flex-1 p-1 font-montserrat font-semibold border-2 border-black px-4 py-2 text-xl hover:bg-black hover:text-white transition">
              No
            </button>
          </div>
          <div className="flex space-x-4 m-2">
            <p className="flex-1 text-center">Yes, I am at least 21.</p><br/>
            <p className="flex-1 text-center">No, I am under 21.</p>
          </div>
        </div>
      </section>
    )
  }
};
