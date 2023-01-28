import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../Navbar";
import Movies from "./Movies";
import Sports from "./Sports";
import TV from "./TV";
import Disney from "./Disney";
import Kids from "./Kids";
import Error from "./Error";
import styled from "styled-components";
import Slider from "../../ImageSlider";
import Category from "../../Category";



const RouterSetup = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={
                    <>
                        <Nav />
                        <Slider />
                        <Category />
                    </>}></Route>
                <Route path="/movies" element={<Movies />}> </Route>
                <Route path="/sports" element={<Sports />}> </Route>
                <Route path="/movies" element={<TV />}> </Route>
                <Route path="/disney" element={<Disney />}> </Route>
                <Route path="/kids" element={<Kids />}> </Route>
                <Route path="*" element={<Error />}> </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterSetup;