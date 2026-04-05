import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home page-content">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__inner container fade-up">
          <div className="hero__content">
            <div className="section-label">In Memoriam</div>
            <h1 className="hero__name">António<br />do Forno</h1>
            <div className="hero__full-name">António Joaquim Pereira Alves do Forno</div>
            <div className="hero__dates">March 29, 1935 — October 12, 2025</div>
            <div className="hero__place">Adoufe, Portugal → Chatham, Ontario, Canada</div>
            <p className="hero__tagline">
              Community leader. Father. Honorary Consul. A man who gave 
              more than forty years of service to the Portuguese Canadian community 
              of Southwestern Ontario.
            </p>
            <div className="hero__actions">
              <Link to="/story" className="btn-primary">Read His Story</Link>
              <Link to="/memories" className="btn-outline">Leave a Memory</Link>
            </div>
          </div>
          <div className="hero__portrait-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/img_01.jpg`}
              alt="António do Forno"
              className="hero__portrait"
            />
          </div>
        </div>
      </section>

      {/* ── At a Glance ───────────────────────────────────────────────────── */}
      <section className="glance">
        <div className="container">
          <div className="glance__grid">
            <div className="glance__card">
              <div className="glance__number">40+</div>
              <div className="glance__label">Years of Community Service</div>
            </div>
            <div className="glance__card">
              <div className="glance__number">8</div>
              <div className="glance__label">Children</div>
            </div>
            <div className="glance__card">
              <div className="glance__number">1971</div>
              <div className="glance__label">Founded Portuguese Canadian Social Club</div>
            </div>
            <div className="glance__card">
              <div className="glance__number">1998</div>
              <div className="glance__label">Named Honorary Consul of Portugal</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Introduction ──────────────────────────────────────────────────── */}
      <section className="intro">
        <div className="container intro__inner">
          <div className="intro__text">
            <div className="section-label">Who He Was</div>
            <h2 className="section-title">A Life Devoted to Family & Community</h2>
            <div className="section-divider" />
            <p>
              Born in the mountain village of Adoufe in Trás-os-Montes, Portugal, 
              António do Forno arrived in Chatham, Ontario in 1966 with little more 
              than determination and a deep love for his family and heritage.
            </p>
            <p>
              Over the decades that followed, he became one of the most influential 
              figures in the Portuguese Canadian community of Southwestern Ontario — 
              founding clubs, establishing language schools, running a travel agency 
              that kept families connected to their homeland, and serving as a Notary 
              Public and Honorary Consul of Portugal.
            </p>
            <p>
              He was a father of eight, a Knight of Columbus, a community president, 
              and a man who welcomed strangers into his home and helped them build 
              new lives. He passed away on October 12, 2025, leaving behind a legacy 
              that will endure for generations.
            </p>
            <Link to="/story" className="btn-primary" style={{ marginTop: '24px' }}>
              Read the Full Story
            </Link>
          </div>
          <div className="intro__photo">
            <div className="intro__photo-frame">
              <img src={`${process.env.PUBLIC_URL}/images/img_01.jpg`} alt="António do Forno" style={{ width: '100%', display: 'block' }} />
            </div>
            <div className="intro__photo-caption">
              António Joaquim Pereira Alves do Forno<br />
              <span>Chatham, Ontario</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section previews ──────────────────────────────────────────────── */}
      <section className="previews">
        <div className="container">
          <div className="previews__grid">
            <Link to="/timeline" className="preview-card">
              <div className="preview-card__icon">📅</div>
              <h3>Timeline</h3>
              <p>Nine decades of a remarkable life, from Portugal to Canada.</p>
              <span className="preview-card__link">Explore →</span>
            </Link>
            <Link to="/legacy" className="preview-card">
              <div className="preview-card__icon">🏛️</div>
              <h3>Legacy</h3>
              <p>The clubs, institutions, and community he built over 40 years.</p>
              <span className="preview-card__link">Explore →</span>
            </Link>
            <Link to="/gallery" className="preview-card">
              <div className="preview-card__icon">📷</div>
              <h3>Gallery</h3>
              <p>Photos from a life well lived — family, community, and faith.</p>
              <span className="preview-card__link">Explore →</span>
            </Link>
            <Link to="/memories" className="preview-card">
              <div className="preview-card__icon">💬</div>
              <h3>Memories</h3>
              <p>Tributes and memories from family, friends, and community.</p>
              <span className="preview-card__link">Share a Memory →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PCWOF Banner ──────────────────────────────────────────────────── */}
      <section className="pcwof-banner">
        <div className="container pcwof-banner__inner">
          <div>
            <div className="section-label" style={{ color: 'var(--gold-light)' }}>Recognition</div>
            <h3>Portuguese Canadian Walk of Fame</h3>
            <p>António do Forno was nominated for the 2026 Portuguese Canadian Walk of Fame in recognition of his extraordinary lifetime of service to the Portuguese Canadian community.</p>
          </div>
          <Link to="/legacy" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>
            View His Legacy
          </Link>
        </div>
      </section>

    </div>
  );
}
