'use client'

import { useParams } from "next/navigation";
import { useState } from "react";

export default function Comment({session}){
  const params = useParams();
  let [comment, setComment] = useState('');

  const request1 = {
    content: comment,
    author: session.user.name,
    parent: params.id,
  }
  return(
    <div>
      <div>댓글목록보여줄부분</div>
      <input onChange={(e) => setComment(e.target.value)}/>
      <button onClick={() => {
        fetch('/api/comment', {method: 'POST', body: request1});
      }}>댓글전송</button>
    </div>
  );
}