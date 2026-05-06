import useFetch from "../hooks/useFetch";
import { ListDay, DayItem, DayLink } from "../styles/CommonStyle";

export default function DayList() {
  const days = useFetch("http://localhost:3001/days");

  if (days.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <ListDay>
      {days.map((day) => (
        <DayItem key={day.id}>
          <DayLink to={`/day/${day.day}`}>Day {day.id}</DayLink>
        </DayItem>
      ))}
    </ListDay>
  );
}
