import { NextResponse } from "next/server";

const performers = [
    {
        "name": "John",
        "username": "@johndoe",
        "quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices orci. Vivamus ante arcu, hendrerit bibendum felis a, volutpat feugiat tellus. Aliquam erat volutpat.",
        "image": "/images/logo.jpg",
        "links": {
            "github": "https://github.com/DBlockEd",
            "x": "https://x.com/DBlockEd",
            "linkedin": "https://www.linkedin.com/company/dblocked/"
        }
    },
    {
        "name": "Max",
        "username": "@maxcook",
        "quote": "Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat ut ipsum ac congue. Vestibulum nec orci ornare, imperdiet metus vel.",
        "image": "/images/logo.jpg"
    },
    {
        "name": "Bob",
        "username": "@thisisbob",
        "quote": "Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut tortor et feugiat. Etiam vitae nisi eleifend, blandit ligula quis, sodales neque.",
        "image": "/images/logo.jpg"
    },
    {
        "name": "Emily",
        "username": "@emilysmith",
        "quote": "Suspendisse a velit elit. Curabitur augue libero, vulputate sed dui id, sodales venenatis sem. Suspendisse dapibus neque eu justo volutpat gravida.",
        "image": "/images/logo.jpg"
    },
    {
        "name": "Micheal",
        "username": "@michael",
        "quote": "Vivamus dignissim porta orci, finibus tempus risus consectetur dapibus. Donec quis ornare elit. Curabitur tempor eget urna eget lobortis dolor varius.",
        "image": "/images/logo.jpg",
        "links": {
            "github": "https://github.com/DBlockEd",
            "linkedin": "https://www.linkedin.com/company/dblocked/"
        }
    },
    {
        "name": "Linda",
        "username": "@thisislinda",
        "quote": "Nullam non lorem vitae risus volutpat dictum non sed magna. Aliquam in venenatis quam. Morbi feugiat tristique leo, vel ultrices dolor varius non. Quisque dictum tortor eu nunc.",
        "image": "/images/logo.jpg"
    }
]

  


export async function GET (
    req: Request,
    res: Response
  ) { 


    return NextResponse.json({ performers, status: 200 });
  }
  