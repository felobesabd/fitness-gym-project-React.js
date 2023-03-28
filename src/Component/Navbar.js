import React from "react";
import { Stack } from "@mui/material";
import {Link} from "react-router-dom";

import logo from '../assets/images/Logo.png'

const Navbar = ()=> {
    return (
        <Stack direction='row' justifyContent='space-around'
               sx={{ gap: {sm: '123px', xs: '40px'},
                   mt: {xs: '20px', sm: '32px' }, justifyContent:'none' }} px='20px'>
            <Link to='/' style={{ textDecoration:'none' }}>
                <img src={logo} alt='logo' width={48} height={48} style={{margin: '0 20px'}}/>
            </Link>
            <Stack direction="row" gap='40px'
                   alignItems='flex-end' fontSize='24px' fontFamily="Alegreya">
                <Link to='/' style={{ textDecoration:'none', color: '#3A1212', borderBottom:'3px solid #ff2526'}}>
                    Home
                </Link>
                <a href='#exercise' style={{ textDecoration:'none', color: '#3A1212' }}>Exercise</a>
            </Stack>
        </Stack>
    );
}

export default Navbar;