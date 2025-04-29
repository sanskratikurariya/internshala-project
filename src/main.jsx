import { createRoot } from 'react-dom/client'; // Use the correct import for React 18
import './index.css';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';

// Use createRoot for rendering
const root = createRoot(document.getElementById('root'));

root.render(

    <BrowserRouter>  {/* Wrap your App component inside BrowserRouter */}
      <App />
    </BrowserRouter>

);
