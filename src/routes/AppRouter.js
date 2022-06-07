import React from "react";
import {HomeView} from '../views/HomeView';
import {PolizaView} from '../views/PolizaView';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";


export const AppRouter = () => {
  return (
    <Router>
        <div>
          <HeaderComponent />
            <Routes>
                <Route  path="/" element={<HomeView/>}/>
                <Route  path="cotiza" element={<PolizaView/>}/>
                <Route path="*" element={<HomeView/>} />
            </Routes>
          <FooterComponent />
        </div>
    </Router>
  )
}