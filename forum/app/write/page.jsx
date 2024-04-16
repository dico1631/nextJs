'use client'

import { useState } from "react";

export default function Write(){

    const [src, setSrc] = useState('');

    return(
        <div className="p-20">
            <h4>글작성</h4>
            <form action="/api/WritePosting" method="POST">
                <div>
                    <label htmlFor="title">제목 : </label>
                    <input type="text" id="title" name="title" />
                </div>
                <div>
                    <label htmlFor="content">내용 : </label>
                    <textarea id="content" name="content" rows="4" cols="50"></textarea>
                </div>
                <div>
                    {/* <input
                        type="file"
                        name=""
                        id=""
                        accept="image/*"
                        onChange={async (e) => {
                            const file = e.target.files[0]
                            const fileName = encodeURIComponent(file.name);
                            const res = await fetch(`/api/post/image?file=${fileName}`).then((res) => res.json);

                            // creatObjectURL 쓰면 업로드 없이 미리보기 가능
                            //S3 업로드
                            const formData = new FormData() // form tag 역할
                            Object.entries({ ...res.fields, file }).forEach(([key, value]) => {
                                formData.append(key, value)
                            });
                            let 업로드결과 = await fetch(res.url, {
                                method: 'POST',
                                body: formData,
                            });
                            console.log(업로드결과);

                            if (업로드결과.ok) {
                                setSrc(업로드결과.url + '/' + filename);
                            } else {
                                console.log('실패');
                            }
                        }}
                    />
                    <button type="submit">이미지 업로드</button>
                    <img src={src} alt="" /> */}
                </div>
                <div>
                    <button type="submit">버튼</button>
                </div>
            </form>
        </div>
    )
}