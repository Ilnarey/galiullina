import React from 'react'; 
import ReactDOM from "react-dom/client" 
import App from './components/App/app.tsx' 
import {Setting} from "./const.ts" 
 
const root = ReactDOM.createRoot( 
  document.getElementById('root') as HTMLElement 
) 
 
root.render( 
  <React.StrictMode> 
    <App 
      rentalOffersCount={Setting.rentalOffersCount} 
    /> 
  </React.StrictMode> 
)