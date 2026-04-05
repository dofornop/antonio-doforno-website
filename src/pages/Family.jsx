import './Family.css';

// ─────────────────────────────────────────────────────────────────────────────
// FAMILY DATA — edit this section to add/update family members
// ─────────────────────────────────────────────────────────────────────────────
const children = [
  { name: "Preciosa", note: "" },
  { name: "Manuel",   note: "" },
  { name: "Dominic",  note: "" },
  { name: "Ernie",    note: "" },
  { name: "Prazeres", note: "" },
  { name: "Clara",    note: "" },
  { name: "Luie",     note: "" },
  { name: "Paul",     note: "" },
];

const spouses = [
  {
    name: "Rosa Ramos da Costa",
    years: "1952 – 1989",
    description: "António married Rosa in 1952 in Santiago de Alhariz, Vila Real, Portugal. Together they raised eight children and built a life across two continents. Rosa was a pillar of the family, and when she passed away in 1989 after 37 years of marriage, her loss was profound. Her memory lives on in her children and grandchildren."
  },
  {
    name: "Maria Amaral",
    years: "1993 – 2025",
    description: "António married Maria Amaral in 1993, welcoming her children Rick and Carmen into the family. In 2023 they celebrated 30 years of marriage — a testament to love, companionship, and resilience in the later chapters of life."
  }
];

export default function Family() {
  return (
    <div className="family-page page-content">
      <div className="flag-stripe" />

      <div className="family-header">
        <div className="container">
          <div className="section-label">The Heart of His Life</div>
          <h1 className="section-title">Family</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Father of eight, grandfather of many, and a man whose home was always 
            open to those who needed it.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="family-intro">
        <div className="container family-intro__inner">
          <div className="family-intro__text">
            <p>
              Family was the foundation of António do Forno's life. He emigrated to Canada 
              in 1966 — alone — driven by the desire to build a better future for Rosa and 
              their children. Within a year, the family was reunited in Chatham, and from 
              that moment, their home became a centre of warmth, activity, and community.
            </p>
            <p>
              Over the years, António and Rosa raised eight children together. He was not 
              only a father to his own children — he opened his home to newly arrived 
              Portuguese immigrants, helping them find their footing in a new country. 
              Many of those he helped went on to build successful lives and businesses.
            </p>
            <p>
              The family grew across generations into a large and loving extended family — 
              grandchildren, great-grandchildren, and the many people he considered family 
              by bond if not by blood.
            </p>
          </div>
          <div className="family-intro__photo">
            <img src={`${process.env.PUBLIC_URL}/images/img_18.jpg`} alt="The family through the years" style={{ width: '100%', display: 'block' }} />
            <p className="family-intro__photo-caption">The do Forno family through the years</p>
          </div>
        </div>
      </section>

      {/* Spouses */}
      <section className="family-spouses">
        <div className="container">
          <div className="section-label">His Partners in Life</div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Marriages</h2>
          <div className="section-divider" />
          <div className="spouses-grid">
            {spouses.map((s, i) => (
              <div key={i} className="spouse-card">
                <div className="spouse-card__photo">
                  <img
                    src={i === 0 ? `${process.env.PUBLIC_URL}/images/img_18.jpg` : `${process.env.PUBLIC_URL}/images/img_19.jpg`}
                    alt={s.name}
                  />
                </div>
                <div>
                  <h3 className="spouse-card__name">{s.name}</h3>
                  <div className="spouse-card__years">{s.years}</div>
                  <p className="spouse-card__desc">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Children */}
      <section className="family-children">
        <div className="container">
          <div className="section-label">His Children</div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Eight Children</h2>
          <div className="section-divider" />
          <p style={{ color: 'var(--mid-grey)', marginBottom: '36px', maxWidth: '600px' }}>
            António and Rosa raised eight children together between 1953 and 1971. 
            Each one carries forward his legacy of hard work, faith, and community.
          </p>
          <div className="children-grid">
            {children.map((child, i) => (
              <div key={i} className="child-card">
                <div className="child-card__number">{i + 1}</div>
                <div className="child-card__name">{child.name}</div>
                {child.note && <div className="child-card__note">{child.note}</div>}
              </div>
            ))}
          </div>

        </div>
      </section>


      <section className="family-photos">
        <div className="container">
          <div className="section-label">Memories Together</div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Family Photos</h2>
          <div className="section-divider" />
          <div className="family-photos__grid">
            {[
              { src: `${process.env.PUBLIC_URL}/images/img_18.jpg`, caption: "The Family Through the Years" },
              { src: `${process.env.PUBLIC_URL}/images/img_19.jpg`, caption: "António and Maria — 30 Years" },
              { src: `${process.env.PUBLIC_URL}/images/img_20.jpg`, caption: "A Large Extended Family" },
              { src: `${process.env.PUBLIC_URL}/images/img_21.jpg`, caption: "Family Reunion 2025" },
              { src: `${process.env.PUBLIC_URL}/images/img_01.jpg`, caption: "António do Forno" },
              { src: `${process.env.PUBLIC_URL}/images/img_16.jpg`, caption: "Early Life in Portugal" },
            ].map((photo, n) => (
              <div key={n} className="family-photo-item">
                <img src={photo.src} alt={photo.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
