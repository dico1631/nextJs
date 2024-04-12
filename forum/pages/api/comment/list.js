import { connectDB } from "@/app/database";
import { ObjectId } from "mongodb";

export default async function handler(request, response) {

  const db = (await connectDB).db("forum");
  let result = await db.collection('newComment').find({ parent: new ObjectId(request.query.parentId) }).toArray();
  console.log('result');
  console.log(result);
  response.status(200).json(result);
}