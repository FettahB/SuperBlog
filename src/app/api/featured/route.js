import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

//gets last post
export const GET = async () => {
  try {
    const post = await prisma.post.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};