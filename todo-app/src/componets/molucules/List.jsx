import styled from '@emotion/styled';
import AtomButton from '../atoms/AtomButton';

const List = ({ todos, setTodos, completeTodos, setCompleteTodos }) => {
  const setTodoHandle = (todo, index) => {
    const completeTodo = todos.splice(index, 1);
    setCompleteTodos([...completeTodos, ...completeTodo])
  }

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <Sli key={todo.id}>
            <p>{todo.title}</p>
            <AtomButton setTodoHandle={(todo) => setTodoHandle(todo, index)} btnValue={'完了'} />
          </Sli>
        ))}
      </ul>

    </>
  )
}

export default List
export const Sli = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`