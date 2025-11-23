import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowDown,
  Mail,
  Phone,
  Github,
  Linkedin,
  X,
  Shield,
  Code2,
  Activity,
} from "lucide-react";
import "./styles.css";

/* SKILLS CONFIG – LEVELS + LABELS */
const skills = [
  { name: "React.js", level: 95, meta: "Active • Used in RealTime Projects" },
  { name: "Node.js", level: 90, meta: "Active • Backend & APIs" },
  { name: "SpringBoot", level: 90, meta: "REST APIs • Backend & APIs" },
  { name: "MySQL", level: 89, meta: "Relational DB • Queries" },
  { name: "MongoDB", level: 85, meta: "Document DB • Aggregations" },
  { name: "Python", level: 87, meta: "Automation • Scripts" },
  { name: "Artificial Intelligence", level: 93, meta: "Models • ChatBot" },
  { name: "Flutter", level: 99, meta: "Apps • Realtime Booking" },
];

/* PROJECTS CONFIG */
const projects = [
  {
    id: 1,
    title: "Real-Time Game Tournament Booking Platform",
    desc: "End-to-end system for booking, managing, and hosting game tournaments in real time.",
    details:
      "A fully responsive, real-time multiplayer tournament booking system with match scheduling, live status tracking, secure player authentication, automated team assignment, and instant notifications. Designed for e-sports organisers to manage events seamlessly with zero downtime.",
    tech: ["React", "Node.js", "Express", "MySQL", "Socket.io"],
    role: "Fullstack Developer",
    tags: ["Real-Time", "Gaming", "Web App"],
    github: "https://github.com/yourusername/game-booking-app",
    demo: "https://game-booking-demo.com",
  },

  {
    id: 2,
    title: "Real-Time Cloud Kitchen Ordering & Dispatch System",
    desc: "Live order management platform for cloud kitchens and fast-moving restaurants.",
    details:
      "Built a production-grade cloud-kitchen ecosystem with real-time order tracking, delivery pipeline automation, kitchen dashboards, inventory sync, chef assignment, and multi-branch analytics. Highly optimized for speed, scalability, and zero-delay updates.",
    tech: ["React", "Node.js", "Express", "MongoDB", "WebSockets"],
    role: "Fullstack Developer",
    tags: ["FoodTech", "Real-Time", "Dashboard"],
    github: "https://github.com/yourusername/cloud-kitchen-app",
    demo: "https://cloud-kitchen-demo.com",
  },

  {
    id: 3,
    title: "Real-Time Grocery E-Commerce Platform",
    desc: "A modern, fast, and scalable grocery ordering web application with live delivery flow.",
    details:
      "Developed a complete grocery e-commerce system with product categories, cart + checkout, live delivery tracking, order status in real time, optimized search, Razorpay integration, and admin panel for managing stock, delivery partners, and offers.",
    tech: ["React", "Node.js", "Express", "MySQL", "Framer Motion"],
    role: "Fullstack Developer",
    tags: ["E-Commerce", "Fullstack", "Real-Time"],
    github: "https://github.com/yourusername/grocery-app",
    demo: "https://grocery-app-demo.com",
  },

  {
    id: 4,
    title: "AI-Automated Stock Trading System (Python)",
    desc: "ML-powered automated trading bot with live market analysis & decision automation.",
    details:
      "An AI-driven Python trading engine that analyzes stock trends, predicts movements with ML models, and executes trades automatically using broker APIs. Features strategy backtesting, live monitoring, pattern detection, stop-loss automation, and performance dashboards.",
    tech: ["Python", "Machine Learning", "Pandas", "NumPy", "Broker API"],
    role: "AI & Automation Developer",
    tags: ["AI", "Automation", "Trading"],
    github: "https://github.com/yourusername/ai-trading-bot",
    demo: "https://ai-trading-demo.com",
  },
];


export default function Portfolio() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* Navbar scroll shrink */
  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Fade-in helper for sections */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15 },
    }),
  };

  const openProjectModal = (project) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveProject(null), 250);
  };

  /* 3D parallax for skill cards */
  const handleParallax = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 18) * -1;
    const rotateY = (x - centerX) / 18;

    card.style.setProperty("--tiltX", `${rotateX}deg`);
    card.style.setProperty("--tiltY", `${rotateY}deg`);
  };

  const resetParallax = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--tiltX", "0deg");
    card.style.setProperty("--tiltY", "0deg");
  };

  return (
    <div className="bg-dark-main text-white no-overflow cyber-bg">
      {/* 🔥 GLOBAL BACKGROUND VIDEO */}
      <div className="bg-video-container">
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="bg-video-overlay" />
      </div>

      {/* HOLOGRAM NAVBAR (slightly bigger) */}
      <div
        className={`holo-nav-wrapper ${
          navScrolled ? "holo-nav-scrolled" : ""
        }`}
      >
        <nav
          className="holo-nav-inner d-flex align-items-center justify-content-between px-4 px-md-5"
          style={{ paddingBlock: "12px" }}
        >
          <a href="#hero" className="holo-logo">
            SAKTHI
          </a>

          <div className="d-none d-md-flex gap-4 nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <section
        id="hero"
        className="vh-100 d-flex align-items-center position-relative hero-section"
      >
        {/* floating particles + grid */}
        <div className="particles">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className="particle" />
          ))}
        </div>
        <div className="hero-grid-overlay" />

        <div className="container position-relative">
          <div className="row align-items-center gy-4">
            {/* LEFT TEXT */}
            <div className="col-md-7">
              <motion.p
                className="neon-tagline mb-2"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                FULL STACK • ARTIFICIAL INTELLIGENCE • CYBERSECURITY
              </motion.p>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span
                  className="hero-name glitch-text-strong"
                  data-text="SAKTHI"
                >
                  SAKTHI
                </span>
                <span className="hero-role typing-effect">
                   FULL STACK AND AI DEVELOPER
                </span>
              </motion.h1>

              <motion.p
                className="lead hero-subtext"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                Building secure, animated, real-time web applications with
                production-grade architecture, cyber-defense mindset, and
                cinematic UI.
              </motion.p>

              <motion.div
                className="hero-badges d-flex flex-wrap gap-2 mt-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <span className="hero-chip">
                  <Code2 size={14} /> FULLSTACK
                </span>
                <span className="hero-chip">
                  <Shield size={14} /> APP DEVELOPMENT
                </span>
                <span className="hero-chip">
                  <Activity size={14} /> AI INTEGRATIONS
                </span>
              </motion.div>

              <motion.div
                className="d-flex flex-wrap gap-3 mt-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <a href="#projects" className="btn btn-info glow-btn">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-outline-info glow-outline">
                  Contact Me
                </a>
              </motion.div>

              <motion.div
                className="hero-stats-row d-flex flex-wrap gap-3 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                <div className="hero-stat-card">
                  <span className="hero-stat-number">30+</span>
                  <span className="hero-stat-label">WEB APPLICATIONS</span>
                </div>
                <div className="hero-stat-card">
                  <span className="hero-stat-number">20+</span>
                  <span className="hero-stat-label">AI PROJECTS</span>
                </div>
                <div className="hero-stat-card">
                  <span className="hero-stat-number">2 </span>
                  <span className="hero-stat-label">FLUTTER APPS</span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT ORB */}
            <div className="col-md-5 d-none d-md-block">
              <motion.div
                className="hero-orb-wrapper"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <div className="hero-orb" />
                <div className="hero-orb-ring" />
                <div className="hero-orb-grid" />

                <motion.div
                  className="holo-mini-card mini-card-top"
                  initial={{ opacity: 0, y: -10, x: 40 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                >
                  <span className="mini-label">Current Focus</span>
                  <span className="mini-value">
                    Fullstack • AppSec • Animations
                  </span>
                </motion.div>

                <motion.div
                  className="holo-mini-card mini-card-bottom"
                  initial={{ opacity: 0, y: 10, x: -40 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <span className="mini-label">Location</span>
                  <span className="mini-value">Chennai, India</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          className="position-absolute bottom-0 mb-3 w-100 text-center arrow-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <ArrowDown size={32} className="text-info" />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container py-5 section-padding">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          About Me
        </motion.h2>

        <div className="about-wrapper row g-4">
          <motion.div
            className="col-md-7"
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="fs-5">
              I am a final-year IT student at Chennai Institute of Technology, specializing
  in Full Stack Development and Artificial Intelligence. I build modern,
  real-time web applications and intelligent AI-driven projects with a strong
  focus on performance, UI/UX, and scalability.
            </p>
            <p>
              My experience spans across React, Node.js, Express, MySQL, MongoDB, and Python.
  Along with development, I also have hands-on cybersecurity knowledge, including
  web application testing, phishing simulations, WiFi security analysis, and ethical
  exploitation workflows. I’ve developed and deployed multiple full-stack applications,
  integrating security best practices and real-time system behavior.
            </p>
          </motion.div>

          <motion.div
            className="col-md-5"
            variants={fadeUp}
            custom={0.8}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="about-panel neon-border">
              <div className="about-pill-row">
                <span className="about-pill">Full Stack</span>
                <span className="about-pill">AI</span>
              </div>
              <div className="about-stats-grid">
                <div className="about-stat">
                  <span className="label">Focus</span>
                  <span className="value">  Web Applications & AI Implementations</span>
                </div>
                <div className="about-stat">
                  <span className="label">Based In</span>
                  <span className="value">  Real-Time Problems</span>
                </div>
                <div className="about-stat">
                  <span className="label">Goal </span>
                  <span className="value"> 
                        Build and secure high-impact products
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS – CINEMATIC SECTION */}
      <section id="skills" className="skills-section container section-padding">
        <motion.h2
          className="section-title typing-skill-title"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          SKILLS
        </motion.h2>

        <motion.p
          className="skills-subtext"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          A futuristic set of technologies I use to build secure, animated,
          scalable full-stack applications.
        </motion.p>

        <div className="row g-4 mt-4">
          {skills.map((skill, i) => (
            <div key={skill.name} className="col-12 col-md-6 col-lg-3">
              <motion.div
                className="skill-card-cinematic"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                viewport={{ once: true, amount: 0.3 }}
                onMouseMove={handleParallax}
                onMouseLeave={resetParallax}
              >
                {/* floating hologram particles */}
                <div className="skill-holo-particles">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                {/* inner RGB ring */}
                <div className="skill-ring"></div>

                <div className="skill-card-content">
                  <h3 className="skill-title typing-small">{skill.name}</h3>
                  <p className="skill-meta">{skill.meta}</p>

                  <div className="skill-progress">
                    <div
                      className="skill-progress-fill"
                      style={{ "--progress-value": `${skill.level}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="container py-5 section-padding">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          Projects
        </motion.h2>

        <motion.p
          className="projects-subtext mb-4"
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          A mix of full stack and security-focused projects that reflect how I
          think about reliability, performance, and defense.
        </motion.p>

        <div className="row g-4">
          {projects.map((p, i) => (
            <div key={p.id} className="col-md-6">
              <motion.div
                className="project-card neon-border project-card-3d ai-project-card h-100 d-flex flex-column"
                variants={fadeUp}
                custom={i * 0.1}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ y: -8 }}
              >
                <div>
                  <div className="project-headline">
                    <h3
                      className="mb-1 glitch-text project-title-strong"
                      data-text={p.title}
                    >
                      {p.title}
                    </h3>
                    <div className="project-tags">
                      {p.tags?.map((tag) => (
                        <span key={tag} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="project-desc mb-3">{p.desc}</p>

                  <div className="project-meta-line">
                    <span className="label">Stack</span>
                    <span className="project-tech-inline">
                      {p.tech.slice(0, 3).join(" • ")}
                      {p.tech.length > 3 && " • …"}
                    </span>
                  </div>
                </div>

                <div className="project-actions mt-3 mt-auto">
                  <button
                    className="btn btn-sm btn-outline-info glow-outline"
                    onClick={() => openProjectModal(p)}
                  >
                    View Details
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* RESUME */}
      <section id="resume" className="bg-dark-secondary py-5 section-padding">
        <div className="container">
          <motion.h2
            className="section-title text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            Resume
          </motion.h2>

          <motion.div
            className="resume-wrapper d-flex justify-content-center"
            variants={fadeUp}
            custom={0.5}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="resume-card neon-border">
              <div className="resume-meta">
                <span className="resume-label">Profile </span>
                <span className="resume-value">Full Stack & AI</span>
              </div>
              <p className="mb-3">
                A single-page snapshot of my skills, projects, education, and
                certifications. Ideal for recruiters, hiring managers, and
                collaboration opportunities.
              </p>
              <a
  href="/mnt/data/Resume-Sakthi.pdf"
  download="Sakthi_Resume.pdf"
  className="btn btn-info px-4 py-2 fw-bold glow-btn"
>
  Download Resume
</a>

            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="container py-5 section-padding">
        <motion.h2
          className="section-title"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          Contact
        </motion.h2>

        <div className="row g-4 contact-row">
          <motion.div
            className="col-md-6"
            variants={fadeUp}
            custom={0.4}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="contact-card neon-border h-100">
              <p>
                Open to internships, full-time roles, freelance projects, and
                collaborations in full stack development and security.
              </p>
              <div className="fs-5 contact-icons mt-3">
                <p>
                  <Mail /> &nbsp; sakthiparamesh888@gmail.com
                </p>
                <p>
                  <Phone /> &nbsp; +91 9500244851
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-md-6"
            variants={fadeUp}
            custom={0.6}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="contact-card neon-border contact-social-card h-100">
              <span className="contact-label">Social</span>
              <p className="mb-3">
                Connect with me, check my code, or send a quick message about
                something interesting you&apos;re building.
              </p>
              <div className="contact-social-links">
                <a
                  href="https://github.com/sakthiparamesh888-eng"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://linkedin.com/in/sakthi"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT MODAL – Cyber Neon (M2) */}
      <AnimatePresence>
        {isModalOpen && activeProject && (
          <motion.div
            className="project-modal-backdrop"
            onClick={closeProjectModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="project-modal hologram-modal laser-frame glass-panel glitch-layer"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { duration: 0.35 },
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 20,
                transition: { duration: 0.25 },
              }}
            >
              {/* Header strip */}
              <div className="modal-header-bar">
                <span className="status-dot red" />
                <span className="status-dot yellow" />
                <span className="status-dot green" />
                <span className="modal-title-text">
                  PROJECT_LOG &gt; {activeProject.title}
                </span>
                <button
                  className="modal-close-btn"
                  onClick={closeProjectModal}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="modal-body-content">
                <h3
                  className="modal-project-title glitch-text-strong"
                  data-text={activeProject.title}
                >
                  {activeProject.title}
                </h3>

                {/* Tags row */}
                {activeProject.tags && (
                  <div className="mb-3 modal-tags-row">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="modal-main-desc">{activeProject.details}</p>

                <p className="modal-role-line">
                  <span className="label">Role:</span> {activeProject.role}
                </p>

                <div className="modal-tech-stack">
                  <span className="label">Stack:</span>
                  <div className="tech-chips">
                    {activeProject.tech.map((t) => (
                      <span key={t} className="tech-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Quick actions */}
                <div className="modal-links">
                  <a
                    href={activeProject.github}
                    className="btn btn-sm btn-outline-info glow-outline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                  <a
                    href={activeProject.demo}
                    className="btn btn-sm btn-info glow-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              {/* Footer strip */}
              <div className="modal-footer-bar">
                <span className="footer-text">
                  STATUS: <span className="accent">RUNNING</span> • MODE:{" "}
                  <span className="accent">CYBER-NEON-HOLOGRAM</span>
                </span>
                <span className="scan-line" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
