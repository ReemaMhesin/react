import "@fontsource/nunito";
import * as React from 'react';
import './home.css';
import "typeface-cormorant";
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';





function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''}>
<Routes>



<Route path="/" element={<HomePage />} />
<Route path="DetailsPage/*" element={<DetailsPage />} />


</Routes>
</BrowserRouter>
  );
}

 export default App;
