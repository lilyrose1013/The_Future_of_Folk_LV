import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';

export default function PostDetail() {
  const { id } = useParams();
  const postIndex = posts.findIndex(p => p.id === id);
  const post = posts[postIndex];

  if (!post) {
    return <Navigate to="/posts" replace />;
  }

  const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
  const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

  return (
    <article className="post">
      <header className="post-header">
        <h1 className="post-title">{post.title}</h1>
        <div className="post-meta">
          <span className="post-author">By {post.author}</span>
          <time className="post-date" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
        </div>
      </header>

      <div className="post-content">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <footer className="post-footer">
        <nav className="post-navigation">
          {prevPost && (
            <Link to={`/posts/${prevPost.id}`} className="prev-post">
              ← {prevPost.title}
            </Link>
          )}
          {nextPost && (
            <Link to={`/posts/${nextPost.id}`} className="next-post">
              {nextPost.title} →
            </Link>
          )}
        </nav>
        <Link to="/posts" className="back-home">← Back to Posts</Link>
      </footer>
    </article>
  );
}
