'use client'

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Comment({session, comments}){
  const params = useParams();
  let [comment, setComment] = useState('');

  console.log(comments);

  const request = {
    content: comment,
    author: session.user.name,
    parent: params.id,
  }
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
        fetch('/api/comment', {method: 'POST', body: JSON.stringify(request)});
      }}>댓글전송</button>
    </div>
  );
}