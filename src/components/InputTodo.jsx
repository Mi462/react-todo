import React from 'react';

export const InputTodo = (props) => {
  const {textTodos, onChange, onClick} = props;
  return (
    <div>
        <h1>Todoリスト</h1>
        <input placeholder="Todoを入力" value={textTodos} onChange={onChange}/>
        <button  onClick={onClick}>追加</button>
     </div>
  );
};