"use client"

import Link from 'next/link';

export const dynamic = 'force-dynamic';

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
                            <button type='button' onClick={(e)=>{
                                fetch('/api/delete', {
                                    method : 'DELETE',
                                    body : result[i]._id,
                                }).then((r)=>{
                                    return r.json();
                                }).then(() => {
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display = 'none';
                                    }, 1000);
                                });
                            }}>삭제</button>
                        </div>
                    )
                })
            }
        </div>
    )
}