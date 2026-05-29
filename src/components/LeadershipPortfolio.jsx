import { useState, useEffect, useCallback } from 'react'
import './LeadershipPortfolio.css'

import challengerIcon from '../assets/challenger.png'
import challengerResults from '../assets/challengerResults.png'

import leadershipIcon from '../assets/Leadership.png'
import leadershipResults from '../assets/LeadResults.png'

import commanderIcon from '../assets/ommander.png'
import commanderResults from '../assets/CommanderResults.png'

import overviewImage from '../assets/overview.png'

const portfolioItems = [
  {
    id: 1,
    label: 'ENNEAGRAM PROFILE',
    title: 'THE CHALLENGER',
    subtitle: 'ENNEAGRAM 8w7',
    description:
      'The Enneagram 8w7 profile reflects a bold, assertive, and justice-oriented leadership presence. This profile highlights confidence, decisiveness, protective advocacy, strategic action, and a natural capacity to confront challenges directly while promoting accountability, meaningful change, and organizational impact.',
    buttonText: 'VIEW ENNEAGRAM RESULTS',
    icon: challengerIcon,
    resultsImage: challengerResults,
  },
  {
    id: 2,
    label: 'BIG FIVE PROFILE',
    title: 'LEADERSHIP TRAITS',
    subtitle: 'BIG FIVE PERSONALITY',
    description:
      'The Big Five profile reflects strong emotional stability, high extraversion, creativity, conscientiousness, and a collaborative leadership style. This profile communicates a professional temperament that is resilient, organized, people-oriented, analytically grounded, and well-suited for strategic leadership and mission-driven work.',
    buttonText: 'VIEW BIG FIVE RESULTS',
    icon: leadershipIcon,
    resultsImage: leadershipResults,
  },
  {
    id: 3,
    label: 'MYERS-BRIGGS PROFILE',
    title: 'THE COMMANDER',
    subtitle: 'ENTJ-A',
    description:
      'The Myers-Briggs ENTJ-A profile reflects a decisive, visionary, and goal-oriented executive mindset. This profile emphasizes strategic thinking, confidence, efficiency, structured leadership, and the ability to translate complex ideas into actionable outcomes through clear direction, disciplined execution, and purposeful influence.',
    buttonText: 'VIEW MBTI RESULTS',
    icon: commanderIcon,
    resultsImage: commanderResults,
  },
]

function ResultsModal({ imageUrl, title, onClose }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [handleKeyDown])

  return (
    <div className="results-modal-overlay" onClick={onClose}>
      <div className="results-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="results-modal-close" onClick={onClose} aria-label="Close">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h3 className="results-modal-title">{title} RESULTS</h3>
        <div className="results-modal-image-container">
          <img src={imageUrl} alt={`${title} results`} className="results-modal-image" />
        </div>
      </div>
    </div>
  )
}

function LeadershipCard({ item, onOpenResults }) {
  return (
    <article className="leadership-card">
      <div className="leadership-card-body">
        <div className="leadership-card-icon">
          <img src={item.icon} alt={item.title} />
        </div>

        <span className="leadership-card-label">{item.label}</span>

        <h3 className="leadership-card-title">{item.title}</h3>
        <span className="leadership-card-subtitle">{item.subtitle}</span>

        <div className="leadership-card-star">
          <span className="leadership-card-star-line" />
          <span>✦</span>
          <span className="leadership-card-star-line" />
        </div>

        <p className="leadership-card-description">{item.description}</p>

        <button
          className="leadership-card-btn"
          onClick={() => onOpenResults(item)}
        >
          {item.buttonText}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </button>
      </div>
    </article>
  )
}

function LeadershipPortfolio() {
  const [activeItem, setActiveItem] = useState(null)

  return (
    <main className="leadership-portfolio">
      <div className="leadership-header">
        <h1 className="leadership-title">LEADERSHIP PORTFOLIO</h1>
        <div className="leadership-divider">
          <span className="leadership-divider-line" />
          <span className="leadership-divider-diamond">✦</span>
          <span className="leadership-divider-line" />
        </div>
        <p className="leadership-tagline">
          Where psychological insight meets professional performance—a structured portrait of the
          assessments that shape my leadership presence, executive mindset, emotional resilience,
          and collaborative strengths.
        </p>
      </div>

      <div className="leadership-grid">
        {portfolioItems.map((item) => (
          <LeadershipCard
            key={item.id}
            item={item}
            onOpenResults={setActiveItem}
          />
        ))}
      </div>

      <div className="leadership-overview">
        <h3 className="leadership-overview-title">Strategic Leadership Intelligence Guide</h3>
        <div className="leadership-divider">
          <span className="leadership-divider-line" />
          <span className="leadership-divider-diamond">✦</span>
          <span className="leadership-divider-line" />
        </div>
        <div className="leadership-overview-image-container">
          <img src={overviewImage} alt="Comprehensive Leadership Overview" className="leadership-overview-image" />
        </div>
      </div>

      {activeItem && (
        <ResultsModal
          imageUrl={activeItem.resultsImage}
          title={activeItem.title}
          onClose={() => setActiveItem(null)}
        />
      )}
    </main>
  )
}

export default LeadershipPortfolio
