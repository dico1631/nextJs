import { connectDB } from "@/app/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response){
 if(request.method == 'DELETE'){
  console.log(request.body);
  const db = (await connectDB).db("forum");
  let result = await db.collection('post').deleteOne({_id : new ObjectId(request.body)});
  console.log(result);
 }
 response.status(200).json("삭제완료");
};
