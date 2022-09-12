import React, { useState } from 'react'
import { Box } from '@mui/system'
import CompleteTodos from './molucules/CompleteTodos';
import InputArea from './molucules/InputArea'
import List from './molucules/List';

const TodoList = () => {

  const [todos, setTodos] = useState([{ id: 1, title: 'firstTod', isComplete: false }, { id: 2, title: 'secontTodo', isComplete: false }]);
  const [completeTodos, setCompleteTodos] = useState([{ id: 1111, title: 'firstCompleteTod', isComplete: false }])
  return (
    <>
      <Box sx={{ width: '100%', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: 5 }} >
        <Box sx={{ width: '100%', height: 60, backgroundColor: '#1664C0', lineHeight: '60px', color: '#fff', marginBottom: 5 }} >
          <h2>未完了リスト</h2>
        </Box>
        <InputArea todos={todos} setTodos={setTodos} />
        <List todos={todos} setTodos={setTodos} completeTodos={completeTodos} setCompleteTodos={setCompleteTodos} />
        <Box sx={{ width: '100%', height: 60, backgroundColor: '#1664C0', lineHeight: '60px', color: '#fff' }} >
          <h2>完了リスト</h2>
        </Box>
        <CompleteTodos todos={todos} setTodos={setTodos} completeTodos={completeTodos} setCompleteTodos={setCompleteTodos} />
      </Box>
    </>
  )
}

export default TodoList

