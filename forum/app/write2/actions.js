'use server'

import { revalidate } from "../page";

export async function handleSubmit2(formData){
  console.log('안녕');
  console.log(formData);
};

// 새로고침 코드: revalidatePath('path')