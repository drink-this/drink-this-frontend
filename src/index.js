import App from './components/App.js';
import ReactDOM from 'react-dom';
import './fonts/PlayfairDisplay-Black.ttf';
import './index.css';

require('./core/boot');

let element = document.getElementById('app');
if (element) {
  ReactDOM.render(<App />, element);
}
