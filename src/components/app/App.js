import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";

import { BrowserRouter, Routes, Route } from "react-router-dom";	

// Page

import SingleComic from "../singleComic/SingleComic";



export default function App () {

  const [selectedChar, setSelectedChar] = useState(null);

  const onCharSelected = id => setSelectedChar(id);
  

  return (
    <div className="app">
    <BrowserRouter >
      <Routes>
      <AppHeader />     
          <Route exact path="/">
          </Route>
        <Route exact path="/comics/">
        
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}