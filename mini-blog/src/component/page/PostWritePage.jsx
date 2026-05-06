import { Link } from "react-router-dom";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 720px;
  margin: 40px auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 22px;
  margin-bottom: 24px;
`;

const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TitleInput = styled.textarea`
  width: 100%;
  height: 42px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  resize: none;
  box-sizing: border-box;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 320px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  resize: none;
  box-sizing: border-box;
`;

const SubmitButton = styled(Link)`
  display: inline-block;
  margin-top: 12px;
  padding: 9px 16px;
  border-radius: 8px;
  background-color: #eeeeee;
  color: #333;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background-color: #dddddd;
  }
`;

export default function PostWritePage() {
  return (
    <PageWrapper>
      <Title>수빈이의 미니 블로그</Title>

      <FormArea>
        <TitleInput placeholder="제목을 입력하세요" />
        <ContentInput placeholder="내용을 입력하세요" />
      </FormArea>

      <SubmitButton to="/">글 작성하기</SubmitButton>
    </PageWrapper>
  );
}
