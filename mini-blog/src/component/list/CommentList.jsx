import CommentListItem from "./CommentListItem";

export default function CommentList({ comments }) {
  if (comments.length === 0) {
    return <p>아직 댓글이 없습니다.</p>;
  }

  return (
    <div>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
