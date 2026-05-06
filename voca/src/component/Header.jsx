import { Link } from "react-router-dom";
import { HeaderWrapper, HeaderMenu, HeaderLink } from "../styles/CommonStyle";

export default function Header() {
  return (
    <HeaderWrapper>
      <h1>
        <Link to="/">영어 단어장 만들기</Link>
      </h1>

      <HeaderMenu>
        <HeaderLink to="/create_word">단어 추가</HeaderLink>
        <HeaderLink to="/create_day">Day 추가</HeaderLink>
      </HeaderMenu>
    </HeaderWrapper>
  );
}
