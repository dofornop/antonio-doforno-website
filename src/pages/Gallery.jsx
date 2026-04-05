import { useState } from 'react';
import { photos, categories } from '../data/photos';
import './Gallery.css';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === 'all'
    ? photos
    : photos.filter(p => p.category === activeCategory);

  const hasPhotos = filtered.some(p => p.src);

  return (
    <div className="gallery-page page-content">
      <div className="flag-stripe" />

      <div className="gallery-header">
        <div className="container">
          <div className="section-label">A Life in Pictures</div>
          <h1 className="section-title">Gallery</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Photos from a life well lived — family, community, faith, and service.
          </p>
        </div>
      </div>

      {/* Category filter */}
      <div className="gallery-filters">
        <div className="container gallery-filters__inner">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`gallery-filter${activeCategory === cat.id ? ' gallery-filter--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>



      {/* Grid */}
      <div className="container gallery-body">
        {!hasPhotos ? (
          <div className="gallery-empty">
            <div className="gallery-empty__icon">📷</div>
            <h3>Photos Coming Soon</h3>
            <p>
              Add photo URLs to <code>src/data/photos.js</code> to populate this gallery.
              Photos can be hosted on Cloudinary, GitHub, or any image hosting service.
            </p>
          </div>
        ) : (
          <div className="gallery-grid">
            {filtered.map(photo => (
              photo.src ? (
                <div
                  key={photo.id}
                  className={`gallery-item${photo.featured ? ' gallery-item--featured' : ''}`}
                  onClick={() => setLightbox(photo)}
                >
                  <img src={photo.src} alt={photo.caption} loading="lazy" />
                  <div className="gallery-item__overlay">
                    <div className="gallery-item__caption">{photo.caption}</div>
                    {photo.subcaption && (
                      <div className="gallery-item__subcaption">{photo.subcaption}</div>
                    )}
                  </div>
                </div>
              ) : (
                <div key={photo.id} className="gallery-item gallery-item--placeholder">
                  <div className="photo-placeholder" style={{ height: '100%' }}>
                    📷 {photo.caption}
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.caption} />
            <div className="lightbox__caption">
              <div>{lightbox.caption}</div>
              {lightbox.subcaption && <div className="lightbox__subcaption">{lightbox.subcaption}</div>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
