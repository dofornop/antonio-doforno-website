import { pressItems } from '../data/press';
import './Press.css';

// Extracts the YouTube video ID from any YouTube URL format
function getYouTubeId(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1);
    if (u.hostname.includes('youtube.com')) return u.searchParams.get('v');
  } catch {
    return url;
  }
  return null;
}

export default function Press() {
  return (
    <div className="press-page page-content">
      <div className="flag-stripe" />

      <div className="press-header">
        <div className="container">
          <div className="section-label">In the News</div>
          <h1 className="section-title">Press &amp; Media</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Articles, clippings, and media coverage documenting António's life
            and service over the decades.
          </p>
        </div>
      </div>

      <section className="press-main">
        <div className="container">
          <div className="press-grid">
            {pressItems.map((item, i) => {
              const youtubeId = item.videoUrl ? getYouTubeId(item.videoUrl) : null;
              return (
                <div key={i} className="press-card">
                  <div className="press-card__body">
                    <div className="press-card__meta">
                      <span className="press-card__publication">{item.publication}</span>
                      {item.year && <span className="press-card__year">{item.year}</span>}
                    </div>
                    <h3 className="press-card__headline">{item.headline}</h3>
                  </div>

                  {/* Video embed */}
                  {youtubeId && (
                    <div className="press-card__video-wrap">
                      <iframe
                        src={`https://www.youtube.com/embed/${youtubeId}`}
                        title={item.headline}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* Photo (only shown if no video) */}
                  {item.photo && !youtubeId && (
                    <div className="press-card__image-wrap">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/${item.photo}`}
                        alt={item.photoCaption || item.headline}
                        className="press-card__image"
                        style={{
                          objectPosition: item.photoPosition || 'top center',
                          objectFit: item.photoFit || 'cover',
                          background: 'var(--cream)'
                        }}
                      />
                      {item.photoCaption && (
                        <div className="press-card__image-caption">{item.photoCaption}</div>
                      )}
                    </div>
                  )}

                  {item.excerpt && (
                    <div className="press-card__excerpt-wrap">
                      <p className="press-card__excerpt">{item.excerpt}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {pressItems.length === 0 && (
            <div className="press-empty">
              <p>Press clippings and media coverage will be added here. To add one, open <code>src/data/press.js</code> and follow the format in the comments.</p>
            </div>
          )}
        </div>
      </section>

      <section className="press-add-note">
        <div className="container">
          <div className="section-label">Add a Clipping or Video</div>
          <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Got a Newspaper Article or Video?</h2>
          <div className="section-divider" />
          <p style={{ color: 'var(--mid-grey)', maxWidth: '640px', lineHeight: '1.8' }}>
            Add entries in <strong>src/data/press.js</strong>. For a photo clipping, use the <code>photo</code> field.
            For a YouTube video, use the <code>videoUrl</code> field with the full YouTube link.
          </p>
        </div>
      </section>
    </div>
  );
}
