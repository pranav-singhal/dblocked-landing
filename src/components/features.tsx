import { Card, CardContent } from "@/components/ui/card";
import { Book, Cable, Computer, DollarSign, Mic, Trophy } from "lucide-react";


export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="text-center font-bold uppercase text-primary">Features</span>
        <h2 className="text-center font-heading text-3xl font-semibold sm:text-4xl">
          Do not join &quot;0 to Web3&quot; if
        </h2>
      </div>
      <p className="hidden max-w-2xl text-center text-lg text-muted-foreground">
        Reweb brings the best of two worlds together: the speed of development of no-code tools, and
        the flexibility of code customization.
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border-border bg-secondary p-2">
              <Mic size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                You do not want quality content, live AMAs and 1-1 mentorship all for free
              </h4>
              <p className="text-muted-foreground">
                With &quot;0 to web3&quot; You will get lifetime access to updated content which is
                geared towards winning hackathons and getting a job
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border-border bg-secondary p-2">
              <Book size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                You would rather pay hundreds of dollars for courses that are outdated
              </h4>
              <p className="text-muted-foreground">
                We are supported by excellent grants and partners. For you this means that we will give you state of the art content without charging you anything
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border-border bg-secondary p-2">
              <DollarSign size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                You don&apos;t want to get travel stipends for participating in hackathons
              </h4>
              <p className="text-muted-foreground">
                By partnering with industry leaders like Devfolio, we are able to give scholarships
                and travel stipends to our star performers
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border-border bg-secondary p-2">
              <Cable size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                You don&apos;t like learning cutting edge technologies
              </h4>
              <p className="text-muted-foreground">
                0 to Web3 is a never ending program. Once enrolled, you will have a lifetime of
                updates to everything in the web3 world
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border-border bg-secondary p-2">
              <Trophy size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                You don&apos;t want to win hackathons
              </h4>
              <p className="text-muted-foreground">
                Through &quot;0 to web3&quot;, you will get access to mentorship from past hacakthon
                winners and guidance on hackathon ideas
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border-border bg-secondary p-2">
              <Computer size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                You don&apos;t want a high paying job in tech
              </h4>
              <p className="text-muted-foreground">
                Web3 jobs statistically pay upto 40% higher than any other jobs in sofware. With
                &quot;0 to web3&quot;, we will ensure you have all the right skills to get hired at
                the best companies in the world
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
