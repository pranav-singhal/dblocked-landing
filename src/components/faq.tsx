import {
  Accordion, AccordionContent, AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-primary">Faq</span>
        <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="max-w-lg text-center text-lg text-muted-foreground">
        For any other questions, please feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full max-w-3xl divide-y">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            When is the program launching?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            &quot; 0 to web3&quot; will launch in early august! So sign up above to get an update as
            soon as we launch
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Are there any certifications?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            0 to web3 is not like other programs. We will provide you with a blockchain developer
            certificate. But it will be based on a regular evaluation and active engagement in the
            program. There are no exams that you need to take to earn a certification
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Can &quot;0 to web3&quot; help me get a job?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            We will try our best to find you employment. But this is not a a guarantee that we can
            provide right now
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Can I get travel scholarships?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Absolutely! The top performers for our first cohort will get a stipend to cover their
            travel and accommodations to EthIndia&apos;2024 - the biggest Ethereum hackathon in the
            country
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Are there any hidden fees?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Absolutely not! &quot; 0 to Web3&quot; is, and always will be free for everyone who
            signs up. 
            We are supported by excellent partners and grants. This ensures that we will be able to give you quality content for absolutely 0 cost
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
