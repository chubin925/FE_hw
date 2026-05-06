import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../../db/data.json";

const PageWrapper = styled.div`
  width: 720px;
  margin: 40px auto;
`;

const HeaderArea = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 24px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
`;

const WriteButton = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;

  padding: 8px 14px;
  border-radius: 8px;
  background-color: #eeeeee;
  color: #333;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #dddddd;
  }
`;

const PostListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const PostItem = styled(Link)`
  display: block;
  padding: 16px 18px;
  border: 1px solid #dddddd;
  border-radius: 10px;
  color: #222;
  text-decoration: none;
  background-color: white;

  &:hover {
    background-color: #f7f7f7;
  }
`;

function PostList() {
  return (
    <PostListWrapper>
      {data.posts.map((post) => (
        <PostItem to={`/post/${post.id}`} key={post.id}>
          {post.title}
        </PostItem>
      ))}
    </PostListWrapper>
  );
}

export default function MainPage() {
  return (
    <PageWrapper>
      <HeaderArea>
        <WriteButton to="/write">글 작성하기</WriteButton>
        <Title>수빈이의 미니 블로그</Title>
      </HeaderArea>

      <PostList />
    </PageWrapper>
  );
}
