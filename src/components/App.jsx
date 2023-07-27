import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordian from "../pages/Accordian";
import Carousel from "../pages/Carousel";
import NoPage from "../pages/Nopages";
import QuoteGenerator from "../pages/QuoteGenerator";
import Layout from "../pages/Layout";
import ToDO from "../pages/ToDO";



export default function App(){
    return(
        <BrowserRouter basename="react-mini-projects">
            <Routes>
                <Route exact path='/react-mini-project' element = {<Layout />}/>
                <Route path='/carousel' element ={<Carousel />}/>
                <Route path='/accordian' element = {<Accordian/>}/>
                <Route path='/quote-generator' element = {<QuoteGenerator/>}/>
                <Route path='/todo' element = {<ToDO/>}/>
                <Route path='*' element = {<NoPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
