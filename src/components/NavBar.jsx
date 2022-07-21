import React from "react";

import { AppBar, Box, Button, Toolbar } from "@mui/material";

// Di sini kita akan menggunakan useNavigate untuk bisa keluar dari halaman HomePage dan
// beralih ke halaman Login
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import styles from "./NavBar.module.css";


import { keliarAplikasi } from '../authentication/firebase'

const NavBar = () => {
    // Gunakan hooks useNavigate
    const navigate = useNavigate();

    const buttonLogoutOnClickHandler = async () => {
        await keliarAplikasi();
        navigate("/login");

    };

    return (
        <Box className={styles.grow}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Button sx={{ my: 2, color: "white", display: "block" }}>
                                Home
                            </Button>
                        </Link>

                        <Link to="/movies" style={{ textDecoration: "none" }}>
                            <Button sx={{ my: 2, color: "white", display: "block" }}>
                                Movies
                            </Button>
                        </Link>
                    </Box>
                    <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
                        Logout
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;