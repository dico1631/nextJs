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
                                // fetch('/api/delete', {
                                //     method : 'POST',
                                //     body : result[i]._id,
                                // }).then((r)=>{
                                //     return r.json();
                                // }).then(() => {
                                //     e.target.parentElement.style.opacity = 0;
                                //     setTimeout(() => {
                                //         e.target.parentElement.style.display = 'none';
                                //     }, 1000);
                                // });
                                console.log("클릭");
                                fetch('/api/test');
                                // fetch('/api/abc/어쩌구');
                            }}> 삭제 </button>
                        </div>
                    )
                })
            }
        </div>
    )
}