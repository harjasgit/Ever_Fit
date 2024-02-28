import React , {useState} from 'react';
import { Box } from '@mui/material';


import Exercises from '../components/Exercises';
import HeroBanner  from '../components/HeroBanner';
import SerachExercises  from '../components/SerachExercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SerachExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises 
      setExercises={setExercises} 
      exercises={exercises}  
      bodyPart={bodyPart}   
      />
    </Box>
  );
};

export default Home;

