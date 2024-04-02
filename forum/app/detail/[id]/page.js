import { connectDB } from "./database";

import { ObjectId } from "mongodb";

export default async function Detail(props) {

  const db = (await connectDB).db("next");
  let result = await db.collection('post').findOne({_id: new 
    ObjectId(props.params.id) } )

  return (
    <main>
    <div className="list-bg">
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
    </main>
  );
}
