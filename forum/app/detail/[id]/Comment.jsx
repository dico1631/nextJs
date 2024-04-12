'use client'

import { useEffect, useState } from "react";

export default function Comment({parentId}){
  let [comment, setComment] = useState('');
  let [comments, setComments] = useState([]);

  const request = {
    content: comment,
    parent: parentId,
  }

  useEffect(() => {
    fetch(`/api/comment/list?parentId=${parentId}`).then((r) => r.json())
    .then((result) => {
      setComments(result);
    });
  }, []);

  return(
    <div>
      <div>
        {comments.map((comment) => (
          <dl>
            <dt>{`작성자: ${comment.author}`}</dt>
            <dd>{`내용: ${comment.content}`}</dd>
          </dl>
        ))}
      </div>
      <input onChange={(e) => setComment(e.target.value)}/>
      <button onClick={() => {
        fetch('/api/comment/new', {method: 'POST', body: JSON.stringify(request)}).then((r) => r.json())
        .then(({ data }) => setComments((prev) => [...prev, data]));
      }}>댓글전송</button>
    </div>
  );
}