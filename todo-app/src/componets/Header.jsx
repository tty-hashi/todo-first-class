import React from 'react'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 60,
          backgroundColor: 'primary.dark',
        }}
      >
        <Sh1>初級TODO−APP</Sh1>
      </Box>
    </>
  )
}

export default Header

const Sh1 = styled.h1`
  color: #fff;
  line-height: 60px;
`