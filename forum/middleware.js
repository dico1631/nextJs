import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

export async function middleware(request) {
  // 유저가 요청하면 항상 이 내용이 먼저 실행되고 response 함
  // console.log(request.nextUrl);
  // console.log(request.cookies);
  // console.log(request.headers);

  // NextResponse.next(); // 통과
  // NextResponse.redirect(); // 다른 페이지로 강제 이동(주소창 이동)
  // NextResponse.rewrite(); // 다른 페이지로 강제 이동(주소창은 그대로)

  if ( request.nextUrl.pathname.startsWith('/list')) {
    console.log(new Date());
    console.log(request.headers.get('sec-ch-ua-platform')); // 사파리 사용 불가
  }

  // jwt 토큰 방식 로그인 구현 시
  const session = await getToken({req: request});

  if ( request.nextUrl.pathname.startsWith('/write')) {
    // if(session == null){
    //   return NextResponse.redirect(new URL('http://localhost:3000/api/auth/signin'));
    // }
  }

}