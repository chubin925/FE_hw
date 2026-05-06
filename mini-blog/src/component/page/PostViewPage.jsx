import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../db/data.json";

const PageWrapper = styled.div`
  width: 720px;
  margin: 40px auto;
`;

const BackButton = styled(Link)`
  display: inline-block;
  margin-bottom: 20px;
  padding: 8px 14px;
  border-radius: 8px;
  background-color: #eeeeee;
  color: #333;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    background-color: #dddddd;
  }
`;

const PostBox = styled.div`
  padding: 22px;
  border: 1px solid #dddddd;
  border-radius: 12px;
  background-color: #ffffff;
  margin-bottom: 24px;
`;

const PostTitle = styled.h2`
  margin: 0 0 14px 0;
  font-size: 22px;
`;

const PostContent = styled.p`
  margin: 0;
  line-height: 1.7;
  white-space: pre-wrap;
`;

const CommentTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 12px;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const CommentItem = styled.div`
  padding: 12px 14px;
  border: 1px solid #dddddd;
  border-radius: 8px;
  background-color: #fafafa;
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 70px;
  margin-top: 18px;
  padding: 12px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  resize: none;
  box-sizing: border-box;
`;

const CommentButton = styled.button`
  margin-top: 8px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  background-color: #eeeeee;
  cursor: pointer;

  &:hover {
    background-color: #dddddd;
  }
`;

export default function PostViewPage() {
  const { postId } = useParams();

  const post = data.posts.find((post) => Number(post.id) === Number(postId));

  if (!post) {
    return (
      <PageWrapper>
        <BackButton to="/">뒤로가기</BackButton>
        <p>게시글을 찾을 수 없습니다.</p>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <BackButton to="/">뒤로가기</BackButton>

      <PostBox>
        <PostTitle>{post.title}</PostTitle>
        <PostContent>{post.content}</PostContent>
      </PostBox>

      <CommentTitle>댓글</CommentTitle>

      <CommentList>
        {post.comments.map((comment) => (
          <CommentItem key={comment.id}>{comment.content}</CommentItem>
        ))}
      </CommentList>

      <CommentInput placeholder="댓글을 입력하세요" />
      <CommentButton>댓글 작성하기</CommentButton>
    </PageWrapper>
  );
}
