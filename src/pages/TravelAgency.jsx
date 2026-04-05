import './TravelAgency.css';

const locations = [
  {
    city: "Chatham",
    years: "1977 – 2009",
    desc: "The flagship location, serving as the hub of the Portuguese Canadian community in Chatham for over 30 years. The agency handled travel arrangements, ticketing, and all manner of travel needs for families staying connected with Portugal.",
    photo: "img_12.jpg",
    photoCaption: "Forno's Travel Agency — Chatham location"
  },
  {
    city: "Leamington",
    years: "1980s – 2000s",
    desc: "A second location opened to serve the large Portuguese community in Leamington and the surrounding agricultural region of Essex County, where many Portuguese families had settled.",
    photo: null,
    photoCaption: "Forno's Travel Agency — Leamington location"
  },
  {
    city: "Windsor",
    years: "1980s – 2000s",
    desc: "A third location serving the Portuguese community in Windsor and the greater Windsor–Essex area, extending António's reach across Southwestern Ontario.",
    photo: null,
    photoCaption: "Forno's Travel Agency — Windsor location"
  },
];

export default function TravelAgency() {
  return (
    <div className="travel-page page-content">
      <div className="flag-stripe" />

      <div className="travel-header">
        <div className="container">
          <div className="section-label">1977 – 2009</div>
          <h1 className="section-title">Forno's Travel Agency</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            For over thirty years, a lifeline connecting Portuguese Canadian families
            with their homeland.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="travel-story">
        <div className="container travel-story__inner">
          <div className="travel-story__text">
            <div className="section-label">The Agency</div>
            <h2 className="travel-heading">More Than a Travel Agency</h2>
            <div className="section-divider" />
            <p>
              In 1977, António do Forno founded Forno's Travel Agency in Chatham, Ontario.
              It was born out of a simple but profound need: Portuguese families in
              Southwestern Ontario needed a trusted, Portuguese-speaking service to help
              them travel back to Portugal — to see elderly parents, attend weddings and
              funerals, reconnect with the land they had left behind.
            </p>
            <p>
              António was that trusted person. Over the next three decades, the agency
              grew to three locations — Chatham, Leamington, and Windsor — serving the
              Portuguese community across all of Southwestern Ontario.
            </p>
            <p>
              It was never just about booking flights. The agency was a gathering place,
              a source of advice, a place where people could speak Portuguese and be
              understood. António helped countless families navigate the paperwork,
              the planning, and the emotions of returning home — even briefly.
            </p>
            <p>
              António retired the agency in 2009 after more than 30 years of service.
              By then, it had become one of the longest-running Portuguese Canadian
              travel institutions in Southwestern Ontario.
            </p>
          </div>
          <div className="travel-story__photo-wrap">
            <img
              src={`${process.env.PUBLIC_URL}/images/img_12.jpg`}
              alt="Forno's Travel Agency"
              className="travel-story__photo"
            />
            <div className="travel-story__photo-caption">
              Forno's Travel Agency — serving the community for over 30 years
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="travel-locations">
        <div className="container">
          <div className="section-label">Three Locations</div>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>Serving Southwestern Ontario</h2>
          <div className="section-divider" />
          <div className="travel-locations__grid">
            {locations.map((loc, i) => (
              <div key={i} className="travel-loc-card">
                <div className="travel-loc-card__photo-wrap">
                  {loc.photo ? (
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${loc.photo}`}
                      alt={loc.photoCaption}
                      className="travel-loc-card__photo"
                    />
                  ) : (
                    <div className="travel-loc-card__photo photo-placeholder">
                      📷 Photo coming soon<br />
                      <span>{loc.photoCaption}</span>
                    </div>
                  )}
                </div>
                <div className="travel-loc-card__body">
                  <div className="travel-loc-card__years">{loc.years}</div>
                  <h3 className="travel-loc-card__city">{loc.city}</h3>
                  <p className="travel-loc-card__desc">{loc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The supermarket */}
      <section className="travel-supermarket">
        <div className="container travel-supermarket__inner">
          <div className="travel-supermarket__icon">🛒</div>
          <div>
            <div className="section-label">1975</div>
            <h3 className="travel-heading">The Portuguese Supermarket</h3>
            <p>
              Two years before the travel agency, in 1975, António opened a Portuguese
              supermarket in Chatham — one of the first in the region. It stocked
              authentic Portuguese foods, ingredients, and goods that families simply
              could not find anywhere else. It was another thread in the web of
              community he was quietly, steadily building.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
