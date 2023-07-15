import React, { useState } from 'react';
import { InputTodo } from './components/InputTodo';
import { UnderTodo } from './components/UnderTodo'; 

export const App = () => {
  //「Todoを入力」に記入させる
    //入力欄
  const [textTodos, setTextTodos] = useState('');
    //入力しているときの動き
  const onChangeTextTodos = (event) => setTextTodos(event.target.value);

  //記入した内容を「追加」ボタンで下の欄に出力
      // 記入した内容を入力欄から追加
        //下の欄
        const [underTodos, setUnderTodos] =useState([]);
        //「追加」ボタンを押したときの動き
        const onClickAddTodos = () => {
          //記入した内容が空欄だった場合、空欄は反映されないようにする
          if(textTodos==="") return;
          //記入されている場合、「追加」ボタンを押したときに下の欄に反映する
          const newTodolist = [...underTodos, textTodos];
          setUnderTodos(newTodolist);
          setTextTodos("");

  };

  //下の欄に出力されたTodoの内容横の「削除」ボタンで削除
    //「削除」ボタンを押した時の動き
  const onClickDeleteTodo = (index) => {
    const deleteTodoList = [...underTodos];
    deleteTodoList.splice(index, 1);
    setUnderTodos(deleteTodoList);
  };

  return (
    <>
      <InputTodo
        textTodos={textTodos}
        onChange={onChangeTextTodos}
        onClick={onClickAddTodos} 
      />
      <UnderTodo
        underTodos={underTodos}
        onClick={onClickDeleteTodo}
      />
    </>
  );
  
};