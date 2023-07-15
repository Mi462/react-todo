import React from 'react';

export const UnderTodo = (props) => {
  const {underTodos, onClick} = props;
  return (
    <ul>
        {underTodos.map((todo, index) => {
          return(
            <div key={todo}>
              <li>{todo}</li>
               <button onClick={() => onClick(index)}>削除</button>
            </div>
          );
        })}
      </ul>
  );
};