import { NextResponse } from "next/server";

const testimonials = [
    {
        "name": "Pavan Emani",
        "quote": "It's a time worthy course. Learnt about how web3 works, got a good understanding over how to build smart contracts efficiently, security conventions and vulnerabilities."
    },
    {
        "name": "Afreen Hosa",
        "quote": "The community is so active, there are sessions every now and then, updates on upcoming hackathons, and it's a great environment to be in! There are grades, ranking, and makes learning more fun! I still have to start making progress on my learning, but all the pings that I get on Discord, I just love to see how great the community and platform is! Thanks Pranav"
    },
    {
        "name": "Vansh Sahay",
        "quote": "It was really inclusive and beginner friendly, I had personally never done anything related to web3 before and this was a good starting point for me, the resources and support I got was really helpful and the amazing people in this community help you learn and grow so much!"
    },
    {
        "name": "Aditya Kr",
        "quote": "I've explored many courses, About Instructor - His dedication and passion for teaching and helping students is next level. I have learned so many things from him and will continue to do so. The course and one-on-one sessions are also good. We've just started and we are growing community-wise. If you have a problem, the DBlockEd community is there to help you out."
    }
]



export async function GET(
    req: Request,
    res: Response
) {


    return NextResponse.json({ testimonials, status: 200 });
}
