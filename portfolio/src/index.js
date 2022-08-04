import ReactDOM from 'react-dom/client';



// SCSS
import './styles/styles.css';

// Components
import App from './App'
import Header from './components/Header/Header';


const container = document.getElementById('root');
const root = ReactDOM.createRoot( container );

root.render(<App />)