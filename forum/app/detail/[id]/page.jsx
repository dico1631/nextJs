import { connectDB } from "@/app/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

export default async function Detail(props) {

  const db = (await connectDB).db("forum");
  let result = await db.collection('post').findOne({
    _id: new ObjectId(props.params.id)
  } )

  if(result === null){
    return notFound();
  }

  return (
    <main>
    <div className="list-bg">
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment parentId={result._id.toString()} />
    </div>
    </main>
  );
}
