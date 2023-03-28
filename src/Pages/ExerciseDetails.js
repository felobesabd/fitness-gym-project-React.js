import React, {useEffect, useState} from "react";
import {Box} from "@mui/material";
import Detail from "../Component/Detail";
import ExerciseVideos from "../Component/ExerciseVideos";
import SimilarExercises from "../Component/SimilarExercises";
import {useParams} from "react-router-dom";
import {exerciseOptions, fetchData, youtubeOptions} from "../Utils/FetchData";

const ExerciseDetails = ()=> {

    const [ detailExercise, setDetailExercise ] = useState({})
    const [ exerciseVideo, setExerciseVideo ] = useState([])
    const [ exerciseTarget, setExerciseTarget ] = useState([])
    const [ exerciseEquipment, setExerciseEquipment ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
            setDetailExercise(exerciseDetailData)

            const exerciseYoutube = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
            setExerciseVideo(exerciseYoutube.contents)

            const exerciseTargetData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
            setExerciseTarget(exerciseTargetData)

            const exerciseEquipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
            setExerciseEquipment(exerciseEquipmentData)

        }
        fetchExerciseData()
    }, [id])

    useEffect(() => console.log(detailExercise))

    return (
            <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
                <Detail detailExercise={detailExercise}  />
                <ExerciseVideos video={exerciseVideo} name={detailExercise.name} />
                <SimilarExercises  equipment={exerciseEquipment} target={exerciseTarget}/>
            </Box>
    );
}

export default ExerciseDetails;