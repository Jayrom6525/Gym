import React, { useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material/';

import { exerciseOptions, fetchData} from '../utils/fetchData';



const Exercises = ({ exercises, setExercises, bodyPart}) => {
  
  return (
    <Box id="exercises"
    sx={{mt: {lg: '110px'}}}
    mt='50px'
    p='20px'>
      <Typography variant='h3' mb='46px'>
        Showing Results ({exercises.length} exercises)
      </Typography>
      <Stack direction='row' sx={{ gap: {lg: '110px', xs: '50px'}}}
      flexWrap='wrap' justifyContent='center'>
      {exercises.map((exercise, index) => (
        <Box key={exercise.id || index} 
          sx={{
            borderTop: '4px solid #FF2625',
            borderRadius: '8px',
            backgroundColor: '#fff',
            p: '20px',
            minWidth: '300px',
            maxWidth: '400px',
            mb: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
          <img src={exercise.gifUrl} alt={exercise.name} 
            style={{width: '100%', height: '200px', objectFit: 'cover'}} 
            loading="lazy" />
          <Typography variant='h5' mt='10px' mb='5px' textTransform='capitalize'>
            {exercise.name}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Target: {exercise.target}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Body Part: {exercise.bodyPart}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Equipment: {exercise.equipment}
          </Typography>
        </Box>
      ))}
      </Stack>
    </Box>
  )
}

export default Exercises
