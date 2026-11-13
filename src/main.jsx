import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const slides = [
  {
    title: "La música es el lenguaje del alma",
    subtitle: "Tradición, amistad y folklore argentino.",
    image: "/assets/hero-guitarra.jpg"
  },
  {
    title: "La biblia, el mate y el amanecer renuevan mi fervor por el",
    subtitle: "Folklore, tierra y sentimiento que se llevan en el corazón.",
    image: "/assets/hero-mate.png"
  }
];

const members = [
  {
    name: "Oscar Baez",
    role: "Guitarra, charango y voz",
    image: "/assets/member-oscar.svg"
  },
  {
    name: "Osvaldo Kruzliak",
    role: "Bombo y voz",
    image: "/assets/member-osvaldo.svg"
  },
  {
    name: "Daniel Oviedo",
    role: "Guitarra y voz",
    image: "/assets/member-daniel.svg"
  },
  {
    name: "Juan Manuel Castillo",
    role: "Guitarra y voz",
    image: "/assets/member-juan.svg"
  }
];

function Ornament() {
  return <div className="ornament" aria-hidden="true"><span>◆</span></div>;
}

function App() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent((index + slides.length) % slides.length);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("¡Gracias por escribirnos! El formulario está listo para conectarse a tu servicio de correo o backend.");
    event.currentTarget.reset();
  };

  return (
    <div className="site">
      <header className="navbar">
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}>
          <img src="/assets/logo.png" alt="Conjunto Folklórico Amistad" />
        </a>

        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {[
            ["inicio", "Inicio"],
            ["nosotros", "Nosotros"],
            ["integrantes", "Integrantes"],
            ["contacto", "Contacto"]
          ].map(([href, label]) => (
            <a key={href} href={`#${href}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          {slides.map((slide, index) => (
            <div
              className={`slide ${index === current ? "active" : ""}`}
              key={slide.title}
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden={index !== current}
            >
              <div className="hero-overlay"></div>
              <div className="hero-content">
                <p className="eyebrow">CONJUNTO FOLKLÓRICO AMISTAD</p>
                <h1>{slide.title}</h1>
                <Ornament />
                <p className="hero-subtitle">{slide.subtitle}</p>
                <a className="btn" href="#nosotros">Conocé nuestra historia</a>
              </div>
            </div>
          ))}

          <button className="slider-arrow left" onClick={() => goTo(current - 1)} aria-label="Anterior">‹</button>
          <button className="slider-arrow right" onClick={() => goTo(current + 1)} aria-label="Siguiente">›</button>

          <div className="dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={index === current ? "dot active" : "dot"}
                onClick={() => goTo(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section id="nosotros" className="section about">
          <div className="section-inner about-grid">
            <div className="photo-frame large">
              <img src="/assets/nosotros.svg" alt="Paisaje tradicional argentino" />
              <span className="stamp">AMISTAD<br /><small>Folklore Argentino</small></span>
            </div>
            <div className="about-copy">
              <p className="section-kicker">NUESTRA HISTORIA</p>
              <h2>Nosotros</h2>
              <Ornament />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                euismod, nisl eget consectetur sagittis, nisl nunc aliquam nunc,
                eget aliquet nunc nisl vitae nunc. Integer sed lorem nec justo
                fermentum luctus.
              </p>
              <p>
                Vivamus convallis, erat eget tincidunt lacinia, mauris nisl
                convallis justo, et efficitur sem urna at justo. Donec non nulla
                nec urna cursus varius. Integer ultrices ex vel libero malesuada,
                at vehicula nisl tincidunt.
              </p>
              <p>
                Nuestro objetivo es mantener viva la esencia de nuestra música,
                compartiendo canciones, historias y momentos que forman parte de
                nuestra identidad.
              </p>
            </div>
          </div>
        </section>

        <section id="integrantes" className="section members">
          <div className="section-inner">
            <div className="section-heading">
              <p className="section-kicker">QUIENES SOMOS</p>
              <h2>Integrantes</h2>
              <Ornament />
              <p>Cuatro voces, instrumentos y una misma pasión por el folklore.</p>
            </div>

            <div className="member-grid">
              {members.map((member, index) => (
                <article className="member-card" key={member.name}>
                  <div className="member-photo">
                    <img src={member.image} alt={`${member.name} - ${member.role}`} />
                    <span className="member-number">0{index + 1}</span>
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="section contact">
          <div className="section-inner contact-grid">
            <div className="contact-copy">
              <p className="section-kicker">ESTAMOS PARA ESCUCHARTE</p>
              <h2>Contacto</h2>
              <Ornament />
              <p>
                ¿Querés contactarte con el conjunto, invitarnos a un evento o
                simplemente compartir unas palabras? Escribinos.
              </p>
              <div className="contact-decoration">♪ ♫ ♪</div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Nombre
                <input type="text" name="nombre" placeholder="Tu nombre" required />
              </label>
              <label>
                Correo
                <input type="email" name="correo" placeholder="tu@email.com" required />
              </label>
              <label>
                Mensaje
                <textarea name="mensaje" rows="6" placeholder="Escribinos tu mensaje..." required></textarea>
              </label>
              <button className="btn submit" type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <img className="footer-logo" src="/assets/logo.png" alt="Conjunto Folklórico Amistad" />
        <div className="footer-ornament">◆ ───────────── ◆</div>
        <p><strong>© Copyright 2026</strong> - Conjunto Folklórico Amistad - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
