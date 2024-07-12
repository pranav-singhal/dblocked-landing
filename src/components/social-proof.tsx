import Image from "next/image";

export function SocialProof() {
  return (
    <section className="container flex flex-col items-center gap-2 pt-24">
      <h2 className="text-center text-lg font-semibold leading-8">
        Supported by
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
        
      <div className="col-span-1 ">
        <Image src="/images/ethindia-grants.png" alt="EthIndia Grants" width={10000} height={1000} className="object-contain" />
      </div>

      <div className="col-span-1">
        <Image src="/images/classroomio.png" alt="ClassromIO" width={10000} height={1000} className="h-full object-contain align-middle" />
      </div>
      </div>
    </section>
  );
}
