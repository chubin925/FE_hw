import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Button } from "../styles/CommonStyle";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days");
  const navigate = useNavigate();

  function addDay() {
    const nextDay =
      days.length === 0
        ? 1
        : Math.max(...days.map((day) => Number(day.day))) + 1;

    fetch("http://localhost:3001/days/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: nextDay,
      }),
    }).then((res) => {
      if (res.ok) {
        alert("생성이 완료되었습니다!");
        navigate("/");
      }
    });
  }

  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <Button onClick={addDay}>Day 추가</Button>
    </div>
  );
}
