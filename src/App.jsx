import React, { useState } from 'react';

export const App = () => {
  //「Todoを入力」に記入させる
    //入力欄
  const [textTodos, setTextTodos] = useState('');
    //入力しているときの動き
  const onChangeTextTodos = (event) => setTextTodos(event.target.value);

  //記入した内容を「追加」ボタンで下の欄に出力 
    //下の欄
  const [underTodos, setUnderTodos] =useState([]);
    //「追加」ボタンを押したときの動き
  const onClickAddTodos = () => {
    const newTodolist = [...underTodos, textTodos];
    setUnderTodos(newTodolist);
  };

  //下の欄に出力されたTodoの内容横の「削除」ボタンで削除
  //const [deleteTodos, setDeleteTodos] = useState("")

  return (
    <>
      <div>
        <h1>Todoリスト</h1>
        <input placeholder="Todoを入力" value={textTodos} onChange={onChangeTextTodos}/>
        <button  onClick={onClickAddTodos}>追加</button>
     </div>
      <ul>
            <div>
              <li>買い物</li>
               <button>削除</button>
            </div>
       
      </ul>
    </>
  );
  
};