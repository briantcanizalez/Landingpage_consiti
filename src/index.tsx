import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
app.use(renderer)

// Favicon
app.get('/favicon.svg', (c) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#0b1e3d"/><path d="M9 10 L15 16 L9 22 M16 10 L22 16 L16 22" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`
  return c.body(svg, 200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' })
})
app.get('/favicon.ico', (c) => c.redirect('/favicon.svg', 301))

app.get('/', (c) => {
  return c.render(
    <>
      {/* ══ NAVBAR ══ */}
      <header class="navbar" id="navbar">
        <div class="nav-inner">
          <a href="/" class="nav-logo">
            <img src="/static/logo-dark.png" alt="Grupo Consiti" class="nav-logo-img" />
          </a>
          <nav class="nav-links" id="navLinks">
            <a href="#servicios">Servicios</a>
            <a href="#ecosistema">Ecosistema</a>
            <a href="#casos">Casos de éxito</a>
            <a href="#nosotros">Nosotros</a>
          </nav>
          <div class="nav-actions">
            <a href="#contacto" class="btn-ghost">Contacto</a>
            <a href="#contacto" class="btn-primary-sm">Habla con nosotros</a>
          </div>
          <button class="nav-burger" id="navBurger" aria-label="Menú">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* ══ HERO ══ */}
      <section class="hero">
        <div class="wrap">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            Socio estratégico en Latinoamérica · +12 años de experiencia
          </div>
          <h1 class="hero-h1">
            Transformación digital<br />
            que genera <span class="text-accent">resultados reales</span>
          </h1>
          <p class="hero-sub">
            Acompañamos a organizaciones públicas y privadas en su modernización tecnológica
            con Software, Inteligencia Artificial y Cloud — generando eficiencia operativa y
            valor tangible para el negocio.
          </p>
          <div class="hero-ctas">
            <a href="#contacto" class="btn-primary-lg">
              Habla con un experto
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a href="#casos" class="btn-outline-lg">Ver casos de éxito</a>
          </div>
          <div class="hero-partners">
            <span class="hp-label">Partners certificados</span>
            <div class="hp-logos">
              <div class="hp-logo">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Google Cloud
              </div>
              <div class="hp-sep"></div>
              <div class="hp-logo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#f80000"><ellipse cx="12" cy="12" rx="10" ry="10"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">O</text></svg>
                Oracle
              </div>
              <div class="hp-sep"></div>
              <div class="hp-logo">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#714B67"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>
                Odoo
              </div>
              <div class="hp-sep"></div>
              <div class="hp-logo">
                <svg width="18" height="18" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#00a1e0" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Salesforce
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div class="hero-visual">
          <div class="dashboard-card">
            <div class="dash-header">
              <div class="dash-dots">
                <span class="dot-red"></span>
                <span class="dot-yellow"></span>
                <span class="dot-green"></span>
              </div>
              <span class="dash-title">Panel de Control · Consiti Analytics</span>
              <span class="dash-live"><span class="live-dot"></span>En vivo</span>
            </div>
            <div class="dash-body">
              <div class="dash-kpis">
                <div class="dash-kpi">
                  <div class="kpi-val navy">90%</div>
                  <div class="kpi-lbl">Reducción tiempos</div>
                  <div class="kpi-change green">↑ 12%</div>
                </div>
                <div class="dash-kpi">
                  <div class="kpi-val blue">70%</div>
                  <div class="kpi-lbl">Menos errores</div>
                  <div class="kpi-change green">↑ 8%</div>
                </div>
                <div class="dash-kpi">
                  <div class="kpi-val teal">3×</div>
                  <div class="kpi-lbl">Velocidad operativa</div>
                  <div class="kpi-change green">↑ 2×</div>
                </div>
              </div>
              <div class="dash-chart-area">
                <div class="chart-label">Eficiencia operativa</div>
                <div class="bars">
                  {[55, 68, 72, 80, 88, 92, 90].map((h, i) => (
                    <div class="bar-wrap" key={i}>
                      <div class="bar" style={`height:${h}%;animation-delay:${i * 0.08}s`}></div>
                      <div class="bar-lbl">{['Ene','Feb','Mar','Abr','May','Jun','Jul'][i]}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div class="dash-alerts">
                <div class="alert-item ok">
                  <span class="alert-icon">✓</span>
                  Migración cloud completada
                </div>
                <div class="alert-item warn">
                  <span class="alert-icon">◉</span>
                  Proceso de facturación optimizado
                </div>
                <div class="alert-item ok">
                  <span class="alert-icon">✓</span>
                  IA integrada en atención al cliente
                </div>
              </div>
            </div>
          </div>

          {/* Floating metric card */}
          <div class="float-card float-left">
            <div class="float-icon">📈</div>
            <div>
              <div class="float-val">+200</div>
              <div class="float-lbl">Proyectos entregados</div>
            </div>
          </div>
          <div class="float-card float-right">
            <div class="float-icon">🌎</div>
            <div>
              <div class="float-val">8</div>
              <div class="float-lbl">Países en LATAM</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <section class="stats-bar">
        <div class="wrap stats-inner">
          {[
            { val: '+200', lbl: 'Proyectos entregados' },
            { val: '8', lbl: 'Países en LATAM' },
            { val: '+12', lbl: 'Años de experiencia' },
            { val: '97%', lbl: 'Satisfacción de clientes' },
          ].map((s, i) => (
            <div class="stat-item" key={i}>
              <div class="stat-val">{s.val}</div>
              <div class="stat-lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICIOS ══ */}
      <section class="section" id="servicios">
        <div class="wrap">
          <div class="sec-header">
            <div class="chip">Servicios</div>
            <h2 class="sec-h2">Todo lo que necesita para <span class="text-accent">transformar su organización</span></h2>
            <p class="sec-p">Desde la estrategia hasta la implementación, acompañamos cada etapa del camino hacia la modernización digital.</p>
          </div>
          <div class="services-grid">
            {[
              {
                icon: '💻',
                title: 'Desarrollo de Software',
                desc: 'Soluciones a medida que automatizan procesos críticos, integran sistemas legados y aceleran la operación del negocio.',
                tags: ['ERP', 'CRM', 'APIs', 'Automatización'],
              },
              {
                icon: '🤖',
                title: 'Inteligencia Artificial',
                desc: 'Modelos de IA aplicados a procesos reales: procesamiento de documentos, atención al cliente, predicción de demanda y más.',
                tags: ['Machine Learning', 'NLP', 'Visión Artificial', 'Chatbots'],
              },
              {
                icon: '☁️',
                title: 'Cloud & Infraestructura',
                desc: 'Migración, arquitectura y gestión de entornos cloud con Google Cloud y Oracle, asegurando disponibilidad y seguridad.',
                tags: ['Google Cloud', 'Oracle OCI', 'DevOps', 'Seguridad'],
              },
              {
                icon: '📦',
                title: 'Implementación ERP/CRM',
                desc: 'Despliegue y personalización de Odoo y Salesforce adaptados a los procesos específicos de cada organización.',
                tags: ['Odoo', 'Salesforce', 'Consultoría', 'Capacitación'],
              },
              {
                icon: '🔗',
                title: 'Integración de Sistemas',
                desc: 'Conectamos plataformas heterogéneas mediante APIs y middleware, eliminando silos de información y duplicidad de datos.',
                tags: ['APIs REST', 'Middleware', 'ETL', 'Data Sync'],
              },
              {
                icon: '📊',
                title: 'Analítica & Business Intelligence',
                desc: 'Transformamos datos en decisiones: dashboards en tiempo real, KPIs ejecutivos y modelos predictivos para el negocio.',
                tags: ['Looker', 'Power BI', 'Dashboards', 'Big Data'],
              },
            ].map((s, i) => (
              <div class="service-card reveal" key={i}>
                <div class="sc-icon">{s.icon}</div>
                <h3 class="sc-title">{s.title}</h3>
                <p class="sc-desc">{s.desc}</p>
                <div class="sc-tags">
                  {s.tags.map((t, j) => <span class="sc-tag" key={j}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ECOSISTEMA ══ */}
      <section class="section bg-subtle" id="ecosistema">
        <div class="wrap">
          <div class="sec-header">
            <div class="chip">Ecosistema tecnológico</div>
            <h2 class="sec-h2">Alianzas con los líderes <span class="text-accent">tecnológicos globales</span></h2>
            <p class="sec-p">Somos partners certificados de las plataformas más reconocidas del mercado, lo que garantiza implementaciones de calidad respaldadas por las mejores prácticas globales.</p>
          </div>
          <div class="eco-grid">
            {[
              { name: 'Google Cloud', cat: 'Partner Premier', color: '#4285f4', icon: 'G', desc: 'Infraestructura cloud, BigQuery, Vertex AI, Google Workspace.' },
              { name: 'Oracle', cat: 'Gold Partner', color: '#f80000', icon: 'O', desc: 'Oracle ERP Cloud, Oracle Database, OCI Infrastructure.' },
              { name: 'Odoo', cat: 'Certified Partner', color: '#714B67', icon: '⊞', desc: 'ERP modular para manufactura, retail, servicios y gobierno.' },
              { name: 'Salesforce', cat: 'Consulting Partner', color: '#00a1e0', icon: 'S', desc: 'CRM, Service Cloud, Marketing Cloud y automatización de ventas.' },
            ].map((p, i) => (
              <div class="eco-card reveal" key={i}>
                <div class="eco-logo-wrap">
                  <div class="eco-icon" style={`background:${p.color}15; color:${p.color}`}>{p.icon}</div>
                </div>
                <div class="eco-info">
                  <div class="eco-name">{p.name}</div>
                  <div class="eco-cat">{p.cat}</div>
                  <p class="eco-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CASOS DE ÉXITO ══ */}
      <section class="section" id="casos">
        <div class="wrap">
          <div class="sec-header">
            <div class="chip">Casos de éxito</div>
            <h2 class="sec-h2">Proyectos que generaron <span class="text-accent">impacto real</span></h2>
            <p class="sec-p">Organizaciones públicas y privadas que transformaron sus operaciones con nuestro acompañamiento.</p>
          </div>
          <div class="cases-grid">
            {[
              {
                sector: 'Sector Público',
                color: '#0b1e3d',
                title: 'Modernización de gestión tributaria',
                desc: 'Implementamos un sistema ERP personalizado con Odoo para digitalizar el proceso de recaudo y gestión de impuestos de un municipio, eliminando procesos manuales y reduciendo tiempos de atención.',
                results: [
                  { val: '90%', lbl: 'Reducción en tiempo de trámites' },
                  { val: '3×', lbl: 'Incremento en recaudo' },
                  { val: '0', lbl: 'Errores en liquidación' },
                ],
                tech: ['Odoo', 'Python', 'PostgreSQL'],
              },
              {
                sector: 'Industria Manufacturera',
                color: '#1a56db',
                title: 'Plataforma de trazabilidad con IA',
                desc: 'Desarrollamos una solución de visión artificial para control de calidad en línea de producción, integrando alertas en tiempo real y reportes analíticos para la gerencia.',
                results: [
                  { val: '70%', lbl: 'Reducción de defectos' },
                  { val: '+40%', lbl: 'Productividad de línea' },
                  { val: '6 ms', lbl: 'Detección de fallas' },
                ],
                tech: ['Google Cloud', 'TensorFlow', 'Python'],
              },
              {
                sector: 'Sector Retail',
                color: '#0ea5e9',
                title: 'CRM y automatización de ventas',
                desc: 'Implementamos Salesforce con automatización de pipelines de ventas, integración con WhatsApp Business y dashboards de seguimiento para una cadena de retail con 15 puntos de venta.',
                results: [
                  { val: '+35%', lbl: 'Aumento en conversión' },
                  { val: '2×', lbl: 'Velocidad del equipo comercial' },
                  { val: '100%', lbl: 'Visibilidad del pipeline' },
                ],
                tech: ['Salesforce', 'WhatsApp API', 'Looker'],
              },
            ].map((caso, i) => (
              <div class="case-card reveal" key={i}>
                <div class="case-sector" style={`color:${caso.color}`}>{caso.sector}</div>
                <h3 class="case-title">{caso.title}</h3>
                <p class="case-desc">{caso.desc}</p>
                <div class="case-results">
                  {caso.results.map((r, j) => (
                    <div class="case-result" key={j}>
                      <div class="cr-val" style={`color:${caso.color}`}>{r.val}</div>
                      <div class="cr-lbl">{r.lbl}</div>
                    </div>
                  ))}
                </div>
                <div class="case-tech">
                  {caso.tech.map((t, j) => <span class="tech-tag" key={j}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ METODOLOGÍA ══ */}
      <section class="section bg-subtle" id="metodologia">
        <div class="wrap">
          <div class="sec-header">
            <div class="chip">Metodología</div>
            <h2 class="sec-h2">Un proceso probado para <span class="text-accent">resultados sostenibles</span></h2>
            <p class="sec-p">No implementamos tecnología por implementarla. Seguimos un proceso estructurado que garantiza adopción y retorno de inversión.</p>
          </div>
          <div class="method-steps">
            {[
              { num: '01', title: 'Diagnóstico', desc: 'Entendemos a fondo los procesos, sistemas existentes, puntos de dolor y objetivos del negocio antes de proponer cualquier solución.' },
              { num: '02', title: 'Diseño de solución', desc: 'Definimos la arquitectura tecnológica, el roadmap de implementación y los KPIs de éxito, alineados con la estrategia organizacional.' },
              { num: '03', title: 'Implementación ágil', desc: 'Desarrollamos e implementamos en sprints cortos, con entregas parciales que permiten validar y ajustar el rumbo en tiempo real.' },
              { num: '04', title: 'Capacitación y adopción', desc: 'Formamos a los equipos para garantizar que la tecnología sea usada correctamente y genere el impacto esperado.' },
              { num: '05', title: 'Soporte continuo', desc: 'Acompañamos a largo plazo con soporte técnico, evolución de las soluciones y optimización continua basada en datos.' },
            ].map((step, i) => (
              <div class="method-step reveal" key={i}>
                <div class="step-num">{step.num}</div>
                <div class="step-content">
                  <h3 class="step-title">{step.title}</h3>
                  <p class="step-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ NOSOTROS ══ */}
      <section class="section" id="nosotros">
        <div class="wrap">
          <div class="about-layout">
            <div class="about-text reveal">
              <div class="chip">Sobre nosotros</div>
              <h2 class="sec-h2">Más de una década <span class="text-accent">transformando organizaciones</span> en Latinoamérica</h2>
              <p class="sec-p" style="margin-bottom:24px">
                Grupo Consiti nació con la convicción de que la tecnología debe ser un habilitador real del negocio, no un fin en sí misma. Desde nuestra fundación, hemos acompañado a más de 200 organizaciones en su camino hacia la modernización digital.
              </p>
              <p class="sec-p" style="margin-bottom:32px">
                Nuestro equipo de consultores, desarrolladores y especialistas en datos trabaja de la mano con cada cliente para entender su contexto único y diseñar soluciones que generan impacto medible y sostenible.
              </p>
              <div class="about-values">
                {[
                  { icon: '🎯', title: 'Orientación a resultados', desc: 'Medimos el éxito en función del impacto real en el negocio, no en la cantidad de funcionalidades entregadas.' },
                  { icon: '🤝', title: 'Alianza estratégica', desc: 'Nos convertimos en un socio de largo plazo, no en un proveedor transaccional.' },
                  { icon: '🔬', title: 'Innovación aplicada', desc: 'Adoptamos tecnologías emergentes con criterio, aplicándolas donde generan valor real.' },
                ].map((v, i) => (
                  <div class="about-value" key={i}>
                    <span class="av-icon">{v.icon}</span>
                    <div>
                      <div class="av-title">{v.title}</div>
                      <div class="av-desc">{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div class="about-visual reveal">
              <div class="about-card-main">
                <div class="acm-header">
                  <img src="/static/icon-dark.png" alt="Grupo Consiti" class="acm-logo" />
                  <div>
                    <div class="acm-name">Grupo Consiti</div>
                    <div class="acm-sub">Transformación Digital · LATAM</div>
                  </div>
                </div>
                <div class="acm-stats">
                  {[
                    { val: '+200', lbl: 'Proyectos' },
                    { val: '8', lbl: 'Países' },
                    { val: '+12', lbl: 'Años' },
                    { val: '97%', lbl: 'Satisfacción' },
                  ].map((s, i) => (
                    <div class="acm-stat" key={i}>
                      <div class="acm-val">{s.val}</div>
                      <div class="acm-lbl">{s.lbl}</div>
                    </div>
                  ))}
                </div>
                <div class="acm-tags">
                  {['Software', 'IA', 'Cloud', 'ERP', 'CRM', 'Data Analytics'].map((t, i) => (
                    <span class="acm-tag" key={i}>{t}</span>
                  ))}
                </div>
              </div>
              <div class="about-card-mini">
                <div class="acmi-icon">🌎</div>
                <div class="acmi-text">Presencia en<br/><strong>Colombia, México, Ecuador,<br/>Perú, Chile y más</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMNIOS ══ */}
      <section class="section bg-subtle">
        <div class="wrap">
          <div class="sec-header">
            <div class="chip">Clientes</div>
            <h2 class="sec-h2">Lo que dicen <span class="text-accent">nuestros clientes</span></h2>
          </div>
          <div class="testimonials-grid">
            {[
              {
                quote: 'Grupo Consiti transformó completamente nuestra operación de recaudo. Lo que antes nos tomaba días, ahora se hace en horas con cero errores. El equipo fue excepcional en todo el proceso.',
                name: 'Carlos Mendoza',
                role: 'Secretario de Hacienda',
                org: 'Municipio de Bucaramanga',
                avatar: 'CM',
                color: '#0b1e3d',
              },
              {
                quote: 'La implementación de IA en nuestra línea de producción superó todas las expectativas. Redujimos defectos en un 70% y hoy tenemos visibilidad completa de la operación en tiempo real.',
                name: 'Laura Ríos',
                role: 'Directora de Operaciones',
                org: 'Industrias LATAM S.A.',
                avatar: 'LR',
                color: '#1a56db',
              },
              {
                quote: 'Con Salesforce implementado por Consiti, nuestro equipo de ventas duplicó su productividad. El acompañamiento post-implementación hizo la diferencia para lograr una adopción del 100%.',
                name: 'Andrés Martínez',
                role: 'Gerente Comercial',
                org: 'Cadena Retail Nacional',
                avatar: 'AM',
                color: '#0ea5e9',
              },
            ].map((t, i) => (
              <div class="testimonial-card reveal" key={i}>
                <div class="t-stars">★★★★★</div>
                <p class="t-quote">"{t.quote}"</p>
                <div class="t-author">
                  <div class="t-avatar" style={`background:${t.color}`}>{t.avatar}</div>
                  <div>
                    <div class="t-name">{t.name}</div>
                    <div class="t-role">{t.role} · {t.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACTO / CTA ══ */}
      <section class="section cta-section" id="contacto">
        <div class="wrap">
          <div class="cta-layout">
            <div class="cta-text reveal">
              <div class="chip chip-white">Comencemos</div>
              <h2 class="sec-h2 white">¿Listo para transformar su organización?</h2>
              <p class="sec-p light">
                Cuéntenos su desafío. Nuestro equipo de expertos le diseñará una hoja de ruta personalizada para su proceso de transformación digital.
              </p>
              <div class="cta-items">
                {[
                  { icon: '⚡', text: 'Respuesta en menos de 24 horas' },
                  { icon: '🔒', text: 'Consulta inicial sin costo' },
                  { icon: '🎯', text: 'Propuesta personalizada a su contexto' },
                ].map((item, i) => (
                  <div class="cta-item" key={i}>
                    <span class="ci-icon">{item.icon}</span>
                    <span class="ci-text">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div class="cta-form-wrap reveal">
              <form class="contact-form" id="contactForm">
                <h3 class="form-title">Solicite una consulta gratuita</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label class="form-label">Nombre completo</label>
                    <input type="text" class="form-input" placeholder="Ej: Juan García" name="nombre" required />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Empresa</label>
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
                  <label class="form-label">¿Cuál es su principal desafío?</label>
                  <select class="form-input form-select" name="desafio">
                    <option value="">Seleccione una opción</option>
                    <option>Automatización de procesos</option>
                    <option>Implementación ERP/CRM</option>
                    <option>Migración a la nube</option>
                    <option>Inteligencia Artificial / Data</option>
                    <option>Integración de sistemas</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="form-label">Mensaje (opcional)</label>
                  <textarea class="form-input form-textarea" placeholder="Cuéntenos más sobre su proyecto o necesidad..." name="mensaje" rows={3}></textarea>
                </div>
                <button type="submit" class="btn-form-submit">
                  Enviar solicitud
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.75 9h10.5M9 3.75L14.25 9 9 14.25" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </button>
                <p class="form-disclaimer">Al enviar este formulario, acepta nuestra <a href="#privacidad">política de privacidad</a>.</p>
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
              <img src="/static/logo-dark.png" alt="Grupo Consiti" class="footer-logo" />
              <p class="footer-tagline">
                Transformación digital con Software,<br />Inteligencia Artificial y Cloud en Latinoamérica.
              </p>
              <div class="footer-social">
                <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-link" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener" class="social-link" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener" class="social-link" aria-label="YouTube">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
            <div class="footer-cols">
              <div class="footer-col">
                <div class="footer-col-title">Servicios</div>
                <ul class="footer-links">
                  <li><a href="#servicios">Desarrollo de Software</a></li>
                  <li><a href="#servicios">Inteligencia Artificial</a></li>
                  <li><a href="#servicios">Cloud & Infraestructura</a></li>
                  <li><a href="#servicios">Implementación ERP</a></li>
                  <li><a href="#servicios">Analítica & BI</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <div class="footer-col-title">Empresa</div>
                <ul class="footer-links">
                  <li><a href="#nosotros">Sobre nosotros</a></li>
                  <li><a href="#casos">Casos de éxito</a></li>
                  <li><a href="#metodologia">Metodología</a></li>
                  <li><a href="#contacto">Trabaja con nosotros</a></li>
                  <li><a href="#contacto">Blog</a></li>
                </ul>
              </div>
              <div class="footer-col">
                <div class="footer-col-title">Contacto</div>
                <ul class="footer-links">
                  <li><a href="mailto:info@consiti.co">info@consiti.co</a></li>
                  <li><a href="tel:+573000000000">+57 300 000 0000</a></li>
                  <li><a href="#contacto">Bogotá, Colombia</a></li>
                  <li><a href="#contacto">Solicitar demo</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-legal">
              <span>© 2025 Grupo Consiti. Todos los derechos reservados.</span>
              <a href="#privacidad" id="privacidad">Política de privacidad</a>
              <a href="#terminos">Términos de uso</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ══ SCRIPTS ══ */}
      <script dangerouslySetInnerHTML={{ __html: `
        // Navbar scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
          navbar.classList.toggle('scrolled', window.scrollY > 40);
        });

        // Reveal on scroll
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver(entries => {
          entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('revealed'); observer.unobserve(e.target); } });
        }, { threshold: 0.1 });
        reveals.forEach(el => observer.observe(el));

        // Mobile menu
        const burger = document.getElementById('navBurger');
        const navLinks = document.getElementById('navLinks');
        burger.addEventListener('click', () => {
          navLinks.classList.toggle('open');
          burger.classList.toggle('active');
        });
        navLinks.querySelectorAll('a').forEach(a => {
          a.addEventListener('click', () => { navLinks.classList.remove('open'); burger.classList.remove('active'); });
        });

        // Bar animations
        document.querySelectorAll('.bar').forEach((bar, i) => {
          setTimeout(() => { bar.style.height = bar.style.height || '70%'; }, 400 + i * 80);
        });

        // Form submit
        const form = document.getElementById('contactForm');
        if (form) {
          form.addEventListener('submit', e => {
            e.preventDefault();
            const btn = form.querySelector('.btn-form-submit');
            btn.textContent = '✓ Solicitud enviada';
            btn.style.background = '#059669';
            btn.disabled = true;
          });
        }
      ` }} />
    </>
  )
})

export default app
