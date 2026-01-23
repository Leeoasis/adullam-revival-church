import React from "react";

const MinistriesContent = () => {
  return (
    <main className="bg-[#fdf9f2]">

      {/* INTRO */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg leading-relaxed text-textDark/85">
            The life of Adullam Revival Church is shaped by rhythms of Scripture,
            prayer, worship, and service. These are not programmes we attend, but
            practices through which God forms us in obedience, faith, and love.
          </p>
        </div>
      </section>

      {/* TEACHING & FORMATION */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/assets/images/ministry-teaching.png"
            alt="Bible teaching and formation"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />

          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand">
              Teaching & Formation
            </h2>

            <div className="w-16 h-[2px] bg-brand/30 my-6"></div>

            <p className="text-lg text-textDark leading-relaxed opacity-90">
              We are committed to sound biblical teaching that forms believers
              in truth, obedience, and spiritual maturity. Teaching at Adullam
              Revival Church is not merely informational, but transformational —
              shaping how we think, live, and follow Christ.
            </p>

            <p className="mt-6 text-lg text-textDark leading-relaxed opacity-90">
              This ministry finds expression through our Bible study gatherings
              and shared engagement with Scripture.
            </p>
          </div>
        </div>
      </section>

      {/* PRAYER & CONSECRATION */}
      <section className="py-24 px-6 bg-[#fbf6ed]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand">
              Prayer & Consecration
            </h2>

            <div className="w-16 h-[2px] bg-brand/30 my-6"></div>

            <p className="text-lg text-textDark leading-relaxed opacity-90">
              Prayer and consecration lie at the heart of true revival. We set
              aside time to seek God through prayer and fasting, cultivating
              humility, dependence, and spiritual sensitivity.
            </p>

            <p className="mt-6 text-lg text-textDark leading-relaxed opacity-90">
              Our Monday consecration gatherings are dedicated to intercession,
              repentance, and yielding our lives fully to God’s will.
            </p>
          </div>

          <img
            src="/assets/images/ministry-prayer.png"
            alt="Prayer and consecration"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />
        </div>
      </section>

      {/* CORPORATE WORSHIP */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img
            src="/assets/images/ministry-worship.png"
            alt="Corporate worship gathering"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />

          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand">
              Corporate Worship
            </h2>

            <div className="w-16 h-[2px] bg-brand/30 my-6"></div>

            <p className="text-lg text-textDark leading-relaxed opacity-90">
              Corporate worship is where the church gathers as one body to exalt
              God in spirit and in truth. Our Sunday services are centered on
              reverence, joyful praise, and the proclamation of the Word.
            </p>

            <p className="mt-6 text-lg text-textDark leading-relaxed opacity-90">
              Worship forms the heart of the believer and aligns the community
              with God’s presence and purposes.
            </p>
          </div>
        </div>
      </section>

      {/* COMPASSION & SERVICE */}
      <section className="py-24 px-6 bg-[#fbf6ed]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-brand">
              Compassion & Service
            </h2>

            <div className="w-16 h-[2px] bg-brand/30 my-6"></div>

            <p className="text-lg text-textDark leading-relaxed opacity-90">
              Faith must be lived, not only spoken. As part of our calling to
              reflect Christ’s love, we serve our community through acts of
              compassion and practical care.
            </p>

            <p className="mt-6 text-lg text-textDark leading-relaxed opacity-90">
              Our soup kitchen ministry, held every first weekend of the month,
              allows us to serve with dignity, generosity, and love.
            </p>
          </div>

          <img
            src="/assets/images/ministry-service.png"
            alt="Compassion and service ministry"
            className="rounded-xl shadow-lg object-cover w-full h-[420px]"
          />
        </div>
      </section>

      {/* DIGITAL MINISTRY */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-brand">
            Digital Ministry & Resources
          </h2>

          <div className="w-20 h-[2px] bg-brand/30 mx-auto my-6"></div>

          <p className="text-lg text-textDark leading-relaxed opacity-90">
            In addition to gathering in person, Adullam Revival Church extends
            its ministry through digital platforms, making teaching, worship,
            and encouragement accessible beyond our physical location.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-8 shadow-md border border-brand/10">
              <h3 className="font-serif text-2xl text-brand mb-4">
                Audio Teachings — Spotify
              </h3>
              <p className="text-textDark opacity-85 leading-relaxed">
                Sermons and teachings shared in audio form to support reflection,
                meditation on Scripture, and continued spiritual growth.
              </p>

              <a
                href="https://open.spotify.com/episode/1XzKtjIskTfZ2bi9c9qdVN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-brand underline underline-offset-4"
              >
                Listen on Spotify
              </a>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md border border-brand/10">
              <h3 className="font-serif text-2xl text-brand mb-4">
                Video Ministry — YouTube
              </h3>
              <p className="text-textDark opacity-85 leading-relaxed">
                Recorded messages, worship moments, and ministry content shared
                through our YouTube channel.
              </p>

              <a
                href="https://www.youtube.com/@AdullamRevivalChurch/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-brand underline underline-offset-4"
              >
                Visit YouTube Channel
              </a>
            </div>
          </div>

          <p className="mt-14 text-sm text-textDark/60">
            Follow us on Instagram and Facebook for updates, reflections, and
            community life.
          </p>
        </div>
      </section>

    </main>
  );
};

export default MinistriesContent;
