'use strict';

// TODOを作成ボタンを押したときの操作

const addList = document.getElementById('addList');

addList.addEventListener('click', () => {
  // 入力値を取得
  const inputText = document.getElementById('inputText').value;
  if (!inputText) return; // 空なら追加しない

  const incompleteList = document.getElementById('incompleteList');  // ul取得
  const toDoList = document.createElement('li');  // li作成

  const check = document.createElement('input');  // チェックボックスを作成
  check.type = 'checkbox';
  
  // チェックが入ったら完了リストへ移動
  check.addEventListener('change', () => {
    if (check.checked) {
      // チェックが入った、完了したときの処理

      // 完了リストのul要素を取得
      const completeList = document.getElementById('completeList');

      if (!toDoList.querySelector('delete-btn')) {
        // 削除ボタンの追加
        const deleteButton = document.createElement('button');
        deleteButton.innerText = '削除';
        deleteButton.className = 'delete-btn';
        toDoList.appendChild(deleteButton);
       // 削除ボタンを押したときの処理
        deleteButton.addEventListener('click', () => {
        toDoList.remove();
        });
      }
      // 完了リストにTODOを移動
      completeList.appendChild(toDoList);
    } else {
      // チェックを外した時の処理

      // 削除ボタンを消す
      const deleteButton = toDoList.querySelector('.delete-btn');
      if (deleteButton) {
        deleteButton.remove();
      }
      // 未完了リストに戻す
      incompleteList.appendChild(toDoList);
    }
  });

  // 入力値の指定
  const toDo = document.createTextNode(inputText);

  // liに要素を追加
  toDoList.appendChild(check);  // liの中にチェックボックスを入れる
  toDoList.appendChild(toDo);  // liの中に入力値を入れる

  // 未完了リストに追加
  incompleteList.appendChild(toDoList);  // ulタグの中に上記のliを作成

  // 入力欄のクリア
  document.getElementById('inputText').value = '';
});
