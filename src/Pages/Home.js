import React, {useState} from "react";
import { Box } from "@mui/material";

import HeroBanner from "../Component/HeroBanner";
import SearchExercise from "../Component/SearchExercise";
import Exercise from "../Component/Exercise";

const Home = ()=> {
    const [ bodyPart, setBodyPart ] = useState('all')
    const [exercises, setExercises]  = useState([])
    console.log(exercises)
    console.log(bodyPart)
    return (
        <Box>
            <HeroBanner />
            <SearchExercise setExercises={setExercises} bodyPart={bodyPart}
                            setBodyPart={setBodyPart} />
            <Exercise setExercises={setExercises} exercises={exercises} bodyPart={bodyPart}/>
        </Box>
    );
}

export default Home;