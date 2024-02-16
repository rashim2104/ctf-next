import { NextResponse } from "next/server";

export async function POST(req){
    const {userAnswer1 , userAnswer2 , userAnswer3} = await req.json();
    const answers=["1","2","3"];
    try{
        if (userAnswer1 === answers[0] && userAnswer2 === answers[1] && userAnswer3 === answers[2]) {
            return NextResponse.json({ message: "All answers are correct. You have unlocked the next level." }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Some answers are incorrect. Please try again." }, { status: 200 });
        }
    } catch (error) {
        return NextResponse.json({ message: "An error occurred. Please try again." }, { status: 500 });
    }
}