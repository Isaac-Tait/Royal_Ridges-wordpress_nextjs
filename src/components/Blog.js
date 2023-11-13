export default function Wordpress({ allPosts, preview }) {
  const post =
    allPosts && allPosts.edges && allPosts.edges.length > 0
      ? allPosts.edges[0].node
      : null;

  return (
    <div preview={preview}>
      {post && (
        <div>
          <div title={post.title}>{/* Other properties */}</div>
        </div>
      )}
    </div>
  );
}
