import { connectDB } from "@/app/database";

export const revalidate = 60; // 페이지 단위로 캐싱이 되어 리소스 아낄 수 있음

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection('post').find().toArray();

  // 캐싱 하는 법
  // await fetch('/URL', {cache: 'force-cache'}); // default 상태
  // await fetch('/URL', {cache: 'no-store'}); // cache 안함
  // await fetch('/URL', {next: {revalidate: 60}}); // 60초마다 다시 가져옴

  return (
    <div>안녕dd</div>  
  );
}
