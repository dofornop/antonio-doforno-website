import { Link } from 'react-router-dom';
import { legacyItems } from '../data/legacy';
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
                  {item.photo && (
                    <div className="legacy-card__photo-wrap">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/${item.photo}`}
                        alt={item.photoCaption || item.title}
                        className="legacy-card__photo"
                      />
                      {item.photoCaption && (
                        <div className="legacy-card__photo-caption">{item.photoCaption}</div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards link */}
      <section className="legacy-awards-link">
        <div className="container legacy-awards-link__inner">
          <div>
            <div className="section-label">Recognition</div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Honours &amp; Awards</h2>
            <div className="section-divider" />
            <p style={{ color: 'var(--mid-grey)', maxWidth: '620px', lineHeight: '1.8' }}>
              António do Forno received honours from the governments of Portugal and Canada,
              the Knights of Columbus, the Province of Ontario, and many more — including a
              posthumous nomination for the 2026 Portuguese Canadian Walk of Fame.
            </p>
            <Link to="/awards" className="btn-primary" style={{ marginTop: '24px', display: 'inline-block' }}>
              View All Honours &amp; Awards
            </Link>
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
