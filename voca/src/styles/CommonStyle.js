import styled from "styled-components";
import { Link } from "react-router-dom";

export const AppWrapper = styled.div`
  width: 800px;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  position: relative;
`;

export const HeaderMenu = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;

export const HeaderLink = styled(Link)`
  border: 1px solid #333;
  padding: 10px;
  margin-left: 10px;
  background-color: #efefef;
  font-weight: bold;
  border-radius: 4px;
`;

export const ListDay = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const DayItem = styled.li`
  flex: 20% 0 0;
  box-sizing: border-box;
  padding: 10px;
`;

export const DayLink = styled(Link)`
  display: block;
  padding: 20px 0;
  font-weight: bold;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  background-color: dodgerblue;
`;

export const WordTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const WordRow = styled.tr`
  td {
    width: 25%;
    height: 70px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 26px;
    background: ${({ $isDone }) => ($isDone ? "#eee" : "transparent")};
    color: ${({ $isDone }) => ($isDone ? "#ccc" : "inherit")};
  }

  td:first-child {
    width: 10%;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-weight: bold;
  font-size: 18px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  border: 0 none;
  border-radius: 6px;
  color: #fff;
  background-color: dodgerblue;
  opacity: ${({ $isLoading }) => ($isLoading ? 0.3 : 1)};
`;

export const DeleteButton = styled(Button)`
  margin-left: 10px;
  background-color: firebrick;
`;

export const InputArea = styled.div`
  margin-bottom: 10px;

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 400px;
    height: 40px;
    font-size: 20px;
    padding: 0 10px;
  }

  select {
    width: 400px;
    height: 40px;
    font-size: 20px;
  }
`;
