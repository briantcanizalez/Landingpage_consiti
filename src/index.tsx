import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
app.use(renderer)

app.get('/favicon.svg', (c) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#0b1e3d"/><path d="M9 10 L15 16 L9 22 M16 10 L22 16 L16 22" stroke="#00e5a0" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`
  return c.body(svg, 200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' })
})
app.get('/favicon.ico', (c) => c.redirect('/favicon.svg', 301))

app.get('/', (c) => {
  return c.render(
    <>
      {/* ══ NOISE / BG LAYER ══ */}
      <div class="noise-bg" aria-hidden="true"></div>

      {/* ══ NAVBAR ══ */}
      <header class="navbar" id="navbar">
        <div class="nav-inner">
          <a href="/" class="nav-logo">
            <img src="/static/logo-white.png" alt="Grupo Consiti" class="nav-logo-img" />
          </a>
          <nav class="nav-links" id="navLinks">
            <a href="#servicios">Servicios</a>
            <a href="#ecosistema">Ecosistema</a>
            <a href="#casos">Casos de éxito</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div class="nav-actions">
            <a href="#contacto" class="btn-nav-outline">Contacto</a>
            <a href="#contacto" class="btn-nav-green">Habla con nosotros →</a>
          </div>
          <button class="nav-burger" id="navBurger" aria-label="Menú">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section class="hero">
        {/* Decorative stars */}
        <div class="star star-1">✦</div>
        <div class="star star-2">✦</div>
        <div class="star star-3">✦</div>
        <div class="star star-4">✦</div>
        <div class="star star-5">✦</div>

        {/* Glow blobs */}
        <div class="blob blob-1" aria-hidden="true"></div>
        <div class="blob blob-2" aria-hidden="true"></div>

        <div class="hero-inner wrap">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="hb-dot"></span>
              Socio estratégico · +12 años en LATAM
            </div>
            <h1 class="hero-h1">
              Somos la compañía de<br />
              <span class="hero-gradient">Transformación Digital</span><br />
              más comprometida de LATAM
            </h1>
            <p class="hero-sub">
              En Grupo Consiti impulsamos la innovación y entregamos soluciones de Software,
              IA y Cloud que ayudan a las organizaciones a escalar y alcanzar sus objetivos.
              Su proyecto está en las mejores manos.
            </p>
            <div class="hero-checklist">
              <div class="hc-item">
                <span class="hc-check">✓</span>
                Soluciones tecnológicas de vanguardia adaptadas a su negocio
              </div>
              <div class="hc-item">
                <span class="hc-check">✓</span>
                Equipo de expertos certificados en Software, IA y Cloud
              </div>
              <div class="hc-item">
                <span class="hc-check">✓</span>
                Confianza de organizaciones públicas y privadas en toda LATAM
              </div>
            </div>
            <div class="hero-ctas">
              <a href="#contacto" class="btn-green-lg">Habla con un experto →</a>
              <a href="#casos" class="btn-ghost-lg">Ver casos de éxito</a>
            </div>
          </div>

          {/* Stats counters */}
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hstat-spaceship">🚀</div>
              <div class="hstat-num" data-target="200">0</div>
              <div class="hstat-plus">+</div>
              <div class="hstat-lbl">Proyectos entregados</div>
            </div>
            <div class="hero-stat">
              <div class="hstat-spaceship">😊</div>
              <div class="hstat-num" data-target="120">0</div>
              <div class="hstat-plus">+</div>
              <div class="hstat-lbl">Clientes satisfechos</div>
            </div>
            <div class="hero-stat">
              <div class="hstat-spaceship">🎨</div>
              <div class="hstat-num" data-target="12">0</div>
              <div class="hstat-plus">+</div>
              <div class="hstat-lbl">Años en la industria</div>
            </div>
            <div class="hero-stat">
              <div class="hstat-spaceship">🌎</div>
              <div class="hstat-num" data-target="8">0</div>
              <div class="hstat-lbl">Países en LATAM</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT / VALUE PROP ══ */}
      <section class="section-about">
        <div class="wrap about-layout">
          <div class="about-left reveal">
            <div class="section-tag tag-green">Sobre nosotros</div>
            <h2 class="section-h2">
              Somos la empresa de soluciones IT<br />
              <span class="text-green">más comprometida con sus resultados</span>
            </h2>
            <p class="section-p">
              En Grupo Consiti impulsamos la innovación y entregamos soluciones de impacto que ayudan
              a las organizaciones a escalar y tener éxito. Nuestro compromiso con la excelencia y la
              tecnología de punta garantiza que su proyecto esté en las mejores manos.
            </p>
            <div class="about-checks">
              {[
                'Soluciones tecnológicas de vanguardia adaptadas a sus necesidades',
                'Un equipo de desarrolladores e ingenieros expertos en toda LATAM',
                'Con la confianza de empresas multinacionales en todo el mundo',
              ].map((item, i) => (
                <div class="ac-item" key={i}>
                  <span class="ac-check">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div class="about-right reveal">
            {/* Decorative image / card */}
            <div class="about-visual-card">
              <div class="avc-glow" aria-hidden="true"></div>
              <div class="avc-header">
                <img src="/static/logo-white.png" alt="Grupo Consiti" class="avc-logo" />
              </div>
              <div class="avc-grid">
                {[
                  { val: '+200', lbl: 'Proyectos' },
                  { val: '+120', lbl: 'Clientes' },
                  { val: '+12', lbl: 'Años' },
                  { val: '8', lbl: 'Países' },
                ].map((s, i) => (
                  <div class="avc-stat" key={i}>
                    <div class="avc-val">{s.val}</div>
                    <div class="avc-lbl">{s.lbl}</div>
                  </div>
                ))}
              </div>
              <div class="avc-services">
                {['Software', 'IA', 'Cloud', 'ERP', 'CRM', 'Data & BI'].map((t, i) => (
                  <span class="avc-pill" key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ SERVICIOS ══ */}
      <section class="section" id="servicios">
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="section-tag tag-green">Servicios</div>
            <h2 class="section-h2">Nuestros servicios dedicados<br />para <span class="text-green">cada cliente</span></h2>
          </div>
          <div class="services-grid">
            {[
              {
                icon: '💻',
                title: 'Desarrollo de Software',
                desc: 'Soluciones a medida que automatizan procesos críticos, integran sistemas legados y aceleran la operación del negocio con tecnología moderna.',
                color: '#00e5a0',
              },
              {
                icon: '🤖',
                title: 'Inteligencia Artificial',
                desc: 'Modelos de IA aplicados a procesos reales: procesamiento de documentos, atención al cliente, predicción de demanda y automatización inteligente.',
                color: '#6366f1',
              },
              {
                icon: '☁️',
                title: 'Cloud & Infraestructura',
                desc: 'Migración, arquitectura y gestión de entornos cloud con Google Cloud y Oracle, asegurando disponibilidad, seguridad y escalabilidad.',
                color: '#0ea5e9',
              },
              {
                icon: '📦',
                title: 'Implementación ERP/CRM',
                desc: 'Despliegue y personalización de Odoo y Salesforce adaptados a los procesos específicos de cada organización pública o privada.',
                color: '#f59e0b',
              },
              {
                icon: '🔗',
                title: 'Integración de Sistemas',
                desc: 'Conectamos plataformas heterogéneas mediante APIs y middleware, eliminando silos de información y duplicidad de datos entre sistemas.',
                color: '#ec4899',
              },
              {
                icon: '📊',
                title: 'Analítica & Business Intelligence',
                desc: 'Transformamos datos en decisiones: dashboards ejecutivos, KPIs en tiempo real y modelos predictivos para la toma de decisiones estratégicas.',
                color: '#00e5a0',
              },
            ].map((s, i) => (
              <div class="service-card reveal" key={i} style={`--accent:${s.color}`}>
                <div class="sc-icon-wrap">
                  <span class="sc-icon">{s.icon}</span>
                </div>
                <h3 class="sc-title">{s.title}</h3>
                <p class="sc-desc">{s.desc}</p>
                <div class="sc-arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ECOSISTEMA / ALIANZAS ══ */}
      <section class="section section-eco" id="ecosistema">
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="section-tag tag-white">Alianzas</div>
            <h2 class="section-h2">Representamos a las marcas<br />tecnológicas <span class="text-green">líderes globales</span></h2>
          </div>
          <div class="eco-list">
            {[
              {
                logo: 'G',
                color: '#4285f4',
                name: 'Google Cloud',
                count: '+50 clientes',
                desc: 'Infraestructura cloud, BigQuery, Vertex AI y Google Workspace. Partner Premier con certificaciones en todas las especialidades cloud.',
              },
              {
                logo: 'O',
                color: '#f80000',
                name: 'Oracle',
                count: '+30 clientes',
                desc: 'Oracle ERP Cloud, Oracle Database y OCI Infrastructure. Gold Partner con capacidades certificadas en implementación y soporte.',
              },
              {
                logo: '⊞',
                color: '#714B67',
                name: 'Odoo',
                count: '+60 clientes',
                desc: 'ERP modular para manufactura, retail, servicios y gobierno. Partner certificado con equipo especializado en implementación y customización.',
              },
              {
                logo: 'S',
                color: '#00a1e0',
                name: 'Salesforce',
                count: '+20 clientes',
                desc: 'CRM, Service Cloud, Marketing Cloud y automatización de ventas. Consulting Partner con proyectos en múltiples industrias y países.',
              },
            ].map((p, i) => (
              <div class="eco-card reveal" key={i}>
                <div class="eco-logo" style={`background:${p.color}22; color:${p.color}; border-color:${p.color}44`}>
                  {p.logo}
                </div>
                <div class="eco-info">
                  <div class="eco-row">
                    <span class="eco-name">{p.name}</span>
                    <span class="eco-count">{p.count}</span>
                  </div>
                  <p class="eco-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASOS DE ÉXITO ══ */}
      <section class="section" id="casos">
        <div class="star star-6">✦</div>
        <div class="star star-7">✦</div>
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="section-tag tag-blue">Casos de éxito</div>
            <h2 class="section-h2">Nuestros <span class="text-green">proyectos destacados</span></h2>
          </div>
          <div class="cases-grid">
            {[
              {
                sector: 'Sector Público',
                tag: 'ERP · Gobierno',
                title: 'Modernización de gestión tributaria municipal',
                desc: 'Implementamos un sistema ERP personalizado con Odoo para digitalizar el proceso de recaudo y gestión de impuestos de un municipio, eliminando procesos manuales y reduciendo tiempos de atención ciudadana de días a minutos.',
                results: [{ val: '90%', lbl: 'Reducción en tiempos de trámites' }, { val: '3×', lbl: 'Incremento en recaudo' }, { val: '0', lbl: 'Errores en liquidación' }],
                tech: ['Odoo', 'Python', 'PostgreSQL', 'Cloud'],
                accent: '#00e5a0',
              },
              {
                sector: 'Industria Manufacturera',
                tag: 'IA · Computer Vision',
                title: 'Plataforma de trazabilidad con visión artificial',
                desc: 'Desarrollamos una solución de visión artificial para control de calidad en línea de producción, integrando alertas en tiempo real y reportes analíticos para la gerencia operativa.',
                results: [{ val: '70%', lbl: 'Reducción de defectos' }, { val: '+40%', lbl: 'Productividad de línea' }, { val: '6ms', lbl: 'Detección de fallas' }],
                tech: ['Google Cloud', 'TensorFlow', 'Python', 'BigQuery'],
                accent: '#6366f1',
              },
              {
                sector: 'Sector Retail',
                tag: 'CRM · Automatización',
                title: 'CRM y automatización de ventas para retail',
                desc: 'Implementamos Salesforce con automatización de pipelines de ventas, integración con WhatsApp Business y dashboards de seguimiento para una cadena con 15 puntos de venta.',
                results: [{ val: '+35%', lbl: 'Aumento en conversión' }, { val: '2×', lbl: 'Velocidad del equipo comercial' }, { val: '100%', lbl: 'Visibilidad del pipeline' }],
                tech: ['Salesforce', 'WhatsApp API', 'Looker', 'REST APIs'],
                accent: '#0ea5e9',
              },
              {
                sector: 'Sector Financiero',
                tag: 'Cloud · Seguridad',
                title: 'Migración cloud y modernización de plataforma bancaria',
                desc: 'Lideramos la migración completa de infraestructura on-premise a Google Cloud para una entidad financiera, reduciendo costos operativos y aumentando la disponibilidad del sistema.',
                results: [{ val: '99.9%', lbl: 'Disponibilidad del sistema' }, { val: '-45%', lbl: 'Costos de infraestructura' }, { val: '10×', lbl: 'Velocidad de despliegue' }],
                tech: ['Google Cloud', 'Kubernetes', 'Terraform', 'Cloud Security'],
                accent: '#f59e0b',
              },
            ].map((caso, i) => (
              <div class="case-card reveal" key={i} style={`--accent:${caso.accent}`}>
                <div class="cc-top">
                  <div class="cc-sector">{caso.sector}</div>
                  <span class="cc-tag">{caso.tag}</span>
                </div>
                <h3 class="cc-title">{caso.title}</h3>
                <p class="cc-desc">{caso.desc}</p>
                <div class="cc-results">
                  {caso.results.map((r, j) => (
                    <div class="cc-result" key={j}>
                      <div class="cc-val">{r.val}</div>
                      <div class="cc-lbl">{r.lbl}</div>
                    </div>
                  ))}
                </div>
                <div class="cc-tech">
                  {caso.tech.map((t, j) => <span class="cc-pill" key={j}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ METODOLOGÍA ══ */}
      <section class="section section-method">
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="section-tag tag-green">Metodología</div>
            <h2 class="section-h2">Un proceso probado para<br /><span class="text-green">resultados sostenibles</span></h2>
          </div>
          <div class="method-grid">
            {[
              { num: '01', title: 'Diagnóstico', desc: 'Entendemos a fondo los procesos, sistemas existentes y objetivos del negocio antes de proponer cualquier solución.' },
              { num: '02', title: 'Diseño de solución', desc: 'Definimos la arquitectura tecnológica, el roadmap y los KPIs de éxito, alineados con la estrategia organizacional.' },
              { num: '03', title: 'Implementación ágil', desc: 'Desarrollamos en sprints cortos con entregas parciales que permiten validar y ajustar el rumbo en tiempo real.' },
              { num: '04', title: 'Capacitación', desc: 'Formamos a los equipos para garantizar que la tecnología sea usada correctamente y genere el impacto esperado.' },
              { num: '05', title: 'Soporte continuo', desc: 'Acompañamos a largo plazo con soporte técnico, evolución de las soluciones y optimización continua basada en datos.' },
            ].map((s, i) => (
              <div class="method-card reveal" key={i}>
                <div class="mc-num">{s.num}</div>
                <h3 class="mc-title">{s.title}</h3>
                <p class="mc-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIOS ══ */}
      <section class="section section-testimonials">
        <div class="star star-8">✦</div>
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="section-tag tag-white">Testimonios</div>
            <h2 class="section-h2">Lo que dicen <span class="text-green">nuestros clientes</span></h2>
          </div>
          <div class="testi-grid">
            {[
              {
                stars: 5,
                quote: 'Grupo Consiti transformó completamente nuestra operación de recaudo. Lo que antes tomaba días, ahora se hace en horas con cero errores. El equipo fue excepcional en todo el proceso de implementación.',
                name: 'Carlos Mendoza',
                role: 'Secretario de Hacienda',
                org: 'Municipio de Bucaramanga',
                avatar: 'CM',
                color: '#00e5a0',
              },
              {
                stars: 5,
                quote: 'La implementación de IA en nuestra línea de producción superó todas las expectativas. Redujimos defectos en un 70% y hoy tenemos visibilidad completa de la operación en tiempo real.',
                name: 'Laura Ríos',
                role: 'Directora de Operaciones',
                org: 'Industrias LATAM S.A.',
                avatar: 'LR',
                color: '#6366f1',
              },
              {
                stars: 5,
                quote: 'Con Salesforce implementado por Consiti, nuestro equipo de ventas duplicó su productividad. El acompañamiento post-implementación fue clave para una adopción del 100%.',
                name: 'Andrés Martínez',
                role: 'Gerente Comercial',
                org: 'Cadena Retail Nacional',
                avatar: 'AM',
                color: '#0ea5e9',
              },
            ].map((t, i) => (
              <div class="testi-card reveal" key={i}>
                <div class="tc-stars">{'★'.repeat(t.stars)}</div>
                <p class="tc-quote">"{t.quote}"</p>
                <div class="tc-author">
                  <div class="tc-avatar" style={`background:${t.color}33; color:${t.color}; border-color:${t.color}55`}>{t.avatar}</div>
                  <div>
                    <div class="tc-name">{t.name}</div>
                    <div class="tc-role">{t.role} · {t.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══ */}
      <section class="section section-faq" id="faq">
        <div class="star star-9">✦</div>
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="section-tag tag-white">FAQ</div>
            <h2 class="section-h2">Preguntas <span class="text-green">frecuentes</span></h2>
            <p class="section-p">En esta sección encontrará respuestas a las preguntas más frecuentes sobre nuestros servicios, experiencia y cómo podemos ayudar a su organización.</p>
          </div>
          <div class="faq-list">
            {[
              {
                q: '¿Qué servicios ofrece Grupo Consiti?',
                a: 'Ofrecemos desarrollo de software a medida, implementación de ERP/CRM (Odoo, Salesforce), inteligencia artificial y machine learning, migración y gestión cloud (Google Cloud, Oracle), integración de sistemas y analítica de datos. También brindamos consultoría en transformación digital y ciberseguridad.',
              },
              {
                q: '¿Cómo puede Grupo Consiti mejorar la eficiencia de mi organización?',
                a: 'A través de nuestra experiencia en optimización de procesos y desarrollo de aplicaciones personalizadas, ayudamos a automatizar flujos de trabajo, mejorar la experiencia del cliente, reducir costos operativos y garantizar transacciones más rápidas y seguras.',
              },
              {
                q: '¿Con qué tecnologías trabajan?',
                a: 'Trabajamos con tecnologías modernas como Google Cloud, Oracle OCI, Python, Node.js, React, .NET, Odoo, Salesforce, TensorFlow y más. Adaptamos nuestra stack tecnológica según las necesidades de cada proyecto para brindar la solución más efectiva.',
              },
              {
                q: '¿Trabajan con organizaciones del sector público?',
                a: 'Sí, tenemos amplia experiencia trabajando con entidades públicas. Hemos implementado sistemas de gestión tributaria, portales ciudadanos, plataformas de trámites digitales y más, adaptando nuestras soluciones a los requerimientos normativos y de transparencia del sector.',
              },
              {
                q: '¿En qué países tienen presencia?',
                a: 'Contamos con presencia activa en Colombia, México, Ecuador, Perú, Chile, Panamá, Costa Rica y otros países de LATAM. Nuestro equipo distribuido nos permite atender proyectos en toda la región con la misma calidad y dedicación.',
              },
              {
                q: '¿Cuál es el tiempo típico de una implementación?',
                a: 'Depende del alcance del proyecto. Implementaciones básicas de ERP pueden completarse en 2-4 meses. Proyectos complejos de transformación digital pueden tomar 6-18 meses. Siempre definimos plazos claros y entregamos en sprints para garantizar visibilidad y control del proyecto.',
              },
            ].map((item, i) => (
              <div class="faq-item reveal" key={i} id={`faq-${i}`}>
                <button class="faq-q" onclick={`toggleFaq(${i})`} aria-expanded="false">
                  <span>{item.q}</span>
                  <span class="faq-icon">+</span>
                </button>
                <div class="faq-a" id={`faq-a-${i}`}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACTO ══ */}
      <section class="section section-contact" id="contacto">
        <div class="blob blob-3" aria-hidden="true"></div>
        <div class="wrap">
          <div class="contact-layout">
            <div class="contact-left reveal">
              <div class="section-tag tag-green">Comencemos</div>
              <h2 class="section-h2">¿Listo para transformar<br /><span class="text-green">su organización?</span></h2>
              <p class="section-p">
                Cuéntenos su desafío. Nuestro equipo de expertos diseñará una hoja de ruta personalizada para su proceso de transformación digital.
              </p>
              <div class="contact-items">
                {[
                  { icon: '⚡', title: 'Respuesta rápida', desc: 'Respuesta en menos de 24 horas hábiles' },
                  { icon: '🔒', title: 'Sin costo inicial', desc: 'Primera consulta completamente gratuita' },
                  { icon: '🎯', title: 'A su medida', desc: 'Propuesta personalizada a su contexto' },
                  { icon: '🌎', title: 'Cobertura LATAM', desc: 'Atención en 8 países de la región' },
                ].map((item, i) => (
                  <div class="ci-row" key={i}>
                    <div class="ci-icon">{item.icon}</div>
                    <div>
                      <div class="ci-title">{item.title}</div>
                      <div class="ci-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="contact-right reveal">
              <form class="contact-form" id="contactForm">
                <h3 class="cf-title">Solicite una consulta gratuita</h3>
                <div class="form-row-2">
                  <div class="form-group">
                    <label class="form-label">Nombre completo</label>
                    <input type="text" class="form-input" placeholder="Ej: Juan García" name="nombre" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Empresa / Institución</label>
                    <input type="text" class="form-input" placeholder="Nombre de su organización" name="empresa" required />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label">Correo electrónico</label>
                  <input type="email" class="form-input" placeholder="correo@empresa.com" name="email" required />
                </div>
                <div class="form-group">
                  <label class="form-label">Teléfono / WhatsApp</label>
                  <input type="tel" class="form-input" placeholder="+57 300 000 0000" name="telefono" />
                </div>
                <div class="form-group">
                  <label class="form-label">Principal desafío tecnológico</label>
                  <select class="form-input form-select" name="desafio">
                    <option value="">Seleccione una opción</option>
                    <option>Automatización de procesos</option>
                    <option>Implementación ERP/CRM</option>
                    <option>Migración a la nube</option>
                    <option>Inteligencia Artificial / Data</option>
                    <option>Integración de sistemas</option>
                    <option>Transformación digital integral</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Mensaje (opcional)</label>
                  <textarea class="form-input form-textarea" placeholder="Cuéntenos más sobre su proyecto o necesidad..." name="mensaje" rows={3}></textarea>
                </div>
                <button type="submit" class="btn-submit-green">
                  Enviar solicitud →
                </button>
                <p class="form-note">Al enviar, acepta nuestra <a href="#privacidad" id="privacidad">política de privacidad</a>.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer class="footer">
        <div class="wrap">
          <div class="footer-top">
            <div class="footer-brand">
              <img src="/static/logo-white.png" alt="Grupo Consiti" class="footer-logo" />
              <p class="footer-tagline">
                Transformación digital con Software,<br />Inteligencia Artificial y Cloud<br />en toda Latinoamérica.
              </p>
              <div class="footer-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener" class="fsocial" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener" class="fsocial" aria-label="Twitter/X">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener" class="fsocial" aria-label="YouTube">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            <div class="footer-cols">
              <div class="footer-col">
                <div class="fcol-title">Servicios</div>
                <ul class="fcol-links">
                  <li><a href="#servicios">Desarrollo de Software</a></li>
                  <li><a href="#servicios">Inteligencia Artificial</a></li>
                  <li><a href="#servicios">Cloud & Infraestructura</a></li>
                  <li><a href="#servicios">Implementación ERP</a></li>
                  <li><a href="#servicios">Analítica & BI</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <div class="fcol-title">Empresa</div>
                <ul class="fcol-links">
                  <li><a href="#nosotros">Sobre nosotros</a></li>
                  <li><a href="#casos">Casos de éxito</a></li>
                  <li><a href="#ecosistema">Ecosistema</a></li>
                  <li><a href="#contacto">Trabaja con nosotros</a></li>
                  <li><a href="#contacto">Blog</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <div class="fcol-title">Contacto</div>
                <ul class="fcol-links">
                  <li><a href="mailto:info@consiti.co">info@consiti.co</a></li>
                  <li><a href="tel:+573000000000">+57 300 000 0000</a></li>
                  <li><a href="#contacto">Bogotá, Colombia</a></li>
                  <li><a href="#contacto">Solicitar demo</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© 2025 Grupo Consiti. Todos los derechos reservados.</span>
            <div class="footer-legal-links">
              <a href="#privacidad">Política de privacidad</a>
              <a href="#terminos">Términos de uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ══ SCRIPTS ══ */}
      <script dangerouslySetInnerHTML={{ __html: `
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
          navbar.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });

        // Mobile menu
        const burger = document.getElementById('navBurger');
        const navLinks = document.getElementById('navLinks');
        burger.addEventListener('click', () => {
          navLinks.classList.toggle('open');
          burger.classList.toggle('active');
        });
        document.querySelectorAll('.nav-links a, .nav-actions a').forEach(a => {
          a.addEventListener('click', () => { navLinks.classList.remove('open'); burger.classList.remove('active'); });
        });

        // Scroll reveal
        const reveals = document.querySelectorAll('.reveal');
        const revealObs = new IntersectionObserver(entries => {
          entries.forEach((e, i) => {
            if (e.isIntersecting) {
              setTimeout(() => e.target.classList.add('revealed'), (Array.from(e.target.parentNode.children).indexOf(e.target)) * 80);
              revealObs.unobserve(e.target);
            }
          });
        }, { threshold: 0.08 });
        reveals.forEach(el => revealObs.observe(el));

        // Counter animation
        function animateCounter(el) {
          const target = parseInt(el.dataset.target);
          const duration = 1800;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.floor(current);
            if (current >= target) clearInterval(timer);
          }, 16);
        }
        const counterObs = new IntersectionObserver(entries => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              animateCounter(e.target);
              counterObs.unobserve(e.target);
            }
          });
        }, { threshold: 0.5 });
        document.querySelectorAll('.hstat-num[data-target]').forEach(el => counterObs.observe(el));

        // FAQ accordion
        window.toggleFaq = function(i) {
          const btn = document.querySelector('#faq-' + i + ' .faq-q');
          const ans = document.getElementById('faq-a-' + i);
          const isOpen = btn.getAttribute('aria-expanded') === 'true';
          // close all
          document.querySelectorAll('.faq-q').forEach(b => {
            b.setAttribute('aria-expanded', 'false');
            b.querySelector('.faq-icon').textContent = '+';
          });
          document.querySelectorAll('.faq-a').forEach(a => a.classList.remove('open'));
          if (!isOpen) {
            btn.setAttribute('aria-expanded', 'true');
            btn.querySelector('.faq-icon').textContent = '−';
            ans.classList.add('open');
          }
        };

        // Form submit
        const form = document.getElementById('contactForm');
        if (form) {
          form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('.btn-submit-green');
            btn.textContent = '✓ Solicitud enviada con éxito';
            btn.style.background = 'linear-gradient(135deg, #059669, #047857)';
            btn.disabled = true;
          });
        }
      ` }} />
    </>
  )
})

export default app
