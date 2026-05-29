import { useState, useEffect, useCallback } from 'react'
import './MediaShowcase.css'
import acespolicy from '../assets/acespolicy.png'
import Scaffolding from '../assets/Scaffolding.png'
import Transformative from '../assets/Transformative.png'
import engagement from '../assets/engagement.png'

const mediaProjects = [
  {
    id: 1,
    subtitle: 'LEGISLATIVE REFORM',
    title: 'ACES\nPolicy Brief',
    description:
      'A policy brief examining adverse childhood experiences through a legislative and public administration lens.',
    buttonText: 'View Advocacy Media',
    icon: acespolicy,
    videoUrl: '/videos/ACEs_Policy_Brief.mp4',
  },
  {
    id: 2,
    subtitle: 'PSYCHOLOGY RESEARCH',
    title: 'Scaffolding\nSuccess Therory',
    description:
      'A theoretical framework exploring how early support, structured environments, and targeted resources build capacity, confidence, and long-term success.',
    buttonText: 'View Architecture Framework',
    icon: Scaffolding,
    videoUrl: '/videos/PsychologyCapstone.mp4',
  },
  {
    id: 3,
    subtitle: 'SOCIAL ENTERPRISE',
    title: 'Transformative\nYouth Impact',
    description:
      'A nonprofit service delivery model for community engagement designed to advance restorative justice practices, diversion programs, and long-term organizational stability.',
    buttonText: 'View Business Blueprint',
    icon: Transformative,
    videoUrl: '/videos/TransformativeYouth.mp4',
  },
  {
    id: 4,
    subtitle: 'WORKFORCE STRATEGY',
    title: 'HRD Engagement\n& Retention',
    description:
      'An HRD project focused on employee engagement, talent development, and long-term retention strategy.',
    buttonText: 'View Human Capital Roadmap',
    icon: engagement,
    videoUrl: '/videos/HRDPresentation.mp4',
  },
]

function VideoModal({ videoUrl, title, onClose }) {
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
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <h3 className="video-modal-title">{title}</h3>
        <video
          className="video-modal-player"
          controls
          autoPlay
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

function MediaCard({ project, onPlayVideo }) {
  const titleLines = project.title.split('\n')

  const handleClick = (e) => {
    if (project.videoUrl) {
      e.preventDefault()
      onPlayVideo(project)
    }
  }

  return (
    <article className="media-card" id={`media-card-${project.id}`}>
      <div className="media-card-body">
        <div className="media-card-icon">
          <img src={project.icon} alt={project.subtitle} />
        </div>

        <span className="media-card-subtitle">{project.subtitle}</span>

        <h3 className="media-card-title">
          {titleLines.map((line, index) => (
            <span key={index}>
              {line}
              {index < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h3>

        <div className="media-card-star">
          <span className="media-card-star-line" />
          <span>✦</span>
          <span className="media-card-star-line" />
        </div>

        <p className="media-card-description">{project.description}</p>

        <button
          type="button"
          className="media-card-btn"
          onClick={handleClick}
          disabled={!project.videoUrl}
        >
          {project.videoUrl && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
          {project.buttonText}
          {!project.videoUrl && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          )}
        </button>
      </div>
    </article>
  )
}

function MediaShowcase() {
  const [activeVideo, setActiveVideo] = useState(null)

  const handlePlayVideo = (project) => {
    setActiveVideo(project)
  }

  const handleCloseVideo = () => {
    setActiveVideo(null)
  }

  return (
    <section className="media-showcase" id="media-showcase">
      <div className="media-showcase-header">
        <h2 className="media-showcase-title">Media Showcase</h2>
        <div className="media-showcase-divider">
          <span className="media-showcase-divider-line" />
          <span className="media-showcase-divider-diamond">✦</span>
          <span className="media-showcase-divider-line" />
        </div>
        <p className="media-showcase-tagline">
          Digital presentations that inform, influence, and transform complex
          work into elevated executive narratives.
        </p>
      </div>

      <div className="media-showcase-grid">
        {mediaProjects.map((project) => (
          <MediaCard
            key={project.id}
            project={project}
            onPlayVideo={handlePlayVideo}
          />
        ))}
      </div>

      {activeVideo && (
        <VideoModal
          videoUrl={activeVideo.videoUrl}
          title={activeVideo.title.replace('\n', ' ')}
          onClose={handleCloseVideo}
        />
      )}
    </section>
  )
}

export default MediaShowcase

