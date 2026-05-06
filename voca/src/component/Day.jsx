import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Word from "./Word";
import { WordTable } from "../styles/CommonStyle";

export default function Day() {
  const { day } = useParams();
  const words = useFetch(`http://localhost:3001/words?day=${day}`);

  if (words === null) {
    return <span>Loading...</span>;
  }

  return (
    <>
      <h2>Day {day}</h2>

      {words.length === 0 ? (
        <span>등록된 단어가 없습니다.</span>
      ) : (
        <WordTable>
          <tbody>
            {words.map((word) => (
              <Word word={word} key={word.id} />
            ))}
          </tbody>
        </WordTable>
      )}
    </>
  );
}
