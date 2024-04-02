import { connectDB } from "./database";
import { ObjectId } from "mongodb";

export default async function Edit(props){
    
    const db = (await connectDB).db("next");
    let result = await db.collection('post').findOne({_id: new 
    ObjectId(props.params.id) } )

    return(
        <div className="p-20">
            <h4>글수정</h4>
            <form action="/api/EditPosting" method="POST">
                <div>
                    <label htmlFor="title">제목 : </label>
                    <input type="text" id="title" name="title" defaultValue={result.title}></input>
                </div>
                <div>
                    <label htmlFor="content">내용 : </label>
                    <textarea id="content" name="content" rows="4" cols="50">{result.content}</textarea>
                </div>
                
                <input type="text" id="id" name="id" defaultValue={props.params.id}/>
                <div>
                    <button type="submit">버튼</button>
                </div>
            </form>
        </div>
    )
}