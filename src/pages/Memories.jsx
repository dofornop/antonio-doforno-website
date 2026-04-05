import { useState } from 'react';
import { memories } from '../data/memories';
import './Memories.css';

export default function Memories() {
  const [form, setForm] = useState({ author: '', relation: '', text: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, show a thank you message.
    // To enable live submissions, connect Supabase here.
    setSubmitted(true);
  };

  return (
    <div className="memories-page page-content">
      <div className="flag-stripe" />

      <div className="memories-header">
        <div className="container">
          <div className="section-label">Remember Him With Us</div>
          <h1 className="section-title">Memories</h1>
          <div className="section-divider" />
          <p className="section-subtitle">
            Share a memory, a story, or a tribute. Every word honours the life 
            he lived and the people he touched.
          </p>
        </div>
      </div>

      <div className="memories-body container">

        {/* Existing memories */}
        {memories.length > 0 && (
          <section className="memories-list">
            <div className="section-label">Tributes & Memories</div>
            <div className="memories-grid">
              {memories.map(memory => (
                <div key={memory.id} className="memory-card">
                  <div className="memory-card__quote">"</div>
                  <p className="memory-card__text">{memory.text}</p>
                  <div className="memory-card__footer">
                    <div className="memory-card__author">{memory.author}</div>
                    <div className="memory-card__meta">
                      {memory.relation}
                      {memory.date && ` · ${memory.date}`}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Submission form */}
        <section className="memories-form-section">
          <div className="memories-form-wrap">
            <div className="section-label">Share Your Memory</div>
            <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Leave a Tribute</h2>
            <div className="section-divider" />
            <p style={{ color: 'var(--mid-grey)', marginBottom: '32px', fontSize: '0.92rem', lineHeight: '1.7' }}>
              Did António touch your life? Help us honour him by sharing your memory. 
              Submissions are reviewed before being added to this page.
            </p>

            {submitted ? (
              <div className="memories-thankyou">
                <div className="memories-thankyou__icon">🕊️</div>
                <h3>Thank you for sharing.</h3>
                <p>Your memory has been received and will be reviewed before being added to this page.</p>
              </div>
            ) : (
              <form className="memories-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="author">Your Name *</label>
                    <input
                      id="author"
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.author}
                      onChange={e => setForm(f => ({ ...f, author: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="relation">Your Connection to António</label>
                    <input
                      id="relation"
                      type="text"
                      placeholder="e.g. Family friend, community member"
                      value={form.relation}
                      onChange={e => setForm(f => ({ ...f, relation: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="text">Your Memory or Tribute *</label>
                  <textarea
                    id="text"
                    required
                    rows={6}
                    placeholder="Share a memory, a story, or a few words about António..."
                    value={form.text}
                    onChange={e => setForm(f => ({ ...f, text: e.target.value }))}
                  />
                </div>
                <button type="submit" className="btn-primary">
                  Submit Memory
                </button>
                <p className="form-note">
                  * Submissions are reviewed before appearing on this page.
                  To enable live submissions, connect this form to Supabase.
                </p>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
