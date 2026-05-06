import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { InputArea, Button } from "../styles/CommonStyle";

export default function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  function onSubmit(e) {
    e.preventDefault();

    if (!isLoading && dayRef.current && engRef.current && korRef.current) {
      setIsLoading(true);

      const day = dayRef.current.value;
      const eng = engRef.current.value;
      const kor = korRef.current.value;

      fetch("http://localhost:3001/words/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day,
          eng,
          kor,
          isDone: false,
        }),
      }).then((res) => {
        if (res.ok) {
          alert("생성이 완료되었습니다!");
          navigate(`/day/${day}`);
          setIsLoading(false);
        }
      });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <InputArea>
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </InputArea>

      <InputArea>
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </InputArea>

      <InputArea>
        <label>Day</label>
        <select ref={dayRef}>
          {days.map((day) => (
            <option key={day.id} value={day.day}>
              {day.id}
            </option>
          ))}
        </select>
      </InputArea>

      <Button type="submit" $isLoading={isLoading} disabled={isLoading}>
        {isLoading ? "Saving..." : "저장"}
      </Button>
    </form>
  );
}
