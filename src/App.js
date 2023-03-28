import React from "react";
import { Routes, Route } from "react-router-dom";
import {Box} from "@mui/material";

import './App.css';
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import ExerciseDetails from "./Pages/ExerciseDetails";
import Footer from "./Component/Footer";

const App = ()=> {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/exercise/:id' element={<ExerciseDetails />}/>
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
