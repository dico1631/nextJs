export default function Write(){
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
                    <button type="submit">버튼</button>
                </div>
            </form>
        </div>
    )
}