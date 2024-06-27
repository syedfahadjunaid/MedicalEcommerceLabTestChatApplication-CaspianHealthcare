import { Favorite, LocationOn, Restore } from '@mui/icons-material';
import { BottomNavigationAction, Box } from '@mui/material';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function BottomNavigation() {
    const [value, setValue] = useState(0);
    useEffect(()=>{
      console.log(value)
    },value)
  return (
    <div>
          <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
      </BottomNavigation>
    </Box>
    </div>
  )
}

export default BottomNavigation