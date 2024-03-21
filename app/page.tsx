"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black pt-20 trend-1 min-h-screen">
      <Image
        src="/img/desktop.png"
        alt="hero"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="hidden md:block"
      />
      <Image
        src="/img/mobile.png"
        alt="hero"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="block md:hidden"
      />
      {/* <div className="overflow-hidden">
        <video loop className="w-full" autoPlay muted>
          <source src="/img/video.mp4" type="video/mp4" />
        </video>
      </div> */}
    </main>
  );
}
