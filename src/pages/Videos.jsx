import './Videos.css';

// To add a video, add an entry to this array:
// { type: "youtube", id: "VIDEO_ID_HERE", title: "Title", caption: "Short description" }
// or
// { type: "file", src: "video-filename.mp4", title: "Title", caption: "Short description" }
const videos = [];

export default function Videos() {
  return (
    <div className="videos-page page-content">
      <div className="flag-stripe" />

      <div className="videos-header">
        <div className="container">
          <div className="section-label">In His Own Words & Moments</div>
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
          {videos.length > 0 ? (
            <div className="videos-grid">
              {videos.map((v, i) => (
                <div key={i} className="video-card">
                  <div className="video-card__embed">
                    {v.type === 'youtube' ? (
                      <iframe
                        src={`https://www.youtube.com/embed/${v.id}`}
                        title={v.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <video controls>
                        <source src={`${process.env.PUBLIC_URL}/videos/${v.src}`} />
                        Your browser does not support video.
                      </video>
                    )}
                  </div>
                  <div className="video-card__body">
                    <h3 className="video-card__title">{v.title}</h3>
                    {v.caption && <p className="video-card__caption">{v.caption}</p>}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="videos-placeholder">
              <div className="videos-placeholder__icon">🎬</div>
              <h2>Videos Coming Soon</h2>
              <p>
                Family videos and recordings will be added here. To add a video,
                open <strong>src/pages/Videos.jsx</strong> and add an entry to the
                <code>videos</code> array at the top of the file.
              </p>
              <p>
                You can add YouTube videos (just paste the video ID) or upload
                video files directly to <strong>public/videos/</strong>.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
