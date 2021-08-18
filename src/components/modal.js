import React from 'react';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  // const userConfirm = () => {
  //   ageConfirmStore.setUserOfAge('over21')
  //   setUserConfirmed(true);
  // }
  //
  // const underAge = () => {
  //   window.open("https://www.cdc.gov/alcohol/fact-sheets/underage-drinking.htm");
  // }

  render() {
    return (
      <section className={`${this.props.cname} bg-black bg-opacity-50 absolute top-0 left-0 h-screen w-screen`}>
        <div className="bg-white border-4 border-grey-300 border-opacity-75 fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 filter drop-shadow-c p-6">
          <div className="font-montserrat font-bold uppercase m-2 text-3xl text-center">To enter, you must be at least 21 years old.</div><br/>
          <div className="flex space-x-4 m-2">
            <button
            onClick={this.props.yes}
            className="flex-1 p-1 font-montserrat font-semibold border-2 border-black px-4 py-2 text-xl disabled:opacity-50">
              Yes
            </button><br/>
            <button
            onClick={this.props.no}
            className="flex-1 p-1 font-montserrat font-semibold border-2 border-black px-4 py-2 text-xl disabled:opacity-50">
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
