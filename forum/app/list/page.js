export default async function List() {

  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray();
  console.log(result);

  return (
    <div className="list-bg">
      { result.map(()=>
        <div className="list-item" key={i}>
          <h4>{result[i].title}</h4>
          <p>1월 1일</p>
        </div>
      ) }
    </div>
  )
}