import React from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Performers } from '@/components/perfomers'
import { StudentTestimonials } from '@/components/studentTestimonials'

const page = () => {
    return (
        <div>
            <Header />
            <Performers />
            <StudentTestimonials />
            <Footer />
        </div>
    )
}

export default page