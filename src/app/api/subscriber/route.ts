// import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { z } from "zod";

// Define response data type
type Data = { message?: string; error?: string; };

// Email validation schema
const EmailSchema = z
  .string()
  .email({ message: "Please enter a valid email address" });

// api/subscriber,
export async function POST (
  req: Request,
  res: Response
) {

  const body = await req.json();
  
  console.log("found body", {body}, process.env)
  // 1. Validate email address
  const emailValidation = EmailSchema.safeParse(body.email);
  if (!emailValidation.success) {
    return NextResponse.json({message: "invalid email provided", status: 400})
  }

  // 2. Retrieve Mailchimp credentials from environment variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

  // 3. Construct Mailchimp API request URL
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `api_key ${API_KEY}`);

  // 6. Send POST request to Mailchimp API
  try {
    let response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email_address: emailValidation.data,
          status: "subscribed",
        }),
        headers
    }) as any;
    
    response = await response.json();

    console.log("mailchimp response: ", response);
    
    if (response.status == 'subscribed') {
      return NextResponse.json({ message: "Awesome! You have successfully subscribed!", status: 200 });
    }

    if (response?.title === 'Member Exists') {
      return NextResponse.json({ message: "Looks like you are already subscribed", status: 201 });
    }

    
    return NextResponse.json({ message: "Something went wrong", status: response.status });
  } catch (error) {

    return NextResponse.json({
      message:
        "Oops! There was an error subscribing you to the newsletter. Please email me at ogbonnakell@gmail.com and I'll add you to the list.",
        status: 500
    });
  }
};

// export default subscribeHandler;