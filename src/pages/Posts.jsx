import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function Posts() {
  return (
    <div className="posts-page">
      <header className="page-header">
        <h1>All Posts</h1>
        <p>Explore our collection of articles and insights</p>
      </header>

      <div className="posts-list">
        {posts.length > 0 ? (
          posts.map((post) => {
            const excerpt = post.content.split('\n\n').find(p => p.length > 20) || post.content;
            return (
              <article key={post.id} className="post-card">
                <Link to={`/posts/${post.id}`}>
                  <h2>{post.title}</h2>
                  <div className="post-meta">
                    <span className="post-author">By {post.author}</span>
                    <time className="post-date" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                  </div>
                  <p>{excerpt.substring(0, 200).replace(/^#+ /, '')}...</p>
                </Link>
              </article>
            );
          })
        ) : (
          <p>No posts available yet.</p>
        )}
      </div>
    </div>
  );
}
