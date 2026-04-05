import './Faith.css';

const faithPhotos = [
  { photo: null, caption: "Knights of Columbus — Fourth Degree ceremony, 2003" },
  { photo: null, caption: "Nossa Senhora da Fátima Festa, Chatham" },
  { photo: null, caption: "The Our Lady of Fátima statue, blessed at the Shrine of Fátima" },
  { photo: null, caption: "António at the Shrine of Fátima, Portugal" },
];

export default function Faith() {
  return (
    <div className="faith-page page-content">
      <div className="flag-stripe" />

      <div className="faith-header">
        <div className="container">
          <div className="section-label">A Life of Faith</div>
          <h1 className="section-title">Faith &amp; Devotion</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Faith was not something António practiced on Sundays — it was the foundation
            of everything he built and everyone he served.
          </p>
        </div>
      </div>

      {/* Knights of Columbus */}
      <section className="faith-section">
        <div className="container faith-two-col">
          <div className="faith-text">
            <div className="section-label">Knights of Columbus</div>
            <h2 className="faith-heading">A Lifetime of Brotherhood</h2>
            <div className="section-divider" />
            <p>
              António volunteered with the Knights of Columbus for over 40 years —
              one of the longest and most dedicated commitments of his life. The Knights
              of Columbus is a Catholic fraternal organization founded on the principles
              of charity, unity, and fraternity, and António embodied each of those values.
            </p>
            <p>
              In 2003, he was elevated to the rank of Fourth Degree Knight — the highest
              honour the organization bestows. This degree, known as the Patriotic Degree,
              recognizes exemplary service to faith, family, and community. It was one of
              many milestones in a lifetime devoted to those same ideals.
            </p>
            <p>
              He served not just as a member but as a presence — someone others looked to
              for leadership, for counsel, and for example. His decades of service to the
              Knights reflected a faith that was lived, not merely professed.
            </p>
          </div>
          <div className="faith-photos-col">
            {faithPhotos.slice(0, 1).map((p, i) => (
              <div key={i} className="faith-photo-item">
                {p.photo ? (
                  <img src={`${process.env.PUBLIC_URL}/images/${p.photo}`} alt={p.caption} className="faith-photo" />
                ) : (
                  <div className="faith-photo-placeholder photo-placeholder">
                    📷 Photo coming soon<br /><span>{p.caption}</span>
                  </div>
                )}
                <div className="faith-photo-caption">{p.caption}</div>
              </div>
            ))}
            <div className="faith-badge">
              <div className="faith-badge__icon">⚔️</div>
              <div className="faith-badge__label">Fourth Degree Knight</div>
              <div className="faith-badge__year">2003</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fátima */}
      <section className="faith-section faith-section--alt">
        <div className="container faith-two-col faith-two-col--reverse">
          <div className="faith-text">
            <div className="section-label">Nossa Senhora da Fátima</div>
            <h2 className="faith-heading">Bringing Fátima to Canada</h2>
            <div className="section-divider" />
            <p>
              In 1979, António was instrumental in establishing the Nossa Senhora da Fátima
              Festa in Chatham — an annual festival celebrating the apparitions of Our Lady
              of Fátima and honouring the deep Marian devotion central to Portuguese
              Catholic life.
            </p>
            <p>
              He took on a task that was both logistically ambitious and spiritually
              meaningful: he personally arranged for the Our Lady of Fátima statue to be
              crafted by artisans in Portugal, blessed at the Sanctuary of Fátima — one
              of the most sacred Catholic sites in the world — and transported to Chatham,
              Ontario.
            </p>
            <p>
              That statue has been at the heart of the Chatham Fátima Festa for over
              40 years. The festival — which António helped found and sustain — continues
              to this day, a living expression of the faith he carried from Portugal and
              planted in Canadian soil.
            </p>
          </div>
          <div className="faith-photos-col">
            {faithPhotos.slice(1, 3).map((p, i) => (
              <div key={i} className="faith-photo-item">
                {p.photo ? (
                  <img src={`${process.env.PUBLIC_URL}/images/${p.photo}`} alt={p.caption} className="faith-photo" />
                ) : (
                  <div className="faith-photo-placeholder photo-placeholder">
                    📷 Photo coming soon<br /><span>{p.caption}</span>
                  </div>
                )}
                <div className="faith-photo-caption">{p.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="faith-quote-section">
        <div className="container">
          <blockquote className="faith-quote">
            <div className="faith-quote__mark">"</div>
            <p>
              Faith was never separate from service, for António. To serve the community
              was to honour God. To welcome a stranger was to live the Gospel.
              He did both, every day, for sixty years.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Photo grid */}
      <section className="faith-gallery">
        <div className="container">
          <div className="section-label">Moments of Faith</div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Photos</h2>
          <div className="section-divider" />
          <div className="faith-gallery__grid">
            {faithPhotos.map((p, i) => (
              <div key={i} className="faith-gallery__item">
                {p.photo ? (
                  <img src={`${process.env.PUBLIC_URL}/images/${p.photo}`} alt={p.caption} className="faith-gallery__photo" />
                ) : (
                  <div className="faith-gallery__photo photo-placeholder">
                    📷<br /><span>{p.caption}</span>
                  </div>
                )}
                <div className="faith-gallery__caption">{p.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
