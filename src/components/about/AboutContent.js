import React from "react";

const AboutContent = () => {
  return (
    <section className="bg-[#fdf9f2]">

      {/* WHO WE ARE */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-light text-brand mb-8">
            Who We Are
          </h2>

          <p className="text-lg leading-relaxed text-textDark/90 mb-6">
            Adullam Revival Church is a Word-anchored Christian fellowship devoted
            to spiritual formation and renewal. Our life together is shaped by
            reverence for Scripture, a culture of prayer and fasting, and a
            commitment to walking in obedience to God’s Word.
          </p>

          <p className="text-lg leading-relaxed text-textDark/85">
            We believe true revival begins with consecration—hearts yielded to
            God, minds renewed by truth, and lives aligned with His will.
          </p>
        </div>
      </section>

      {/* OUR CONVICTION – FULL IMAGE, NO CROPPING */}
      <section className="relative py-36 px-6 overflow-hidden bg-brand">

        {/* Background fill */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/bible-study.png"
            alt=""
            className="w-full h-full object-cover scale-110 blur-sm opacity-30"
          />
          <div className="absolute inset-0 bg-brand/70" />
        </div>

        {/* Foreground full image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src="/assets/images/bible-study.png"
            alt="Bible study and fellowship"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        {/* Quote */}
        <div className="relative max-w-4xl mx-auto text-center text-textLight">
          <p className="font-serif text-2xl md:text-3xl font-light leading-relaxed">
            “Revival is not an event we attend, but a work God performs in
            yielded hearts.”
          </p>
        </div>
      </section>

      {/* OUR BELIEFS */}
      <section className="py-36 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-light text-brand mb-20">
            Our Beliefs
          </h2>

          <div className="grid gap-y-14 gap-x-20 md:grid-cols-2 lg:grid-cols-3">
            <Belief title="The Trinity">
              We believe in one God, Father, Son and Holy Spirit.
            </Belief>

            <Belief title="Salvation">
              We believe we are saved by God’s grace through faith in Christ alone.
            </Belief>

            <Belief title="The Bible">
              We believe the Scriptures are inspired by God and are the final
              authority for faith and life.
            </Belief>

            <Belief title="The Holy Spirit">
              We believe in the power of the Holy Spirit to transform lives.
            </Belief>

            <Belief title="Repentance">
              We believe we are called to turn from sin and grow in Christ-like
              character.
            </Belief>

            <Belief title="The Church">
              We believe all believers are united in the Body of Christ.
            </Belief>

            <Belief title="Marriage">
              We believe we are called to celibacy in singleness and loving
              faithfulness between a man and woman in marriage.
            </Belief>

            <Belief title="Eternal Life">
              We believe in the resurrection of the dead and the gift of eternal
              life through Christ.
            </Belief>

            <Belief title="Humanity">
              We believe human beings are created in the image of God.
            </Belief>
          </div>
        </div>
      </section>

      {/* OUR PASTORS – EXACT WORKING VERSION */}
      <section className="py-32 px-6 bg-[#fdf9f2]">
        <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-[1.1fr_1fr] items-center">

          {/* TEXT */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-brand mb-8">
              Our Pastors
            </h2>

            <div className="text-lg leading-relaxed text-textDark/90 space-y-6">
              <p>
                Pastors Jacob and Ntsakisi Rachoene have been married for seven
                years and have faithfully served the Lord in various ministries,
                both individually and together.
              </p>

              <p>
                They are passionately committed to impacting and transforming
                lives across tribes, ages, and nationalities through the power
                of the Gospel, building a Christ-centred, Spirit-filled
                community of believers devoted to a daily walk of
                transformation with the Lord Jesus Christ.
              </p>

              <p>
                Through Adullam Revival, they believe the Lord is calling His
                people back to the family altar—back to discipleship,
                restoration, and intimacy with Him. Their vision is to raise a
                generation of seekers, fully yielded to God and grounded in His
                presence.
              </p>
            </div>
          </div>

          {/* IMAGE GRID – SHARP & ANIMATED */}
          <div className="grid grid-cols-2 gap-5">
            {[
              "/assets/images/pastors-1.jpeg",
              "/assets/images/pastors-4.jpeg",
              "/assets/images/pastors-2.jpeg",
              "/assets/images/pastors-3.jpeg",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Pastors Jacob and Ntsakisi Rachoene"
                className="rounded-xl w-full h-auto object-cover transition-transform duration-500 hover:scale-105 hover:shadow-lg"
                style={{
                  animation: `fadeUp 0.8s ease-out ${i * 0.15}s both`,
                }}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(18px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

    </section>
  );
};

const Belief = ({ title, children }) => (
  <div>
    <h3 className="text-xl font-semibold text-brand mb-3">
      {title}
    </h3>
    <p className="text-textDark/85 leading-relaxed">
      {children}
    </p>
  </div>
);

export default AboutContent;
