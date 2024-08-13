import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface Performer {
    name: string;
    username: string;
    quote: string;
    image: string;
    links?: {
        github?: string;
        x?: string;
        linkedin?: string;
    };
}

export function Performers({performers}: {performers: Performer[]}) {
    

    return (
        <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
            <div className="flex flex-col gap-3">
                <span className="text-center font-bold uppercase text-primary">Top Performers</span>
                <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl">
                    Our Star Builders
                </h2>
            </div>
            <p className="max-w-lg text-center text-lg text-muted-foreground">
                Here are the top performers of this week
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
                                    <Link target="_blank" href={`https://www.github.com/${performer.username}`} >
                                    <p className="mt-1 leading-none text-muted-foreground">@{performer.username}</p>
                                    </Link>
                                </div>
                            </div>
                            <p className="text-foreground">
                                {`"${performer.quote}"`}
                            </p>
                            <div className="float-right flex items-center gap-5 pb-2 pr-2">
                                {performer.links?.github && (
                                    <a
                                        href={performer.links.github}
                                        target="_blank"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        <Image
                                            src='/images/github.svg'
                                            alt="Github"
                                            width={24}
                                            height={24}
                                            className="size-5"
                                        />
                                    </a>
                                )}
                                {performer.links?.x && (
                                    <a
                                        href={performer.links.x}
                                        target="_blank"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        <Image
                                            src='/images/x.svg'
                                            alt="X"
                                            width={24}
                                            height={24}
                                            className="size-5"
                                        />
                                    </a>
                                )}
                                {performer.links?.linkedin && (
                                    <a
                                        href={performer.links.linkedin}
                                        target="_blank"
                                        className="text-muted-foreground hover:text-foreground"
                                    >
                                        <Image
                                            src='/images/linkedin.svg'
                                            alt="LinkedIn"
                                            width={24}
                                            height={24}
                                            className="size-5"
                                        />
                                    </a>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
