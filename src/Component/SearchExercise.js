import React, {useEffect, useState} from "react";
import {Box, Button, Stack, TextField, Typography} from "@mui/material";
import {exerciseOptions, fetchData} from "../Utils/FetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercise = ({ setExercises, bodyPart, setBodyPart })=> {
    const [search, setSearch]  = useState()
    const [bodyParts, setBodyParts]  = useState([])

    useEffect(()=> {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData()
    },[])
    const handleSubmit = async ()=> {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/', exerciseOptions)

            const filterData = exercisesData.filter((exercise) =>
                exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )

            setSearch('')
            setExercises(filterData)
        }
    }

    return (
        <Stack alignItems='center' mt="37px" justifyContent="center" p="20px">
            <Typography textAlign='center' fontWeight={700} mb="49px"
                        sx={{ fontSize: { lg: '44px', xs: '30px' } }} >
                Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField type="text" height="76px" placeholder="Search Exercises"
                           sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                               width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                           value={search}
                           onChange={(e)=> setSearch(e.target.value)}
                />
                <Button className='search-btn' sx={{ bgcolor: '#FF2625', color: '#fff',
                    textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px',
                    position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }}
                        onClick={handleSubmit}>
                    Search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} statusBodyParts />
            </Box>
        </Stack>
    );
}

export default SearchExercise;