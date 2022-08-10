import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import AddCheck from "./components/AddCheck";
import UserInfor from "./components/UserInfor";
import CheckedInfor from "./components/CheckedInfor";

import './App.css';

const API_BASE = 'http://localhost:3001/api';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <div className="Content row">
              <div className="checkContent contentShare  l-5 m-5 c-5">
                <AddCheck />
                <CheckedInfor />
              </div>
              <div className="userContent contentShare l-6 m-6 c-6">
                <UserInfor />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
