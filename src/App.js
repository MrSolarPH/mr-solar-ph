import React from "react";
import solarVideo from "./assets/solar.mp4";

export default function App() {
  return (
    <div className="font-sans">
      {/* HERO VIDEO */}
      <div className="relative h-screen">
        <video
          src={solarVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        ></video>

        <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-center text-white px-6">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold">
              Cut Your Electric Bill with Solar
            </h1>
            <p className="mt-4 text-lg">
              Mr. Solar PH | Installation & Solar Kits
            </p>

            <a
              href="https://m.me/MrSolarPHOfficial?text=Hi%20interested%20ako%20sa%20solar"
              target="_blank"
              className="mt-6 inline-block bg-yellow-500 px-6 py-3 rounded-lg font-semibold"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>

      {/* BENEFITS */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold">Why Go Solar?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-10 px-6">
          <div>
            <h3 className="text-xl font-semibold">💸 Save Money</h3>
            <p>Lower your electricity bills monthly</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🔋 Backup Power</h3>
            <p>No more brownouts</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">🌱 Eco Friendly</h3>
            <p>Clean renewable energy</p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold">Our Solar Installations</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10 px-6">
          <img
            src="https://www.upsinverter.com/utl/wp-content/uploads/2020/08/UTL-Offgrid-Solar-Inverter.jpg"
            className="rounded-xl"
          />
          <img
            src="https://nativtechniks.com/wp-content/uploads/2024/05/How-Businesses-in-the-Philippines-Can-Gain-Competitive-Edge-with-Solar-Power-820x445.jpg"
            className="rounded-xl"
          />
          <img
            src="https://external-preview.redd.it/rzRZyXradF213d43bbHTFLxeIHgqtv2hXR23Y83h2Lk.jpg?auto=webp&s=beb4255f7fcb58e95452540fdb1986265d1ff0f2"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* PRICING */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold">Solar Packages</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10 px-6">
          <div className="border p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Basic Kit</h3>
            <p className="text-2xl mt-2">₱15,000+</p>
            <p className="mt-2">Lights + Charging</p>
          </div>
          <div className="border p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Home Setup</h3>
            <p className="text-2xl mt-2">₱50,000+</p>
            <p className="mt-2">Appliances Ready</p>
          </div>
          <div className="border p-6 rounded-xl shadow">
            <h3 className="text-xl font-bold">Full Install</h3>
            <p className="text-2xl mt-2">₱100,000+</p>
            <p className="mt-2">Whole House Setup</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 text-white text-center py-16">
        <h2 className="text-3xl font-bold">Free Solar Consultation</h2>
        <p className="mt-2">Message us now and get a custom quote</p>
        <a
          href="https://m.me/MrSolarPHOfficial?text=Hi%20interested%20ako%20sa%20solar"
          target="_blank"
          className="mt-6 inline-block bg-black px-6 py-3 rounded-lg font-semibold"
        >
          Message Now
        </a>
      </section>

      {/* FLOATING CHAT */}
      <a
        href="https://m.me/MrSolarPHOfficial?text=Hi%20interested%20ako%20sa%20solar"
        target="_blank"
        className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg"
      >
        Chat
      </a>
    </div>
  );
}