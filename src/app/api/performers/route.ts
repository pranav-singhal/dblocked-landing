import { NextResponse } from "next/server";

const performers = [
    {
        "name": "Dasarath G",
        "username": "dasarathg68",
        "quote": "Electronics Engineer with Full Stack, Embedded Systems, and IoT expertise, now looking to make his mark in the web3 space.",
        "image": "https://yxhsflckskmexihriulw.supabase.co/storage/v1/object/public/student-images/Dasarath%20G%20profile.jpg",
        "links": {
            "github": "https://github.com/dasarathg68",
            "x": "https://x.com/dasarathg68",
            "linkedin": "https://www.linkedin.com/in/dasarathg68/"
        }
    },
    {
        "name": "Vansh Sahay",
        "username": "VanshSahay",
        "quote": "Web2 developer diving into the decentralized world of web3. Passionate about building the next generation of trustless, transparent, and user-empowering applications. Always learning, always coding, and excited to shape the future of the internet.",
        "image": "https://yxhsflckskmexihriulw.supabase.co/storage/v1/object/public/student-images/Me%20from%20Vansh%20Sahay.jpg",
        "links": {
            "github": "https://github.com/VanshSahay",
            "x": "https://twitter.com/vansh_sahay",
            "linkedin": "https://www.linkedin.com/in/vanshsahay/"
        }
    },
    {
        "name": "Himanshu Rai ",
        "username": "himanshuraimau",
        "quote": "A Software Engineer Blending Web3 and AI",
        "image": "https://yxhsflckskmexihriulw.supabase.co/storage/v1/object/public/student-images/himanshu.jpg",
        "links": {
            "github": "https://github.com/himanshuraimau",
            "x": "https://x.com/himanshura_i",
            "linkedin": "https://in.linkedin.com/in/himanshu-rai-246121278"
        }
    }
]

  


export async function GET (
    req: Request,
    res: Response
  ) { 


    return NextResponse.json({ performers, status: 200 });
  }
  