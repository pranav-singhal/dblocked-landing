import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import StudentTestimonials from '@/components/studentTestimonials';
import React from 'react';

interface Testimonial {
    name: string;
    username: string;
    quote: string;
    image: string;
}


const Students = async () => {
    const res = await fetch(`${process.env.BASE_URL as string}/api/testimonials`);  
    const data = await res.json();
    const testimonials: Testimonial[] = data.testimonials;
    return (
        <div>
            <Header />
            {/* <Performers /> */}
            <StudentTestimonials testimonials={testimonials} />
            <Footer />
        </div>
    )
}

export default Students;