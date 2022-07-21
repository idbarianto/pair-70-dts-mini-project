import React, { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material"

import axios from "axios"

import "./ListMovies.css";

import CardMovie from "../components/CardMovie";

import NavBar from "../components/NavBar";


import { useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth
} from '../authentication/firebase'


const ListMovies = () => {

    const navigate = useNavigate();

    const [user, loading] = useAuthState(auth);

    useEffect(
        () => {
            console.log(user)
            if (loading) {
                return;
            }

            if (!user) {
                navigate("/login");
            }

        }, [loading, user, navigate]
    )



    const [movies, setMovies] = useState([]);

    useEffect(
        () => {
            try {
                const fetchDataMovies = async () => {
                    const response = await axios({
                        method: 'get',
                        url: "http://barianto.e-dev.web.id/",
                        params: {
                            token: '3As0grhU1A0-bB7eR1ZObavZtNWW3YXTd8.vrJbviTRaiviOmwBZXeKMPnPDtSuz07wVd47DNKue4k',
                        }
                    });
                    if (response.data.status === 200) {
                        setMovies(response.data.data.results)
                    } else {
                        console.log(response.data)
                    }
                }
                fetchDataMovies();
            } catch (err) {
                console.log("Error", err);
            }
        }, []
    )

    return(
        <>
            <NavBar />
            <Box className="boxy">
                <Typography variant="h5">Container List Movies</Typography>
                {
                    movies.map((movie, key) => {
                        return <CardMovie key={movie.id} movie={movie} />
                    })
                }
            </Box>
        </>
    )
}


export default ListMovies;