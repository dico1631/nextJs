import { connectDB } from "@/app/database";
import { ObjectId } from "mongodb";
import Comment from "./Comment";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function Detail(props) {
  let session = await getServerSession(authOptions);

  const db = (await connectDB).db("forum");
  let result = await db.collection('post').findOne({
    _id: new ObjectId(props.params.id)
  } )

  return (
    <main>
    <div className="list-bg">
      <h4>상세페이지</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
      <Comment session={session}/>
    </div>
    </main>
  );
}
