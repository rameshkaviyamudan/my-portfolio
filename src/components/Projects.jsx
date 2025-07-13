export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project">
        <h3>🧠 SpecGenius – Internship Project</h3>
        <p>
          Built a system to automate extraction of Roll-to-Roll (R2R) conductive film specifications
          from scientific papers, boosting R&D efficiency for materials researchers.
        </p>
        <ul>
          <li>💻 Developed frontend in React.js with interactive dashboards</li>
          <li>🔧 Created Node.js backend with RESTful APIs for PDF parsing and data flow</li>
          <li>⚡ Integrated CUDA acceleration for ML model execution</li>
          <li>📄 Intelligent PDF parsing to extract & categorize technical specs</li>
        </ul>
        <p>
          <strong>Tech Stack:</strong> React.js, Node.js, CUDA<br />
          <a href="https://www.youtube.com/watch?v=Oq0rVeQkZXQ" target="_blank">
            🔗 View Demo
          </a>
        </p>
      </div>

      <hr />

      <div className="project">
        <h3>🌱 CarbonAware – Mobile App</h3>
        <p>
          Mobile app designed to help Singapore-based users understand and reduce their carbon footprint.
          It compares personal impact against global and regional averages, with tailored recommendations.
        </p>
        <ul>
          <li>📊 Personalized carbon footprint calculator</li>
          <li>🌏 Region-specific insights & government links</li>
          <li>📱 Simple, clean UI with localized context</li>
        </ul>
        <p>
          <strong>Platform:</strong> Mobile App<br />
          <a href="https://www.youtube.com/watch?v=YRA13SC-9PA" target="_blank">
            🔗 View Demo
          </a>
        </p>
      </div>

      {/* Optionally: Add more projects here */}
    </section>
  )
}