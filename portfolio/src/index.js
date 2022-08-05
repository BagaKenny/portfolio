import ReactDOM from 'react-dom/client';



// SCSS
import './styles/styles.css';

// Components
import App from './App'
import Header from './components/Header/Header';
import Main from './components/Home/Main';
import Section from './components/Home/Section';


const container = document.getElementById('root');
const root = ReactDOM.createRoot( container );

root.render(<Section />)