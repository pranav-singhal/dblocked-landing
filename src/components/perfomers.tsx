"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Performer {
    name: string;
    username: string;
    quote: string;
    image: string;
}

export function Performers() {
    const [performers, setPerformers] = useState<Performer[]>([]);

    useEffect(() => {
        fetch("/data/performers.json")
            .then((response) => response.json())
            .then((data: Performer[]) => setPerformers(data))
            .catch((error) => console.error("Error fetching performers:", error));
    }, []);

    return (
        <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
            <div className="flex flex-col gap-3">
                <span className="font-bold uppercase text-primary text-center">Top Performers</span>
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
                    Our Star Builders
                </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg text-center">
                Here are the top performers of this week. Keep building to see yourself here.
            </p>
            <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
                {performers.map((performer, index) => (
                    <Card key={index} className="shadow-lg">
                        <CardContent className="flex flex-col items-start gap-5 p-7">
                            <div className="flex items-center gap-4">
                                <div className="relative size-10">
                                    <Image
                                        alt={`Picture of ${performer.name}`}
                                        src={performer.image}
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold leading-none text-foreground">{performer.name}</p>
                                    <p className="mt-1 leading-none text-muted-foreground">{performer.username}</p>
                                </div>
                            </div>
                            <p className="text-foreground">
                                {`"${performer.quote}"`}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
