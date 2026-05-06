import { useState } from "react";
import { WordRow, Button, DeleteButton } from "../styles/CommonStyle";

export default function Word({ word: initialWord }) {
  const [word, setWord] = useState(initialWord);
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(initialWord.isDone);

  if (!word) {
    return null;
  }

  function toggleShow() {
    setIsShow((prev) => !prev);
  }

  function toggleDone() {
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone((prev) => !prev);
      }
    });
  }

  function del() {
    if (window.confirm("삭제하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord(null);
        }
      });
    }
  }

  return (
    <WordRow $isDone={isDone}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone} />
      </td>

      <td>{word.eng}</td>

      <td>{isShow ? word.kor : ""}</td>

      <td>
        <Button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</Button>
        <DeleteButton onClick={del}>삭제</DeleteButton>
      </td>
    </WordRow>
  );
}
