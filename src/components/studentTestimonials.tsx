import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel, CarouselContent,
    CarouselItem,
    CarouselNext, CarouselPrevious
} from "@/components/ui/carousel";
import Image from "next/image";

interface Testimonial {
    name: string;
    username: string;
    quote: string;
    image: string;
}

export default function StudentTestimonials({testimonials}: {testimonials: Testimonial[]}) {


    return (
        <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
            <div className="flex flex-col gap-3">
                <span className="text-center font-bold uppercase text-primary">Testimonials</span>
                <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl">
                    What our Students say
                </h2>
            </div>
            <p className="max-w-lg text-center text-lg text-muted-foreground">
            Here`&apos;`s what our students around the internet are saying about us.
            </p>
            <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
                <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
                <CarouselContent className="pb-4">
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="h-full p-1">
                                <Card className="h-full shadow-md">
                                    <CardContent className="flex flex-col items-start gap-5 p-7">
                                        <div className="flex items-center gap-4">
                                            <div className="relative size-10">
                                                <Image
                                                    alt={`Picture of ${testimonial.name}`}
                                                    src={testimonial.image}
                                                    fill
                                                    className="rounded-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-semibold leading-none text-foreground">{testimonial.name}</p>
                                                <p className="mt-1 leading-none text-muted-foreground">{testimonial.username}</p>
                                            </div>
                                        </div>
                                        <p className="text-foreground">
                                            {`"${testimonial.quote}"`}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
            </Carousel>
        </section>
    );
}
