import { useState, useEffect } from 'react'
import { FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const projects = [
    {
      title: 'RealmOfLegends',
      subtitle: 'RPG Web Game',
      tech: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server'],
      description: 'Dark-fantasy RPG with turn-based combat, shop and inventory systems, and animated UI components.',
      features: ['Layered architecture using Repository and Service patterns', 'Separate Core and Data projects'],
      github: 'https://github.com/aftabshakar95-sudo'
    },
    {
      title: 'Shinobi Arena',
      subtitle: 'Browser Combat Game',
      tech: ['ASP.NET MVC', 'CSS Animation'],
      description: 'Level-based combat with CSS-drawn characters and animated attack types.',
      features: ['Shop and inventory system tied to player progression'],
      github: 'https://github.com/aftabshakar95-sudo'
    },
    {
      title: 'NexaBank',
      subtitle: 'Banking Management System',
      tech: ['ASP.NET Core MVC', 'SQL Server'],
      description: 'Customer management, transactions, loans, and reporting modules.',
      features: ['Custom dark-themed interface built without external CSS frameworks'],
      github: 'https://github.com/aftabshakar95-sudo'
    },
    {
      title: 'PhantomInk',
      subtitle: 'Gesture-Controlled Drawing App',
      tech: ['Python', 'Flask', 'MediaPipe'],
      description: 'Draws from webcam hand tracking, with gesture debouncing and spline smoothing.',
      features: ['Particle trail effect for a responsive, interactive feel'],
      github: 'https://github.com/aftabshakar95-sudo'
    }
  ]

  const skills = {
    languages: ['C#', 'C/C++', 'Python', 'JavaScript', 'SQL/T-SQL', 'HTML & CSS'],
    frameworks: ['.NET/ASP.NET Core MVC', 'Entity Framework Core', 'MERN Stack', 'Flask'],
    tools: ['Visual Studio', 'VS Code', 'Git & GitHub', 'Docker', 'Supabase', 'SQL Server', 'MySQL']
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="logo">Aftab Ahmad</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <img src="/profile.jpg" alt="Aftab Ahmad" />
          </div>
          <h1>Aftab Ahmad</h1>
          <h2 className="hero-subtitle">Software Engineering Student | Full-Stack Developer</h2>
          <p className="hero-description">
            Building complete, visually polished web applications and games with ASP.NET Core MVC and SQL Server
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-bg-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Software Engineering student at UET Lahore building complete, visually polished
                web applications and games with ASP.NET Core MVC and SQL Server.
              </p>
              <p>
                Comfortable across the stack, from relational database design and stored
                procedures to custom-built, animated interfaces. Learns by shipping real projects
                alongside coursework.
              </p>
              <div className="education">
                <h3>Education</h3>
                <div className="education-item">
                  <h4>BS Software Engineering</h4>
                  <p className="institution">University of Engineering and Technology (UET), Lahore</p>
                  <p className="semester">3rd Semester</p>
                  <p className="coursework">
                    <strong>Relevant coursework:</strong> Databases, Object-Oriented Programming, 
                    Digital Logic, Calculus
                  </p>
                </div>
              </div>
            </div>
            <div className="competencies">
              <h3>Core Competencies</h3>
              <ul>
                <li>Relational database design, normalization, T-SQL stored procedures, DDL/DML triggers</li>
                <li>Object-oriented programming in C#: polymorphism, overriding, layered architecture</li>
                <li>Digital logic fundamentals, including adder-subtractor circuit design</li>
                <li>Debugging EF migrations, Razor views, and multi-project solution structure</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-items">
                {skills.languages.map((skill, i) => (
                  <div key={i} className="skill-item">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frameworks</h3>
              <div className="skill-items">
                {skills.frameworks.map((skill, i) => (
                  <div key={i} className="skill-item">{skill}</div>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-items">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="skill-item">{skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:aftabshakar95@gmail.com">aftabshakar95@gmail.com</a>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+923094137386">+92 309 4137386</a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>
              <div className="contact-item">
                <FaGithub className="contact-icon" />
                <div>
                  <h4>GitHub</h4>
                  <a href="https://github.com/aftabshakar95-sudo" target="_blank" rel="noopener noreferrer">
                    github.com/aftabshakar95-sudo
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <FaLinkedin className="contact-icon" />
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/aftab-ahmad-99a0343a5" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/aftab-ahmad
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Aftab Ahmad. All rights reserved.</p>
          <div className="social-links">
            <a href="https://github.com/aftabshakar95-sudo" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/aftab-ahmad-99a0343a5" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:aftabshakar95@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
