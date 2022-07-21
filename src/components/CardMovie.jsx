import React from "react";


import { Box, Typography, Card, CardMedia, CardContent, Rating } from "@mui/material"


const url = "https://image.tmdb.org/t/p/w200";


const CardMovie = ({movie}) => {


    return(
        <>
            <Card className="boxy">
                <Box>
                    <Typography variant="h5"> Component Card Movie </Typography>
                </Box>

                <Box className="boxy" sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <CardMedia sx={{ width: 150 }} component="img" image={`${url}${movie.poster_path}`} alt="Seekor kucing"></CardMedia>
                    <CardContent>

                        <Typography variant="body1">{movie.title}</Typography>

                        <Rating value={movie.vote_average / 2} precision={0.1} readOnly></Rating>

                        <Typography variant="body1">{movie.overview}</Typography>

                    </CardContent>
                </Box>
                
            </Card>
        </>
    )
}


export default CardMovie;