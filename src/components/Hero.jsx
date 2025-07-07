// src/components/Hero.jsx
import profileImg from '../assets/profile.jpg'   // 👈 adjust extension if needed
import '../index.css'                            // ensures global styles (optional)

export default function Hero() {
  return (
    <section className="hero">
      <img
        src={profileImg}
        alt="Ramesh Kaviyamudan"
        className="profile-img"
      />

      <h1>Ramesh Kaviyamudan</h1>
      <p>Computer Engineering Student | AI & ML Enthusiast</p>

      <div className="links">
        <a href="https://linkedin.com/in/rameshkaviyamudan" target="_blank">LinkedIn</a>
        <a href="https://github.com/YOUR_USERNAME"             target="_blank">GitHub</a>
        <a href="/resume.pdf"                                   target="_blank">Resume</a>
      </div>
    </section>
  )
}