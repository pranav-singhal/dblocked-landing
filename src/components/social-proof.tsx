import Image from "next/image";

export function SocialProof() {
  return (
    <section className="container flex flex-col items-center gap-2 pt-24">
      <h2 className="text-center text-lg font-semibold leading-8">
        Supported by
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        
      <div className="col-span-1 md:col-start-2">

          <Image src="/images/ethindia-grants.png" alt="Company Logo" width={10000} height={1000} className="object-contain" />
        </div>
      </div>
    </section>
  );
}
