import { tributes } from '../data/tributes';
import './Tributes.css';

export default function Tributes() {
  return (
    <div className="tributes-page page-content">
      <div className="flag-stripe" />

      <div className="tributes-header">
        <div className="container">
          <div className="section-label">Words of Recognition</div>
          <h1 className="section-title">Tributes</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Formal tributes from governments, institutions, and community leaders
            who recognized António's extraordinary lifetime of service.
          </p>
        </div>
      </div>

      <section className="tributes-main">
        <div className="container">
          {tributes.map((t, i) => (
            <div key={i} className="tribute-card">
              <div className="tribute-card__quote-mark">"</div>
              <blockquote className="tribute-card__text">{t.text}</blockquote>
              <div className="tribute-card__footer">
                {t.photo && (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${t.photo}`}
                    alt={t.name}
                    className="tribute-card__photo"
                  />
                )}
                <div className="tribute-card__attribution">
                  <div className="tribute-card__name">{t.name}</div>
                  <div className="tribute-card__title">{t.title}</div>
                  <div className="tribute-card__org">
                    {t.organization}{t.year ? ` · ${t.year}` : ''}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {tributes.length === 0 && (
            <div className="tributes-empty">
              <p>Tributes will be added here. To add one, open <code>src/data/tributes.js</code> and follow the format in the comments.</p>
            </div>
          )}
        </div>
      </section>

      <section className="tributes-add-note">
        <div className="container">
          <div className="section-label">Add a Tribute</div>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>From Organizations &amp; Leaders</h2>
          <div className="section-divider" />
          <p style={{ color: 'var(--mid-grey)', maxWidth: '640px', lineHeight: '1.8' }}>
            If you have a formal letter, citation, or statement from an organization or
            official that you'd like added here, open <strong>src/data/tributes.js</strong> and
            add a new entry following the template provided in that file.
          </p>
        </div>
      </section>
    </div>
  );
}
