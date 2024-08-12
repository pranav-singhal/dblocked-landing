import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Performers } from '@/components/perfomers';
import StudentTestimonials from '@/components/studentTestimonials';


interface Testimonial {
    name: string;
    username: string;
    quote: string;
    image: string;
}

interface Performer {
    name: string;
    username: string;
    quote: string;
    image: string;
}

const getData = async () => {
    try {
        const testimonialRes = await fetch(`${process.env.BASE_URL as string}/api/testimonials`);  
        const testimonialData = await testimonialRes.json();
        const testimonials: Testimonial[] = testimonialData.testimonials;
    
        const performersRes = await fetch(`${process.env.BASE_URL as string}/api/performers`);  
        const performersData = await performersRes.json();
        const performers: Performer[] = performersData.performers;
    
        return {performers, testimonials}
    }
     catch (error) {
         console.error("error while fetch student data", error);
        return { performers: [], testimonials: [] };

     }
    
}



const Students = async () => {

    const {performers, testimonials} = await getData();
    return (
        <div>
            <Header />
            <Performers performers={performers} />
            <StudentTestimonials testimonials={testimonials} />
            <Footer />
        </div>
    )
}

export default Students;