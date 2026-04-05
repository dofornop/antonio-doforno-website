import { awards } from '../data/awards';
import './Awards.css';

export default function Awards() {
  const withPhotos = awards.filter(a => a.photo);
  const withoutPhotos = awards.filter(a => !a.photo);

  return (
    <div className="awards-page page-content">
      <div className="flag-stripe" />

      {/* Header */}
      <div className="awards-header">
        <div className="container">
          <div className="section-label">Recognition</div>
          <h1 className="section-title">Honours &amp; Awards</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Over a lifetime of service, António do Forno was recognised by governments,
            institutions, and communities on both sides of the Atlantic.
          </p>
        </div>
      </div>

      {/* Awards with photos */}
      <section className="awards-main">
        <div className="container">
          {withPhotos.map((award, i) => (
            <div key={i} className={`award-row ${i % 2 === 1 ? 'award-row--reverse' : ''}`}>
              <div className="award-row__photo-wrap">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${award.photo}`}
                  alt={award.photoCaption}
                  className="award-row__photo"
                  style={{ objectPosition: award.photoPosition || 'center center', objectFit: award.photoFit || 'cover' }}
                />
                {award.photoCaption && (
                  <div className="award-row__photo-caption">{award.photoCaption}</div>
                )}
              </div>
              <div className="award-row__text">
                <div className="award-row__medal">🏅</div>
                {award.year && (
                  <div className="award-row__year">{award.year}</div>
                )}
                <h2 className="award-row__title">{award.title}</h2>
                <div className="award-row__issuer">{award.issuer}</div>
                <p className="award-row__desc">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards without photos */}
      {withoutPhotos.length > 0 && (
        <section className="awards-additional">
          <div className="container">
            <div className="section-label">Additional Honours</div>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Further Recognition</h2>
            <div className="section-divider" />
            <div className="awards-grid">
              {withoutPhotos.map((award, i) => (
                <div key={i} className="award-card">
                  <div className="award-card__medal">🏅</div>
                  <div>
                    {award.year && (
                      <div className="award-card__year">{award.year}</div>
                    )}
                    <h3 className="award-card__title">{award.title}</h3>
                    <div className="award-card__issuer">{award.issuer}</div>
                    <p className="award-card__desc">{award.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

     
    </div>
  );
}
