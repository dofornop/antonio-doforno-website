import './Videos.css';

// ─── HOW TO ADD A VIDEO ────────────────────────────────────────────────────────
//
// For a YouTube video — just paste the full link:
//   { type: "youtube", url: "https://www.youtube.com/watch?v=abc123", title: "Title", caption: "Optional description" }
//   { type: "youtube", url: "https://youtu.be/abc123",                title: "Title", caption: "Optional description" }
//
// For a video file you upload to public/videos/:
//   { type: "file", src: "video-filename.mp4", title: "Title", caption: "Optional description" }
//
const videos = [
  // Example — delete this line and add your own below:
   { type: "youtube", url: "https://youtu.be/3AAyN4HBuug", title: "FPTV Ponto da Situação", caption: "Sharing about Antonio passing away" },
];

// ─── Extracts the YouTube video ID from any YouTube URL format ─────────────────
function getYouTubeId(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    if (u.hostname === 'youtu.be') return u.pathname.slice(1);
    if (u.hostname.includes('youtube.com')) return u.searchParams.get('v');
  } catch {
    // if it's already just an ID, return it as-is
    return url;
  }
  return null;
}

export default function Videos() {
  return (
    <div className="videos-page page-content">
      <div className="flag-stripe" />

      <div className="videos-header">
        <div className="container">
          <div className="section-label">In His Own Words &amp; Moments</div>
          <h1 className="section-title">Videos</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Video memories of António — family gatherings, community events,
            and moments captured on film.
          </p>
        </div>
      </div>

      <section className="videos-main">
        <div className="container">
          {videos.filter(v => !(v.type === 'youtube' && v.url?.includes('dQw4w9WgXcQ'))).length > 0 ? (
            <div className="videos-grid">
              {videos.map((v, i) => {
                const youtubeId = v.type === 'youtube' ? getYouTubeId(v.url) : null;
                return (
                  <div key={i} className="video-card">
                    <div className="video-card__embed">
                      {v.type === 'youtube' && youtubeId ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}`}
                          title={v.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : v.type === 'file' ? (
                        <video controls>
                          <source src={`${process.env.PUBLIC_URL}/videos/${v.src}`} />
                          Your browser does not support video.
                        </video>
                      ) : null}
                    </div>
                    <div className="video-card__body">
                      <h3 className="video-card__title">{v.title}</h3>
                      {v.caption && <p className="video-card__caption">{v.caption}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="videos-placeholder">
              <div className="videos-placeholder__icon">🎬</div>
              <h2>Videos Coming Soon</h2>
              <p>
                To add a YouTube video, open <strong>src/pages/Videos.jsx</strong>,
                find the <code>videos</code> array at the top, and paste in the
                full YouTube link like this:
              </p>
              <div className="videos-placeholder__example">
                {`{ type: "youtube", url: "https://www.youtube.com/watch?v=...", title: "Your title", caption: "Optional note" }`}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
