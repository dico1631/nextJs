"use client"

import Link from 'next/link';

export default async function ListItem({result}) {
    console.log(result);
    return (
        <div>
            {
                result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${a._id}`}>{a.title}</Link>
                            <p>{a.content}</p>
                            <Link href={`/edit/${a._id}`}>🪄</Link>
                            <button type='button' onClick={()=>{
                                fetch('/api/delete', {
                                    method : 'POST',
                                    body : result[i]._id
                                }).then(()=>{
                                    console.log("삭제 then");
                                })
                            }}> 삭제 </button>
                        </div>
                    )
                })
            }
        </div>
    )
}