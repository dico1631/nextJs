import { connectDB } from "./database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("mongol");
  let result = await db.collection('post').find().toArray();
  return (
    <main>

    <div>
      안녕dd
    </div>  
    </main>
  );
}
