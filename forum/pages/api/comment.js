import { connectDB } from "../../app/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {
    if (request.method === 'POST') {
        const { content, author, parent } = JSON.parse(request.body);
        const db = (await connectDB).db("forum");
        if(content == ''){
            return response.status(500).json({ message: "댓글 내용이 없어요" });
        }
        
        if(author == ''){
            return response.status(500).json({ message: "로그인하세요" });
        }
        try {
            // post 컬렉션에 데이터를 삽입합니다.
            await db.collection('comment').insertOne({
              content: content,
              author: author,
              parent: parent,
            });

            return response.status(201).json({ message: "게시물이 성공적으로 작성되었습니다." });
        } catch (error) {
            console.error("게시물 삽입 중 오류:", error);
            return response.status(500).json({ message: "게시물을 작성하는 중 오류가 발생했습니다." });
        }
    } else {
        return response.status(405).json({ message: "POST 요청만 허용됩니다." });
    }
}