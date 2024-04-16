'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default async function DarkMode() {
  const router = useRouter();
  let cookie = '';

  useEffect(()=>{
    const cookie = (`; ${document.cookie}`).split('; mode=').pop().split(';')[0];
    if(!cookie){
      document.cookie = `mode=light; max-age=${3600 * 24 * 400}`;
    }
  }, []);

  return (
    <button type="button" onClick={() => {
      const cookie = (`; ${document.cookie}`).split('; mode=').pop().split(';')[0];
      if(cookie === 'light'){
        document.cookie = `mode=dark; max-age=${3600 * 24 * 400}`;
      } else{
        document.cookie = `mode=light; max-age=${3600 * 24 * 400}`;
      }
      router.refresh();
    }}>모드변경</button>
  );
}
