import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import spinnerStore from '../stores/spinner_store';

export default class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  hidden = () => {
    return this.state.loading ? 'block' : 'hidden';
  }

  showSpinner = () => {
    this.setState({
      loading: true
    });
  }

  hideSpinner = () => {
    this.setState({
      loading: false
    });
  }

  componentDidMount() {
    spinnerStore.on('loading', this.showSpinner);
    spinnerStore.on('not-loading', this.hideSpinner);
  }
  
  componentWillUnmount() {
    spinnerStore.removeListener('loading', this.showSpinner);
    spinnerStore.removeListener('not-loading', this.hideSpinner);
  }

  render() {
    return (
      <section className={`${this.hidden()} bg-black bg-opacity-50 absolute top-0 left-0 h-screen w-screen`}>
        <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 filter drop-shadow-c p-6">
          <div className="flex space-x-4 m-2">
            <FadeLoader color={spinnerStore.color} size={200} loading={this.state.loading} />
          </div>
        </div>
      </section>
    )
  }
};
