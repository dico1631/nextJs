'use client'

import Link from 'next/link';

export default async function ListItem(props) {
    return (
        <div>
            {
                props.result.map((a, i) => {
                    return (
                        <div className="list-item" key={i}>
                            <Link href={`/detail/${a._id}`}>{a.title}</Link>
                            <p>{a.content}</p>
                            <Link href={`/edit/${a._id}`}>🪄</Link>
                            <button type='button' onClick={() => {
                                fetch('/api/test').then(()=>{
                                    console.log("삭제");
                                });
                            }}>삭제</button>
                        </div>
                    )
                })
            }
        </div>
    )
}