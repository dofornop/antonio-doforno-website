import './Community.css';

const pillars = [
  {
    icon: "🏛️",
    title: "Portuguese Canadian Social Club of Chatham",
    years: "1971 – Present",
    desc: "Co-founded in 1971 and served as its first President. The club became the cultural and social heart of the Portuguese community in Southwestern Ontario, a gathering place for celebrations, traditions, and mutual support.",
    photo: null,
    photoCaption: "Portuguese Canadian Social Club of Chatham"
  },
  {
    icon: "📚",
    title: "Portuguese Language Education",
    years: "1970s – 1990s",
    desc: "Helped establish Portuguese language classes in Chatham, Leamington, Wheatley, and surrounding areas — first funded by the Portuguese government, later by the Canadian government. Ensuring the next generation could learn their language and culture.",
    photo: null,
    photoCaption: "Portuguese language class, Chatham"
  },
  {
    icon: "🤝",
    title: "Conselho das Comunidades Portuguesas",
    years: "1979 – 2003",
    desc: "Served for over 20 years and rose to President for Ontario and Manitoba, representing Portuguese Canadians at provincial, federal, and Portuguese government levels. A voice for the community at the highest levels.",
    photo: null,
    photoCaption: "Conselho das Comunidades Portuguesas meeting"
  },
  {
    icon: "⚖️",
    title: "Notary Public",
    years: "1977 – 2018",
    desc: "Appointed as Notary Public by the Ontario government, serving the documentation needs of Portuguese families across Southwestern Ontario for over 40 years. He helped countless families navigate the legal complexities of life in a new country.",
    photo: null,
    photoCaption: "António as Notary Public"
  },
];

export default function Community() {
  return (
    <div className="community-page page-content">
      <div className="flag-stripe" />

      <div className="community-header">
        <div className="container">
          <div className="section-label">What He Built</div>
          <h1 className="section-title">Community</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            For over forty years, António do Forno was the connective tissue of the
            Portuguese Canadian community in Southwestern Ontario.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="community-intro">
        <div className="container community-intro__inner">
          <div className="community-intro__text">
            <div className="section-label">The Foundation</div>
            <h2 className="community-heading">Building a Community from Scratch</h2>
            <div className="section-divider" />
            <p>
              When António arrived in Chatham in 1966, the Portuguese community in
              Southwestern Ontario was scattered, newly arrived, and without the
              institutions it needed to thrive. There was no social club, no language
              school, no travel agency, no community consul.
            </p>
            <p>
              António changed that. Not by grand gestures, but by showing up — year after
              year, role after role — and building the infrastructure of community life
              piece by piece. He co-founded clubs, established schools, ran a travel agency
              that kept families connected to Portugal, and served as the legal and
              administrative anchor for thousands of families navigating life in a new country.
            </p>
            <p>
              By the time he retired, the community he had helped build had strong roots,
              vibrant institutions, and a generation that had grown up knowing their
              language, their culture, and their history — largely because of him.
            </p>
          </div>
          <div className="community-intro__photo-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/img_06.jpg`}
              alt="António with community leaders"
              className="community-intro__photo"
            />
            <div className="community-intro__photo-caption">
              António with Portuguese President Sampaio and Ontario Premier Bob Rae
            </div>
          </div>
        </div>
      </section>

      {/* Four pillars */}
      <section className="community-pillars">
        <div className="container">
          <div className="section-label">Four Pillars</div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>How He Served</h2>
          <div className="section-divider" />
          <div className="community-pillars__grid">
            {pillars.map((p, i) => (
              <div key={i} className="community-pillar">
                <div className="community-pillar__top">
                  <div className="community-pillar__icon">{p.icon}</div>
                  <div>
                    <div className="community-pillar__years">{p.years}</div>
                    <h3 className="community-pillar__title">{p.title}</h3>
                  </div>
                </div>
                <p className="community-pillar__desc">{p.desc}</p>
                {p.photo ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${p.photo}`}
                    alt={p.photoCaption}
                    className="community-pillar__photo"
                  />
                ) : (
                  <div className="community-pillar__photo photo-placeholder">
                    📷 Photo coming soon<br /><span>{p.photoCaption}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcoming strangers */}
      <section className="community-welcome">
        <div className="container community-welcome__inner">
          <div className="community-welcome__quote">
            <div className="community-welcome__mark">"</div>
            <p>
              He never turned anyone away. If you arrived in Chatham from Portugal
              and needed help, you found António. He would take you in, help you
              get settled, find you work, translate for you, fill out your paperwork.
              That's what he did. That's who he was.
            </p>
          </div>
          <div className="community-welcome__stat-col">
            <div className="community-welcome__stat">
              <div className="community-welcome__number">40+</div>
              <div className="community-welcome__label">Years of Active Service</div>
            </div>
            <div className="community-welcome__stat">
              <div className="community-welcome__number">4</div>
              <div className="community-welcome__label">Cities with Portuguese Classes</div>
            </div>
            <div className="community-welcome__stat">
              <div className="community-welcome__number">1</div>
              <div className="community-welcome__label">Community He Helped Build</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
