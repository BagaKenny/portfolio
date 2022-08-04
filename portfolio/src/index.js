import ReactDOM from 'react-dom/client';


// SCSS
import './styles/styles.scss';

// Components
import App from './App'

const container = document.getElementById('root');
const root = ReactDOM.createRoot( container );

root.render(<App />)