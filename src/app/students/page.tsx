import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Performers } from '@/components/perfomers';
import StudentTestimonials from '@/components/studentTestimonials'


const getData = async () => {
    
    try {
        const testimonialRes = await fetch(`${process.env.BASE_URL as string}/api/testimonials`, { cache: 'no-store' });  
        const testimonialData = await testimonialRes.json();
        const testimonials = testimonialData.testimonials;
    
        const performersRes = await fetch(`${process.env.BASE_URL as string}/api/performers`, { cache: 'no-store' });  
        const performersData = await performersRes.json();
        const performers = performersData.performers;
    
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