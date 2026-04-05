import { legacyItems, honors } from '../data/legacy';
import './Legacy.css';

export default function Legacy() {
  return (
    <div className="legacy-page page-content">
      <div className="flag-stripe" />

      <div className="legacy-header">
        <div className="container">
          <div className="section-label">What He Built</div>
          <h1 className="section-title">His Legacy</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Over four decades, António do Forno shaped the Portuguese Canadian 
            community of Southwestern Ontario in ways that endure to this day.
          </p>
        </div>
      </div>

      {/* Community contributions */}
      <section className="legacy-contributions">
        <div className="container">
          <div className="section-label">Community Contributions</div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>What He Built & Led</h2>
          <div className="section-divider" />
          <div className="legacy-grid">
            {legacyItems.map(item => (
              <div key={item.id} className="legacy-card">
                <div className="legacy-card__icon">{item.icon}</div>
                <div className="legacy-card__body">
                  <div className="legacy-card__years">{item.years}</div>
                  <h3 className="legacy-card__title">{item.title}</h3>
                  <p className="legacy-card__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="legacy-photos">
        <div className="legacy-photos__strip">
          {[
            { src: `${process.env.PUBLIC_URL}/images/img_06.jpg`, caption: "With President Sampaio & Premier Bob Rae" },
            { src: `${process.env.PUBLIC_URL}/images/img_08.jpg`, caption: "Medalha de Mérito das Comunidades Portuguesas" },
            { src: `${process.env.PUBLIC_URL}/images/img_11.jpg`, caption: "Honorary Consul of Portugal, 1998" },
            { src: `${process.env.PUBLIC_URL}/images/img_13.jpg`, caption: "Province of Ontario Volunteer Award" },
          ].map((p, i) => (
            <div key={i} className="legacy-photos__item">
              <img src={p.src} alt={p.caption} />
              <div className="legacy-photos__caption">{p.caption}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Honors */}
      <section className="honors-section">
        <div className="container">
          <div className="section-label">Recognition</div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Honors & Awards</h2>
          <div className="section-divider" />
          <div className="honors-grid">
            {honors.map((h, i) => (
              <div key={i} className="honor-card">
                <div className="honor-card__medal">🏅</div>
                <div>
                  <h3 className="honor-card__title">{h.title}</h3>
                  <div className="honor-card__issuer">
                    {h.issuer}{h.year ? ` · ${h.year}` : ''}
                  </div>
                  <p className="honor-card__desc">{h.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PCWOF callout */}
      <section className="pcwof-callout">
        <div className="container pcwof-callout__inner">
          <div className="pcwof-callout__star">⭐</div>
          <div>
            <h3>Portuguese Canadian Walk of Fame — 2026 Nominee</h3>
            <p>
              António do Forno was nominated for the 2026 Portuguese Canadian Walk of Fame 
              in recognition of his extraordinary lifetime of service to the Portuguese Canadian 
              community of Southwestern Ontario. The nomination honours over four decades of 
              leadership, advocacy, and community building.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
