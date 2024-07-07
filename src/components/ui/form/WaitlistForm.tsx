'use client';
import { Button } from "@/components/ui/button";
import { FormEvent, useState } from "react";
import { Input } from "../input";


export default function WaitlistForm(props: any) {
    const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  async function handleSubmit(formEvent:  FormEvent<HTMLFormElement>)  {

    setLoading(true);
    formEvent.preventDefault();
    const formData = new FormData(formEvent.currentTarget)

    const email = formData.get('email');
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    try {
      let res = await fetch(`/api/subscriber`, {
        method: "POST",
        body: JSON.stringify({
            email
        }),
        headers
    });


    res = await res.json();

    if (res.status === 200 || res.status === 201) {
      setIsError(false)
    } else {
      setIsError(true);
    }
    setMessage(res?.message)

    console.log({res})  
    } catch (error) {
      setIsError(true);
    } finally {
      setLoading(false);
    }

    
    
  }

  
    return (
        <>
         <form 
        className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center" 
        onSubmit={handleSubmit}
      >
        <Input
          required
          type="email"
          name="email"
          placeholder="Enter your email"
          className="h-12 border-border bg-card px-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-14 sm:flex-1"
        />
        <Button disabled={loading} size="lg" type="submit" className="h-12 cursor-pointer text-base sm:h-14">
            Join the Waitlist
        </Button>
      </form>
      {message && (
                <span
                    className={` ${isError ? 'text-red-500' : 'text-green-500'} font-semibold`}
                >
                    {message}
                </span>
            )}
        </>
    )
}