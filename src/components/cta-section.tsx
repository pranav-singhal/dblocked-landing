import WaitlistForm from "./ui/form/WaitlistForm";

export function CtaSection() {
  return (
    <section className="container relative flex flex-col items-center gap-6 py-20 sm:gap-10">
      <h2 className="max-w-xl text-center font-heading text-3xl font-semibold sm:text-4xl sm:leading-tight">
        Interested in getting all the latest updates?
      </h2>
      <p className="max-w-xl text-center text-lg text-muted-foreground">Sign up today!</p>
      <WaitlistForm />
    </section>
  );
}
