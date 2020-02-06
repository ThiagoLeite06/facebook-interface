import React from 'react';

import './styles.css';

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post-card">
      <div className="post-card__header">
        <img src={author.avatar} className="post-card__avatar" />
        <p className="post-card__user-name">{author.name}</p>
        <p className="post-card__date">{date}</p>
      </div>
      <div className="post-card__container">
        <p>{content}</p>
      </div>
      {comments.map(comment => (
        <div className="post-card__comment-container">
          <img src={comment.author.avatar} className="post-card__comment-avatar" />
          <div className="post-card__comment-content">
            <p><b>{comment.author.name} </b>{comment.content}</p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default PostItem;
