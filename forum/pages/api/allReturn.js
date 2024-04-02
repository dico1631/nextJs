import { connectDB } from "../../app/database";
import { ObjectId } from "mongodb";

export default async function handler(request,response) {

  const db = (await connectDB).db("next");
  let result = await db.collection('post').find().toArray();

  return response.status(200).json(result);
}