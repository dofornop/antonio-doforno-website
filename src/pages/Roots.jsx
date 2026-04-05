import './Roots.css';

const photoSpots = [
  { id: 1, photo: null, caption: "Adoufe, Vila Real — his birthplace" },
  { id: 2, photo: null, caption: "António in Portugal before emigrating" },
  { id: 3, photo: "img_17.jpg", caption: "Serving in the Portuguese Army, 1956–1958" },
  { id: 4, photo: null, caption: "Rosa Ramos da Costa — married 1952" },
];

export default function Roots() {
  return (
    <div className="roots-page page-content">
      <div className="flag-stripe" />

      <div className="roots-header">
        <div className="container">
          <div className="section-label">Where It All Began</div>
          <h1 className="section-title">Roots &amp; Origins</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            From the mountains of Trás-os-Montes to the fields of Southwestern Ontario —
            a journey of courage, faith, and family.
          </p>
        </div>
      </div>

      {/* Origin story */}
      <section className="roots-section">
        <div className="container roots-two-col">
          <div className="roots-text">
            <div className="section-label">Portugal</div>
            <h2 className="roots-heading">Adoufe, Vila Real</h2>
            <div className="section-divider" />
            <p>
              António Joaquim Pereira Alves do Forno was born on March 29, 1935,
              in the village of Adoufe, in the municipality of Vila Real, in the
              mountainous region of Trás-os-Montes in northern Portugal. It is a
              region shaped by hard rock, deep valleys, and centuries of tradition —
              where faith, family, and community were not luxuries but the foundations
              of daily life.
            </p>
            <p>
              He was raised in a world of hard work and close-knit community. As a young
              man, he pursued his education at the Seminary of Santa Clara in Vila Real,
              where the seeds of his lifelong commitment to service were planted. He later
              completed further studies at St. Clair College in Ontario.
            </p>
            <p>
              On an important early chapter: in 1952, António married Rosa Ramos da Costa
              in Santiago de Alhariz. Together they began building the family that would
              grow to eight children — Preciosa, Manuel, Dominic, Ernie, Prazeres, Clara,
              Luie, and Paul.
            </p>
          </div>
          <div className="roots-photos-stack">
            {photoSpots.slice(0, 2).map(p => (
              <div key={p.id} className="roots-photo-item">
                {p.photo ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${p.photo}`}
                    alt={p.caption}
                    className="roots-photo"
                  />
                ) : (
                  <div className="roots-photo-placeholder photo-placeholder" style={{ aspectRatio: '4/3' }}>
                    📷 Photo coming soon<br /><span>{p.caption}</span>
                  </div>
                )}
                <div className="roots-photo-caption">{p.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Army service */}
      <section className="roots-section roots-section--alt">
        <div className="container roots-two-col roots-two-col--reverse">
          <div className="roots-text">
            <div className="section-label">Service</div>
            <h2 className="roots-heading">The Portuguese Army</h2>
            <div className="section-divider" />
            <p>
              From 1956 to 1958, António served in the Portuguese Army — a formative
              experience that deepened his sense of duty, discipline, and service to
              something larger than himself. These values would define everything that
              followed.
            </p>
            <p>
              After completing his military service, he returned to civil life and served
              as Treasurer for the Grémio da Lavoura de Valpaços from 1960 to 1966 —
              his first formal leadership role in community administration, and a preview
              of the decades of service to come.
            </p>
          </div>
          <div className="roots-photos-stack">
            {photoSpots.slice(2, 4).map(p => (
              <div key={p.id} className="roots-photo-item">
                {p.photo ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${p.photo}`}
                    alt={p.caption}
                    className="roots-photo"
                  />
                ) : (
                  <div className="roots-photo-placeholder photo-placeholder" style={{ aspectRatio: '4/3' }}>
                    📷 Photo coming soon<br /><span>{p.caption}</span>
                  </div>
                )}
                <div className="roots-photo-caption">{p.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The journey to Canada */}
      <section className="roots-section">
        <div className="container">
          <div className="section-label">1966</div>
          <h2 className="roots-heading">The Journey to Canada</h2>
          <div className="section-divider" />
          <div className="roots-journey">
            <p>
              In 1966, António made the courageous decision to emigrate to Canada —
              arriving alone in Chatham, Ontario, leaving behind everything familiar in
              pursuit of a better future for his family. He came with determination,
              with faith, and with a deep love for his wife and children who would
              follow once he had laid the foundations.
            </p>
            <p>
              The following year, Rosa and seven of their children joined him, and
              together they set down roots in Chatham. The youngest, Paul, was born
              in Canada. What started as one family's new beginning quickly became
              something much larger — António became a point of contact and support
              for every Portuguese immigrant who arrived in Southwestern Ontario,
              often welcoming them into his own home.
            </p>
            <p>
              He never forgot where he came from. The culture, the language, the faith,
              and the traditions of Portugal remained at the centre of everything he
              built in Canada — not as nostalgia, but as a living inheritance he was
              determined to pass on.
            </p>

            <div className="roots-journey-stats">
              <div className="roots-stat">
                <div className="roots-stat__number">1935</div>
                <div className="roots-stat__label">Born in Adoufe, Portugal</div>
              </div>
              <div className="roots-stat">
                <div className="roots-stat__number">1952</div>
                <div className="roots-stat__label">Married Rosa in Portugal</div>
              </div>
              <div className="roots-stat">
                <div className="roots-stat__number">1956</div>
                <div className="roots-stat__label">Served in Portuguese Army</div>
              </div>
              <div className="roots-stat">
                <div className="roots-stat__number">1966</div>
                <div className="roots-stat__label">Arrived in Chatham, Ontario</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
