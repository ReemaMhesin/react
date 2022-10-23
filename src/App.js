import "@fontsource/nunito";
import * as React from 'react';
import './home.css';
import "typeface-cormorant";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import TopBar from './components/TopBar';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';






function App() {
  return (
    <BrowserRouter>
<Routes>



<Route path="/" element={<HomePage />} />
<Route path="DetailsPage/*" element={<DetailsPage />} />
<Route path="HomePage/*" element={<HomePage />} />


</Routes>
</BrowserRouter>
  );
}

 export default App;
