import "./App.css";
import ContactForm from "./ContactForm";

// Inside your contact section, replace the <div className="contact-links"> with:
<ContactForm />

function App() {
  const skills = [
    { name: "HTML",       icon: "🌐", sub: "Semantic · Accessible · SEO",  fill: "f1" },
    { name: "CSS",        icon: "🎨", sub: "Grid · Flexbox · Animations",   fill: "f2" },
    { name: "JavaScript", icon: "⚡", sub: "ES6+ · DOM · Async",            fill: "f3" },
    { name: "React",      icon: "⚛️", sub: "Hooks · State · Components",    fill: "f4" },
    { name: "Java",       icon: "☕", sub: "OOP · Backend Logic",            fill: "f5" },
    { name: "Python",     icon: "🐍", sub: "Scripting · Automation",        fill: "f6" },
  ];

  const projects = [
    {
      num: "Project — 01", cardClass: "pc1",
      title: "Online Booking",
      desc: "A responsive booking platform with date selection, slot UI, and a smooth confirmation flow.",
      tags: [{ label: "HTML", cls: "t-purple" }, { label: "CSS", cls: "t-pink" }, { label: "JavaScript", cls: "t-yellow" }],
    },
    {
      num: "Project — 02", cardClass: "pc2",
      title: "E-Commerce Site",
      desc: "A modern e-commerce frontend — product listings, cart, and a slick checkout built with React.",
      tags: [{ label: "HTML", cls: "t-purple" }, { label: "CSS", cls: "t-pink" }, { label: "React", cls: "t-cyan" }],
    },
    {
      num: "Project — 03", cardClass: "pc3",
      title: "Portfolio Site",
      desc: "This portfolio — designed from scratch, coded in React, and crafted to stand out.",
      tags: [{ label: "React", cls: "t-cyan" }, { label: "CSS", cls: "t-pink" }],
    },
  ];

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">BK.DEV</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <div className="blob1" />
        <div className="blob2" />
        <div className="blob3" />
        <div className="hero-eyebrow"><span /> Available for opportunities</div>
        <h1>
          <span className="hi">HI, I'M</span>
          <span className="bijay">BIJAY</span>
          <span className="kalikote">KALIKOTE</span>
        </h1>
        <div className="hero-role">
          <span className="role-badge rb-purple">Frontend Dev</span>
          <span className="role-badge rb-pink">CS Graduate</span>
          <span className="role-badge rb-cyan">React · JS</span>
        </div>
        <p className="hero-desc">
          I build responsive, high-quality web apps using HTML, CSS, JavaScript,
          React, Java &amp; Python. Clean code. Real results.
        </p>
        <div className="hero-btns">
          <a href="#projects" className="btn-glow">View My Work</a>
          <a href="#contact" className="btn-outline">Let's Talk →</a>
        </div>
      </section>

      <section id="about" className="section">
        <div className="section-label">01 — About</div>
        <div className="section-title">Who I <span>Am</span></div>
        <div className="about-layout">
          <div className="about-bio">
            <p>I recently completed my <strong>Bachelor's in Computer Science</strong> and I've been building for the web ever since.</p>
            <p>Currently seeking <strong>freelance projects</strong> and <strong>junior developer roles</strong> where I can grow, contribute, and ship things people actually use.</p>
            <p>I believe code should be clean, UI should be intuitive, and everything should actually work on mobile.</p>
          </div>
          <div className="stat-row">
            <div className="stat-card"><div className="s-num s1">6+</div><div className="s-lbl">Tech Skills</div></div>
            <div className="stat-card"><div className="s-num s2">3</div><div className="s-lbl">Projects Built</div></div>
            <div className="stat-card"><div className="s-num s3">CS</div><div className="s-lbl">Degree</div></div>
            <div className="stat-card"><div className="s-num s4">∞</div><div className="s-lbl">Things to Learn</div></div>
          </div>
        </div>
      </section>

      <section id="skills" className="section section-no-top">
        <div className="section-label">02 — Skills</div>
        <div className="section-title">What I <span>Know</span></div>
        <div className="skills-wrap">
          {skills.map((sk, i) => (
            <div key={sk.name} className={`skill-card sk${i + 1}`}>
              <div className="sk-emoji">{sk.icon}</div>
              <div className="sk-name">{sk.name}</div>
              <div className="sk-sub">{sk.sub}</div>
              <div className="sk-bar"><div className={`sk-fill ${sk.fill}`} /></div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section section-no-top">
        <div className="section-label">03 — Projects</div>
        <div className="section-title">What I've <span>Built</span></div>
        <div className="proj-grid">
          {projects.map((p) => (
            <div key={p.num} className={`proj-card ${p.cardClass}`}>
              <div className="proj-num">{p.num}</div>
              <div className="proj-title">{p.title}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span key={t.label} className={`ptag ${t.cls}`}>{t.label}</span>
                ))}
              </div>
              <a href="#" className="proj-link">View Project <span>→</span></a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section section-no-top">
        <div className="section-label">04 — Contact</div>
        <div className="section-title">Let's <span>Talk</span></div>
        <div className="contact-layout">
          <div className="contact-left">
            <h3>Got a project? <em>I'm ready.</em></h3>
            <p>Open to freelance gigs, junior dev roles, and interesting collabs. I reply fast — let's build something great.</p>
            <a href="mailto:bijaykalikoti8@gmail.com" className="btn-glow" style={{ display: "inline-block" }}>
              Send Me an Email →
            </a>
          </div>
          
          <div className="contact-links">
            <a href="mailto:bijaykalikoti8@gmail.com" className="clink cl1">
              <div className="c-icon">📧</div>
              <div><div className="c-label">Email</div><div className="c-val">bijaykalikoti8@gmail.com</div></div>
            </a>
            <div className="clink cl2">
              <div className="c-icon">📱</div>
              <div><div className="c-label">Phone</div><div className="c-val">+447824075832</div></div>
            </div>
            <a href="https://www.linkedin.com/in/bijay-kalikote-17b2982b2/" target="_blank" rel="noreferrer" className="clink cl3">
              <div className="c-icon">💼</div>
              <div><div className="c-label">LinkedIn</div><div className="c-val">bijay-kalikoti</div></div>
            </a>
          </div>
            <ContactForm /> 
        </div>
      </section>

      <footer>
        <div className="ft">© 2026 Bijay Kalikote</div>
        <div className="ft ft-accent">BK.DEV</div>
      </footer>
    </div>
  );
}

export default App;
