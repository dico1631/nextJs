import { connectDB } from "../../app/database";
import { ObjectId } from "mongodb";

export default async function handler(request,response) {
  
    if (request.method === 'POST') {
        // 요청으로부터 제목과 내용을 가져옵니다.
        const { title, content } = request.body;        
        const db = (await connectDB).db("forum");
        if(request.body.title == ''){
            return response.status(500).json({ message: "제목쓰셈" });
        }
        
        if(request.body.content == ''){
            return response.status(500).json({ message: "내용쓰셈" });
        }
        try {
            // post 컬렉션에 데이터를 삽입합니다.
            await db.collection('post').insertOne({
                title: title,
                content: content
            });

            //return response.status(201).json({ message: "게시물이 성공적으로 작성되었습니다." });
            return response.status(201).redirect('/list');
        } catch (error) {
            console.error("게시물 삽입 중 오류:", error);
            return response.status(500).json({ message: "게시물을 작성하는 중 오류가 발생했습니다." });
        }
    } else {
        return response.status(405).json({ message: "POST 요청만 허용됩니다." });
    }
}