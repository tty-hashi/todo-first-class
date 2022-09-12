import styled from '@emotion/styled';
import React from 'react'
import AtomButton from '../atoms/AtomButton';
import { Sli } from './List';

const CompleteTodos = ({ todos, setTodos, completeTodos, setCompleteTodos }) => {

  const reverceTodoHandle = (todo, index) => {
    const reverceTodo = completeTodos.splice(index, 1);
    setTodos([...todos, ...reverceTodo]);
  }

  const deleteTodoHandle = (todo, index) => {
    console.log(index);
    const newTodos = [...completeTodos];
    const conpleteTodo = newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  }

  return (
    <>
      <ul>
        {completeTodos.map((todo, index) => (
          <Sli key={todo.id}>
            <p>{todo.title}</p>
            <Scontainer>
              <AtomButton setTodoHandle={(todo) => reverceTodoHandle(todo, index)} btnValue={'戻す'} />
              <AtomButton setTodoHandle={(todo) => deleteTodoHandle(todo, index)} btnValue={'削除'} />
            </Scontainer>
          </Sli>
        ))}
      </ul>
    </>
  )
}

export default CompleteTodos

const Scontainer = styled.div`
  display: flex;
  & > button {
    margin-right: 10px;
  }
`