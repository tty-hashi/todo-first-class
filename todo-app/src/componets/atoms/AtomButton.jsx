import React from 'react'
import { Button } from '@mui/material'

const AtomButton = ({ valueState, setTodoHandle, btnValue }) => {
  return (
    <Button disabled={valueState} sx={{ display: 'block', height: '56px', paddingRight: '25px', paddingLeft: '25px' }} variant="contained" onClick={setTodoHandle}>{btnValue}</Button>
  )
}

export default AtomButton