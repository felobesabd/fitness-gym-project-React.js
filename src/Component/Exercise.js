import React, {useEffect, useState} from "react";
import {Box, Stack, Typography} from "@mui/material";
import Pagination from '@mui/material/Pagination';

import ExerciseCard from "./ExerciseCard";
import {exerciseOptions, fetchData} from "../Utils/FetchData";

const Exercise = ({ setExercises, exercises, bodyPart })=> {

    console.log(bodyPart)

    const [currentPage, setCurrentPage] = useState(1)

    const exercisesPerPage = 9;
    const indexLastOfExercise = currentPage * exercisesPerPage
    const indexFirstOfExercise = indexLastOfExercise - exercisesPerPage
    const currentExercise = exercises.slice(indexFirstOfExercise, indexLastOfExercise)

    const paginate = (e, value)=> {
        setCurrentPage(value)
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    }

    useEffect(()=> {
        const fetchExercisesData = async () => {
            let exercisesData = [];

            if (bodyPart === 'all') {
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            } else {
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
            }
            setExercises(exercisesData)
        }
        fetchExercisesData()
    },[bodyPart])

    return (
        <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
            <Typography variant="h4" fontWeight="bold" mb="46px"
                        sx={{ fontSize: { lg: '44px', xs: '30px' } }}>
                Show Results
            </Typography>
            <Stack direction="row" flexWrap="wrap" justifyContent="center"
                   sx={{ gap: { lg: '107px', xs: '50px' } }}>
                {
                    currentExercise.map((item, index)=> (
                        <ExerciseCard key={index} exercises={item} />
                    ))
                }
            </Stack>
            <Stack alignItems='center' mt='100px'>
                {
                    exercises.length > 9 && (
                        <Pagination showFirstButton showLastButton
                            color="standard"
                            shape="rounded"
                            defaultPage={1}
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            page={currentPage}
                            onChange={paginate}
                            size="large"
                        />
                    )
                }
            </Stack>
        </Box>
    );
}

export default Exercise;