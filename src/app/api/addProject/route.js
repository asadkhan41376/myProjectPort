import { NextResponse } from "next/server";

export async function POST(req) {
try {
    const body = await req.json();
   const  {title} = body;

if(!title){
    return NextResponse.json({message : "hello"},{status:400})
}
return NextResponse.json({ message: 'Project added successfully!', data: body }, { status: 200 });
} catch (e) {
  
        // Error handling
        return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
      }
}
    
