import React, { useState } from 'react'
import { TextField } from '@mui/material'
import styled from '@emotion/styled'
import AtomButton from '../atoms/AtomButton';


const InputArea = ({ todos, setTodos }) => {
  const [value, setValue] = useState('');
  const onchangeValue = (e) => {
    setValue(e.target.value);
  }
  const setTodoHandle = () => {
    const newTodo = {
      id: Math.random().toString(32).substring(2),
      title: value,
      isComplete: false
    }
    setTodos([...todos, newTodo]);
    setValue('');
  }
  const valueState = value === '';
  return (
    <Sdiv>
      <TextField sx={{ marginRight: 5 }} id="outlined-basic" label="Toto input" variant="outlined" value={value} onChange={(e) => { onchangeValue(e) }} />
      <AtomButton valueState={valueState} setTodoHandle={setTodoHandle} btnValue={'追加'} />
    </Sdiv>
  )
}

export default InputArea

const Sdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`