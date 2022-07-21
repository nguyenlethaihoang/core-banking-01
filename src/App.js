import './App.css';
import DefaultLayout from './layouts/DefaultLayout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes } from "./routes";
import LoginLayout from './layouts/LoginLayout';
import React, { useEffect, useState } from 'react'

const TITLE = 'Core Banking App'  
function App() {
  
  return (
    <Router>
        <Routes>
        {
          privateRoutes.map((route, index)=> {
            const Page = route.component
            let Layout
            if (route.path === "/login") {
              Layout = LoginLayout
            } else {
              Layout = DefaultLayout
            }
            return <Route key={index} path={route.path} element={
              <Layout>
                  <Page />
              </Layout>} />
          })
        }
        </Routes>
    </Router>
  );
}

export default App;

