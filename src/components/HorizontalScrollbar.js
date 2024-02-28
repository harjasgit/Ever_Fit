import React from 'react';
import {Box} from '@mui/material';
import { ScrollMenu} from 'react-horizontal-scrolling-menu';

import ExerciseCard from './ExerciseCard';


import BodyPart from './BodyPart';

import RightArrow from './RightArrow';

import LeftArrow from './LeftArrow';

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item}
        itemId={item.id || item}
        title={item.id || item}
        m="0 40px"
      >
        {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
      </Box>
    ))}
  </ScrollMenu>
);


export default HorizontalScrollbar;