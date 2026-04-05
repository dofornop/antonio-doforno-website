import { useState } from 'react';
import { timeline } from '../data/timeline';
import './Timeline.css';

const categoryColors = {
  life:      { bg: '#2e6b3e', label: 'Life' },
  family:    { bg: '#c0392b', label: 'Family' },
  community: { bg: '#b8960c', label: 'Community' },
  business:  { bg: '#5d6d7e', label: 'Business' },
  honors:    { bg: '#8e44ad', label: 'Honours' },
};

const filters = [
  { id: 'all', label: 'All' },
  { id: 'life', label: 'Life' },
  { id: 'family', label: 'Family' },
  { id: 'community', label: 'Community' },
  { id: 'business', label: 'Business' },
  { id: 'honors', label: 'Honours' },
];

export default function Timeline() {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? timeline
    : timeline.filter(e => e.category === active);

  return (
    <div className="timeline-page page-content">
      <div className="flag-stripe" />

      <div className="tl-header">
        <div className="container">
          <div className="section-label">A Life in Full</div>
          <h1 className="section-title">Timeline</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Nine decades of devotion — from a village in Portugal to the heart of the 
            Portuguese Canadian community.
          </p>
        </div>
      </div>

      {/* Filter pills */}
      <div className="tl-filters">
        <div className="container tl-filters__inner">
          {filters.map(f => (
            <button
              key={f.id}
              className={`tl-filter${active === f.id ? ' tl-filter--active' : ''}`}
              onClick={() => setActive(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="container tl-body">
        <div className="tl-line" />
        {filtered.map((event, i) => (
          <div key={`${event.year}-${i}`} className={`tl-event${i % 2 === 0 ? ' tl-event--left' : ' tl-event--right'}`}>
            <div className="tl-event__dot" style={{ background: categoryColors[event.category]?.bg }} />
            <div className="tl-event__card">
              <div className="tl-event__year">{event.year}</div>
              <div
                className="tl-event__tag"
                style={{ background: categoryColors[event.category]?.bg }}
              >
                {categoryColors[event.category]?.label}
              </div>
              <h3 className="tl-event__title">{event.title}</h3>
              <p className="tl-event__desc">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
