export default function PostListItem({ post, onClick }) {
  return (
    <div className="list-item" onClick={onClick}>
      {post.title}
    </div>
  );
}
