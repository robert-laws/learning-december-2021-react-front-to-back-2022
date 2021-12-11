function App() {
  const title = 'Blog Post';
  const body = 'This is my new blog post';
  const comments = [
    { id: 1, text: 'hello there' },
    { id: 2, text: 'welcome friend' },
    { id: 3, text: 'howdy buddy' },
  ];

  return (
    <div className='container'>
      <h1>{title}</h1>
      <p>{body}</p>

      {comments.length > 0 && (
        <div className='comments'>
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment) => {
              return <li key={comment.id}>{comment.text}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
