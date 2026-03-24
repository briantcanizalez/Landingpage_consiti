import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
app.use(renderer)

// Serve favicon
app.get('/favicon.svg', (c) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="url(#g)"/><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#1565c0"/><stop offset="100%" stop-color="#00b4d8"/></linearGradient></defs><text x="9" y="23" font-family="Arial" font-weight="900" font-size="20" font-style="italic" fill="white">C</text></svg>`
  return c.body(svg, 200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' })
})

app.get('/favicon.ico', (c) => c.redirect('/favicon.svg', 301))

app.get('/', (c) => {
  return c.render(
    <>
      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <nav class="navbar" id="navbar">
        <div class="container nav-inner">
          <a href="/" class="logo">
            <div class="logo-mark">
              <span class="lm-c">C</span>
            </div>
            <div class="logo-words">
              <span class="lw-grupo">Grupo</span>
              <span class="lw-consiti">Consiti</span>
            </div>
          </a>
          <ul class="nav-links" id="navLinks">
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#ecosistema">Ecosistema</a></li>
            <li><a href="#casos">Casos de Éxito</a></li>
            <li><a href="#metodologia">Metodología</a></li>
            <li><a href="#contacto" class="btn btn-cta-nav">Contáctanos</a></li>
          </ul>
          <button class="nav-burger" id="navBurger" aria-label="Menú">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section class="hero" id="hero">
        <div class="hero-mesh"></div>
        <div class="hero-glow glow-1"></div>
        <div class="hero-glow glow-2"></div>
        <div class="container hero-body">
          <div class="hero-text">
            <div class="hero-chip">
              <i class="fas fa-circle chip-dot"></i>
              Socio estratégico en Latinoamérica
            </div>
            <h1 class="hero-title">
              Transformación digital con
              <span class="hero-highlight">
                <span class="hl-word">Software</span>
                <span class="hl-sep">,</span>
                <span class="hl-word cyan">IA</span>
                <span class="hl-sep"> y </span>
                <span class="hl-word blue">Cloud</span>
              </span>
            </h1>
            <p class="hero-desc">
              Acompañamos a organizaciones públicas y privadas en su modernización tecnológica, generando eficiencia operativa y valor de negocio — <strong>sin disrupciones</strong>.
            </p>
            <div class="hero-btns">
              <a href="#contacto" class="btn btn-primary">
                <i class="fas fa-rocket"></i> Habla con un experto
              </a>
              <a href="#casos" class="btn btn-outline-hero">
                <i class="fas fa-play-circle"></i> Ver casos de éxito
              </a>
            </div>
            <div class="hero-partners">
              <span class="hp-label">Partners certificados</span>
              <div class="hp-badges">
                <div class="hp-badge gcp"><i class="fab fa-google"></i> Google Cloud</div>
                <div class="hp-badge oracle"><i class="fas fa-database"></i> Oracle</div>
                <div class="hp-badge odoo"><i class="fas fa-cubes"></i> Odoo</div>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hv-card hv-main">
              <div class="hvc-header">
                <div class="hvc-dots"><span></span><span></span><span></span></div>
                <span class="hvc-title">Dashboard de Transformación</span>
                <span class="hvc-live"><i class="fas fa-circle"></i> En vivo</span>
              </div>
              <div class="hvc-body">
                <div class="hvc-kpis">
                  <div class="hvc-kpi">
                    <span class="kpi-n blue">90%</span>
                    <span class="kpi-l">Reducción de tiempos</span>
                  </div>
                  <div class="hvc-kpi">
                    <span class="kpi-n cyan">70%</span>
                    <span class="kpi-l">Menos errores humanos</span>
                  </div>
                  <div class="hvc-kpi">
                    <span class="kpi-n green">3x</span>
                    <span class="kpi-l">Velocidad operativa</span>
                  </div>
                </div>
                <div class="hvc-chart">
                  <div class="hvc-bar-wrap">
                    <div class="hvc-bar" style="height:40%"><span>Q1</span></div>
                    <div class="hvc-bar" style="height:55%"><span>Q2</span></div>
                    <div class="hvc-bar" style="height:68%"><span>Q3</span></div>
                    <div class="hvc-bar" style="height:82%"><span>Q4</span></div>
                    <div class="hvc-bar active" style="height:95%"><span>Q5</span></div>
                  </div>
                  <span class="hvc-chart-label">Proyectos completados por trimestre</span>
                </div>
                <div class="hvc-tags">
                  <span class="tag ai"><i class="fas fa-brain"></i> Gemini 2.5</span>
                  <span class="tag cloud"><i class="fab fa-google"></i> Vertex AI</span>
                  <span class="tag erp"><i class="fas fa-cubes"></i> Odoo ERP</span>
                  <span class="tag oracle"><i class="fas fa-database"></i> Oracle</span>
                </div>
              </div>
            </div>
            <div class="hv-float float-1">
              <i class="fas fa-shield-alt"></i>
              <span>Seguridad Enterprise</span>
            </div>
            <div class="hv-float float-2">
              <i class="fas fa-bolt"></i>
              <span>Integración API</span>
            </div>
          </div>
        </div>
        <div class="hero-wave">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#f0f4ff"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════════ */}
      <section class="stats-bar">
        <div class="container stats-grid">
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-calendar-check"></i></div>
            <div class="stat-info">
              <span class="stat-num">+12</span>
              <span class="stat-lbl">Años de experiencia en LATAM</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-check-double"></i></div>
            <div class="stat-info">
              <span class="stat-num">+150</span>
              <span class="stat-lbl">Proyectos entregados</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-building"></i></div>
            <div class="stat-info">
              <span class="stat-num">+300</span>
              <span class="stat-lbl">Clientes activos</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-users"></i></div>
            <div class="stat-info">
              <span class="stat-num">+500</span>
              <span class="stat-lbl">Empleos generados</span>
            </div>
          </div>
          <div class="stat-sep"></div>
          <div class="stat-item">
            <div class="stat-icon"><i class="fas fa-brain"></i></div>
            <div class="stat-info">
              <span class="stat-num">+10</span>
              <span class="stat-lbl">Iniciativas de IA exitosas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SOBRE NOSOTROS
      ══════════════════════════════════════════ */}
      <section class="about" id="sobre">
        <div class="container about-inner">
          <div class="about-text">
            <div class="section-tag">¿Quiénes somos?</div>
            <h2 class="section-title">Modernización tecnológica <br /><span class="gradient-text">sin disrupciones</span></h2>
            <p class="section-desc">Somos un socio estratégico que combina experiencia en ERP, nube e inteligencia artificial para llevar a las organizaciones al siguiente nivel — respetando sus sistemas actuales y garantizando continuidad operativa.</p>
            <div class="about-props">
              <div class="ap-item">
                <div class="ap-icon"><i class="fas fa-bridge"></i></div>
                <div>
                  <strong>Puente Oracle–Cloud</strong>
                  <p>Migramos y conectamos sistemas legados con la nube de forma gradual y segura.</p>
                </div>
              </div>
              <div class="ap-item">
                <div class="ap-icon"><i class="fas fa-robot"></i></div>
                <div>
                  <strong>IA Transaccional Real</strong>
                  <p>Agentes inteligentes que razonan, deciden e integran ERP/CRM — no simples chatbots.</p>
                </div>
              </div>
              <div class="ap-item">
                <div class="ap-icon"><i class="fas fa-layer-group"></i></div>
                <div>
                  <strong>ERP a la medida</strong>
                  <p>Implementamos Odoo Enterprise con +80 módulos adaptados a cada industria.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about-visual">
            <div class="av-ring ring-outer"></div>
            <div class="av-ring ring-mid"></div>
            <div class="av-core">
              <i class="fas fa-microchip"></i>
              <span>Consiti<br/>Core AI</span>
            </div>
            <div class="av-orbit orb-1"><i class="fab fa-google"></i></div>
            <div class="av-orbit orb-2"><i class="fas fa-database"></i></div>
            <div class="av-orbit orb-3"><i class="fas fa-cubes"></i></div>
            <div class="av-orbit orb-4"><i class="fas fa-cloud"></i></div>
            <div class="av-orbit orb-5"><i class="fas fa-cogs"></i></div>
            <div class="av-orbit orb-6"><i class="fas fa-file-invoice"></i></div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICIOS
      ══════════════════════════════════════════ */}
      <section class="servicios" id="servicios">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Servicios</div>
            <h2 class="section-title">Soluciones tecnológicas <span class="gradient-text">a la medida</span></h2>
            <p class="section-sub">Cubrimos el ciclo completo de la transformación digital, desde la consultoría hasta la operación continua.</p>
          </div>
          <div class="services-grid">

            <div class="svc-card">
              <div class="svc-icon blue"><i class="fas fa-brain"></i></div>
              <div class="svc-badge new">Destacado</div>
              <h3>Consiti Agent Core</h3>
              <p>Desarrollo de agentes inteligentes transaccionales con capacidad de razonamiento e integración nativa a ERP y CRM. Potenciado por Gemini 2.5 PRO y Vertex AI.</p>
              <ul class="svc-list">
                <li><i class="fas fa-check"></i> Automatización de pedidos</li>
                <li><i class="fas fa-check"></i> Gestión de inventarios</li>
                <li><i class="fas fa-check"></i> Conciliación automática</li>
              </ul>
              <a href="#contacto" class="svc-link">Conocer más <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="svc-card">
              <div class="svc-icon cyan"><i class="fab fa-google"></i></div>
              <h3>Google Cloud Platform</h3>
              <p>Administración, migración y arquitectura en GCP. Especialistas certificados en Vertex AI, Document AI, Gemini y Agent Builder para soluciones empresariales.</p>
              <ul class="svc-list">
                <li><i class="fas fa-check"></i> Vertex AI & Document AI</li>
                <li><i class="fas fa-check"></i> Agent Builder</li>
                <li><i class="fas fa-check"></i> Migración y CloudOps</li>
              </ul>
              <a href="#contacto" class="svc-link">Conocer más <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="svc-card">
              <div class="svc-icon orange"><i class="fas fa-database"></i></div>
              <h3>Oracle E-Business Suite</h3>
              <p>Soporte y desarrollo especializado en Oracle EBS R11/R12, Forms & Reports, PL-SQL y BI-Publisher. El puente entre tu legado y la modernización.</p>
              <ul class="svc-list">
                <li><i class="fas fa-check"></i> Oracle R11 / R12</li>
                <li><i class="fas fa-check"></i> PL-SQL & BI-Publisher</li>
                <li><i class="fas fa-check"></i> Migraciones a Cloud</li>
              </ul>
              <a href="#contacto" class="svc-link">Conocer más <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="svc-card">
              <div class="svc-icon purple"><i class="fas fa-cubes"></i></div>
              <h3>Odoo ERP Enterprise</h3>
              <p>Implementación de Odoo Enterprise con más de 80 módulos disponibles. Solución integral para finanzas, RRHH, ventas, inventario y manufactura.</p>
              <ul class="svc-list">
                <li><i class="fas fa-check"></i> +80 módulos disponibles</li>
                <li><i class="fas fa-check"></i> Personalización total</li>
                <li><i class="fas fa-check"></i> Soporte continuo</li>
              </ul>
              <a href="#contacto" class="svc-link">Conocer más <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="svc-card">
              <div class="svc-icon teal"><i class="fas fa-code"></i></div>
              <h3>Desarrollo Full Stack</h3>
              <p>Equipo completo de ingeniería para proyectos a medida: frontend moderno, backend robusto e integración de sistemas mediante APIs REST y GraphQL.</p>
              <ul class="svc-list">
                <li><i class="fas fa-check"></i> Java, Python, React, .NET</li>
                <li><i class="fas fa-check"></i> Integración de APIs</li>
                <li><i class="fas fa-check"></i> Arquitectura cloud-native</li>
              </ul>
              <a href="#contacto" class="svc-link">Conocer más <i class="fas fa-arrow-right"></i></a>
            </div>

            <div class="svc-card">
              <div class="svc-icon green"><i class="fas fa-file-invoice-dollar"></i></div>
              <h3>Facturación Electrónica</h3>
              <p>Plataforma cloud integrada con el Ministerio de Hacienda. Solución lista para PYMEs y grandes empresas, escalable desde 200 hasta +3,000 clientes.</p>
              <ul class="svc-list">
                <li><i class="fas fa-check"></i> Integración con Hacienda</li>
                <li><i class="fas fa-check"></i> Escalable para PYMEs</li>
                <li><i class="fas fa-check"></i> Operación 24/7</li>
              </ul>
              <a href="#contacto" class="svc-link">Conocer más <i class="fas fa-arrow-right"></i></a>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          ECOSISTEMA / PARTNERS
      ══════════════════════════════════════════ */}
      <section class="ecosistema" id="ecosistema">
        <div class="container">
          <div class="section-header light">
            <div class="section-tag light">Ecosistema tecnológico</div>
            <h2 class="section-title light">Partners de primer nivel</h2>
            <p class="section-sub light">Trabajamos con las plataformas líderes del mercado, con certificaciones que garantizan la máxima calidad en cada proyecto.</p>
          </div>
          <div class="eco-cards">

            <div class="eco-card">
              <div class="eco-logo gcp-logo">
                <i class="fab fa-google"></i>
                <span>Google Cloud</span>
              </div>
              <div class="eco-badge">Partner Specialist</div>
              <h3>Google Cloud Platform</h3>
              <p>Especialistas certificados en la plataforma de Google. Implementamos soluciones de IA, analítica avanzada y migración a la nube con las herramientas más innovadoras del mercado.</p>
              <div class="eco-chips">
                <span>Vertex AI</span>
                <span>Document AI</span>
                <span>Gemini</span>
                <span>Agent Builder</span>
                <span>BigQuery</span>
              </div>
            </div>

            <div class="eco-card featured">
              <div class="eco-logo oracle-logo">
                <i class="fas fa-database"></i>
                <span>Oracle</span>
              </div>
              <div class="eco-badge gold">Especialistas</div>
              <h3>Oracle E-Business Suite</h3>
              <p>Más de 12 años de experiencia en implementación, soporte y desarrollo sobre Oracle EBS. Somos el puente entre los sistemas legados Oracle y las soluciones modernas en la nube.</p>
              <div class="eco-chips">
                <span>EBS R11/R12</span>
                <span>Forms & Reports</span>
                <span>PL-SQL</span>
                <span>BI-Publisher</span>
                <span>Oracle Cloud</span>
              </div>
            </div>

            <div class="eco-card">
              <div class="eco-logo odoo-logo">
                <i class="fas fa-cubes"></i>
                <span>Odoo</span>
              </div>
              <div class="eco-badge purple">Official Partner</div>
              <h3>Odoo Enterprise ERP</h3>
              <p>Partner oficial de Odoo con capacidad de implementar más de 80 módulos. Cubrimos finanzas, RRHH, ventas, CRM, inventario, manufactura y mucho más.</p>
              <div class="eco-chips">
                <span>+80 módulos</span>
                <span>Finanzas</span>
                <span>RRHH</span>
                <span>CRM</span>
                <span>Manufactura</span>
              </div>
            </div>

          </div>
          <div class="eco-also">
            <p class="ea-label">También trabajamos con</p>
            <div class="ea-logos">
              <div class="ea-logo"><i class="fab fa-aws"></i> AWS</div>
              <div class="ea-logo"><i class="fab fa-microsoft"></i> Azure</div>
              <div class="ea-logo"><i class="fas fa-server"></i> On-Premise</div>
              <div class="ea-logo"><i class="fab fa-python"></i> Python</div>
              <div class="ea-logo"><i class="fab fa-java"></i> Java</div>
              <div class="ea-logo"><i class="fab fa-react"></i> React</div>
              <div class="ea-logo"><i class="fas fa-network-wired"></i> APIs REST</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CASOS DE ÉXITO
      ══════════════════════════════════════════ */}
      <section class="casos" id="casos">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Casos de éxito</div>
            <h2 class="section-title">Resultados reales, <span class="gradient-text">impacto medible</span></h2>
            <p class="section-sub">Proyectos que demuestran cómo la tecnología bien aplicada transforma operaciones completas.</p>
          </div>
          <div class="casos-list">

            <div class="caso-card">
              <div class="caso-num">01</div>
              <div class="caso-icon"><i class="fas fa-file-invoice"></i></div>
              <div class="caso-content">
                <div class="caso-tag">Inteligencia Artificial · Finanzas</div>
                <h3>Conciliación automática de facturas con IA</h3>
                <p>Cliente con +2,000 proveedores necesitaba validar facturas manualmente. Implementamos Document AI + Gemini para automatizar la extracción y conciliación de datos, conectado directamente al ERP.</p>
                <div class="caso-results">
                  <div class="cr-item">
                    <span class="cr-num">90%</span>
                    <span class="cr-lbl">Reducción en tiempo de validación</span>
                  </div>
                  <div class="cr-item">
                    <span class="cr-num">70%</span>
                    <span class="cr-lbl">Menos errores humanos</span>
                  </div>
                  <div class="cr-item">
                    <span class="cr-num">2,000+</span>
                    <span class="cr-lbl">Proveedores procesados</span>
                  </div>
                </div>
                <div class="caso-tech">
                  <span><i class="fab fa-google"></i> Document AI</span>
                  <span><i class="fas fa-brain"></i> Gemini</span>
                  <span><i class="fas fa-link"></i> ERP Integration</span>
                </div>
              </div>
            </div>

            <div class="caso-card reverse">
              <div class="caso-num">02</div>
              <div class="caso-icon"><i class="fas fa-university"></i></div>
              <div class="caso-content">
                <div class="caso-tag">Machine Learning · Banca</div>
                <h3>Automatización bancaria con Machine Learning</h3>
                <p>Para un consorcio de 43 empresas, implementamos un sistema de extracción automática de datos de pagos bancarios y conciliación con Gemini 2.5 PRO, eliminando el trabajo manual diario del equipo financiero.</p>
                <div class="caso-results">
                  <div class="cr-item">
                    <span class="cr-num">43</span>
                    <span class="cr-lbl">Empresas integradas</span>
                  </div>
                  <div class="cr-item">
                    <span class="cr-num">100%</span>
                    <span class="cr-lbl">Automatización del proceso</span>
                  </div>
                  <div class="cr-item">
                    <span class="cr-num">0h</span>
                    <span class="cr-lbl">Trabajo manual diario</span>
                  </div>
                </div>
                <div class="caso-tech">
                  <span><i class="fas fa-brain"></i> Gemini 2.5 PRO</span>
                  <span><i class="fab fa-google"></i> Vertex AI</span>
                  <span><i class="fas fa-university"></i> Banking APIs</span>
                </div>
              </div>
            </div>

            <div class="caso-card">
              <div class="caso-num">03</div>
              <div class="caso-icon"><i class="fas fa-receipt"></i></div>
              <div class="caso-content">
                <div class="caso-tag">Cloud · Facturación Electrónica</div>
                <h3>Plataforma de facturación electrónica en cloud</h3>
                <p>Desarrollamos e implementamos una plataforma cloud integrada con el Ministerio de Hacienda de El Salvador, iniciando con +200 clientes y con arquitectura lista para escalar a más de 3,000 PYMEs.</p>
                <div class="caso-results">
                  <div class="cr-item">
                    <span class="cr-num">200+</span>
                    <span class="cr-lbl">Clientes activos</span>
                  </div>
                  <div class="cr-item">
                    <span class="cr-num">3,000+</span>
                    <span class="cr-lbl">Capacidad de escalamiento</span>
                  </div>
                  <div class="cr-item">
                    <span class="cr-num">99.9%</span>
                    <span class="cr-lbl">Uptime garantizado</span>
                  </div>
                </div>
                <div class="caso-tech">
                  <span><i class="fab fa-google"></i> Google Cloud</span>
                  <span><i class="fas fa-file-invoice-dollar"></i> Hacienda API</span>
                  <span><i class="fas fa-expand-arrows-alt"></i> Auto-scaling</span>
                </div>
              </div>
            </div>

            <div class="caso-card reverse">
              <div class="caso-num">04</div>
              <div class="caso-icon"><i class="fas fa-robot"></i></div>
              <div class="caso-content">
                <div class="caso-tag">Agentes IA · Retail &amp; Restaurantes</div>
                <h3>Agentes agénticos para operaciones de negocio</h3>
                <p>Desplegamos el framework Consiti Agent Core en restaurantes y retail: automatización completa del flujo de pedidos, gestión de inventario en tiempo real e integración bidireccional con sistemas ERP/CRM sin intervención humana.</p>
                <div class="caso-results">
                  <div class="cr-item">
                    <span class="cr-num">24/7</span>
                    <span class="cr-lbl">Operación autónoma</span>
                  </div>
                  <div class="cr-item">
                    <span class="cr-num">0</span>
                    <span class="cr-lbl">Intervención manual</span>
                  </div>
                  <div class="cr-item">
                    <span class="cr-num">3x</span>
                    <span class="cr-lbl">Velocidad de procesamiento</span>
                  </div>
                </div>
                <div class="caso-tech">
                  <span><i class="fas fa-brain"></i> Agent Core</span>
                  <span><i class="fas fa-cubes"></i> Odoo ERP</span>
                  <span><i class="fas fa-store"></i> Retail/F&amp;B</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          METODOLOGÍA
      ══════════════════════════════════════════ */}
      <section class="metodologia" id="metodologia">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Cómo trabajamos</div>
            <h2 class="section-title">Metodología de <span class="gradient-text">entrega</span></h2>
            <p class="section-sub">Nos adaptamos al modelo que mejor se ajusta a tus necesidades operativas y presupuestarias.</p>
          </div>
          <div class="met-grid">

            <div class="met-card">
              <div class="met-number">01</div>
              <div class="met-icon"><i class="fas fa-key"></i></div>
              <h3>Proyectos Llave en Mano</h3>
              <p>Responsabilidad total del proyecto de inicio a fin. Definimos, desarrollamos, probamos y entregamos con garantía de calidad y cumplimiento de plazos.</p>
              <div class="met-ideal">Ideal para: Implementaciones nuevas, migraciones críticas</div>
            </div>

            <div class="met-card">
              <div class="met-number">02</div>
              <div class="met-icon"><i class="fas fa-handshake"></i></div>
              <h3>Contratos de Soporte</h3>
              <p>Banco de horas fijas mensuales para mantenimiento evolutivo, corrección de incidencias y mejoras continuas. Tu equipo siempre tiene respaldo experto.</p>
              <div class="met-ideal">Ideal para: Post-implementación, sistemas en producción</div>
            </div>

            <div class="met-card">
              <div class="met-number">03</div>
              <div class="met-icon"><i class="fas fa-user-tie"></i></div>
              <h3>Outsourcing IT</h3>
              <p>Consultores especializados dedicados que trabajan como parte de tu equipo. Project Managers, DevOps, QA, Data Analysts, UX/UI y más roles disponibles.</p>
              <div class="met-ideal">Ideal para: Ampliación de equipo, proyectos de largo plazo</div>
            </div>

            <div class="met-card">
              <div class="met-number">04</div>
              <div class="met-icon"><i class="fas fa-clock"></i></div>
              <h3>Horas de Servicio</h3>
              <p>Consumo puntual de horas de consultoría técnica especializada según demanda. Flexibilidad total para necesidades específicas sin compromisos a largo plazo.</p>
              <div class="met-ideal">Ideal para: Consultas técnicas, auditorías, apoyo puntual</div>
            </div>

          </div>

          <div class="met-team">
            <h3 class="mt-title">Perfiles especializados disponibles</h3>
            <div class="mt-roles">
              <div class="role-pill"><i class="fas fa-project-diagram"></i> Project Manager</div>
              <div class="role-pill"><i class="fas fa-vial"></i> QA Engineer</div>
              <div class="role-pill"><i class="fas fa-chart-bar"></i> Business Analyst</div>
              <div class="role-pill"><i class="fas fa-paint-brush"></i> UX/UI Designer</div>
              <div class="role-pill"><i class="fas fa-server"></i> DevOps</div>
              <div class="role-pill"><i class="fab fa-google"></i> CloudOps GCP</div>
              <div class="role-pill"><i class="fas fa-laptop-code"></i> Frontend Dev</div>
              <div class="role-pill"><i class="fas fa-code-branch"></i> Backend Dev</div>
              <div class="role-pill"><i class="fas fa-chart-line"></i> Data Analyst</div>
              <div class="role-pill"><i class="fas fa-headset"></i> Soporte Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CLIENTES / CONFIANZA
      ══════════════════════════════════════════ */}
      <section class="clientes">
        <div class="container">
          <p class="cli-label">Organizaciones que confían en Grupo Consiti</p>
          <div class="cli-logos">
            <div class="cli-logo"><i class="fas fa-university"></i> Banco Hipotecario</div>
            <div class="cli-logo"><i class="fas fa-hand-holding-usd"></i> Credisiman</div>
            <div class="cli-logo"><i class="fas fa-building"></i> Sector Público</div>
            <div class="cli-logo"><i class="fas fa-store"></i> Retail LATAM</div>
            <div class="cli-logo"><i class="fas fa-utensils"></i> F&amp;B Chains</div>
            <div class="cli-logo"><i class="fas fa-industry"></i> Manufactura</div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA CONTACTO
      ══════════════════════════════════════════ */}
      <section class="contacto" id="contacto">
        <div class="container">
          <div class="cta-inner">
            <div class="cta-text">
              <div class="section-tag light">¿Listo para transformar tu organización?</div>
              <h2>Hablemos de tu <span class="gradient-text-light">próximo proyecto</span></h2>
              <p>Nuestro equipo de consultores está disponible para analizar tu situación actual y diseñar una hoja de ruta tecnológica adaptada a tus objetivos.</p>
              <div class="cta-contact-info">
                <div class="cci-item">
                  <i class="fas fa-envelope"></i>
                  <span>contacto@grupoconsiti.com</span>
                </div>
                <div class="cci-item">
                  <i class="fas fa-globe"></i>
                  <span>www.grupoconsiti.com</span>
                </div>
                <div class="cci-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>Latinoamérica · +12 países</span>
                </div>
              </div>
              <div class="cta-certifs">
                <div class="cert-badge"><i class="fab fa-google"></i> Google Cloud Partner</div>
                <div class="cert-badge"><i class="fas fa-database"></i> Oracle Specialist</div>
                <div class="cert-badge"><i class="fas fa-cubes"></i> Odoo Partner</div>
              </div>
            </div>
            <div class="cta-form-wrap">
              <div class="cta-form">
                <h3>Solicita una consultoría gratuita</h3>
                <p class="cf-sub">Respuesta garantizada en menos de 24 horas hábiles.</p>
                <div class="form-row">
                  <div class="fg">
                    <label>Nombre completo</label>
                    <input type="text" placeholder="Tu nombre" id="f-nombre" />
                  </div>
                  <div class="fg">
                    <label>Empresa</label>
                    <input type="text" placeholder="Tu empresa" id="f-empresa" />
                  </div>
                </div>
                <div class="fg">
                  <label>Correo electrónico</label>
                  <input type="email" placeholder="tu@empresa.com" id="f-email" />
                </div>
                <div class="fg">
                  <label>¿En qué podemos ayudarte?</label>
                  <select id="f-servicio">
                    <option value="">Selecciona un área de interés</option>
                    <option>Inteligencia Artificial (Consiti Agent Core)</option>
                    <option>Google Cloud Platform</option>
                    <option>Oracle E-Business Suite</option>
                    <option>Implementación Odoo ERP</option>
                    <option>Desarrollo Full Stack</option>
                    <option>Facturación Electrónica</option>
                    <option>Outsourcing IT</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div class="fg">
                  <label>Mensaje (opcional)</label>
                  <textarea placeholder="Cuéntanos brevemente tu desafío..." rows={3} id="f-mensaje"></textarea>
                </div>
                <button class="btn btn-primary btn-block" id="submitBtn">
                  <i class="fas fa-paper-plane"></i> Enviar solicitud
                </button>
                <p class="form-legal">Al enviar, aceptas nuestra <a href="#footer">Política de Privacidad</a>. Tus datos son tratados con confidencialidad.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer class="footer" id="footer">
        <div class="container">
          <div class="footer-top">
            <div class="ft-brand">
              <a href="/" class="logo footer-logo">
                <div class="logo-mark"><span class="lm-c">C</span></div>
                <div class="logo-words">
                  <span class="lw-grupo white">Grupo</span>
                  <span class="lw-consiti white">Consiti</span>
                </div>
              </a>
              <p class="ft-tagline">"Transformación digital con Software, IA y Cloud"</p>
              <p class="ft-desc">Socio estratégico para la modernización tecnológica de organizaciones públicas y privadas en Latinoamérica.</p>
              <div class="ft-social">
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Twitter/X"><i class="fab fa-x-twitter"></i></a>
                <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
            <div class="ft-links">
              <div class="ftl-col">
                <h4>Servicios</h4>
                <ul>
                  <li><a href="#servicios">Consiti Agent Core</a></li>
                  <li><a href="#servicios">Google Cloud</a></li>
                  <li><a href="#servicios">Oracle EBS</a></li>
                  <li><a href="#servicios">Odoo ERP</a></li>
                  <li><a href="#servicios">Desarrollo Full Stack</a></li>
                  <li><a href="#servicios">Facturación Electrónica</a></li>
                </ul>
              </div>
              <div class="ftl-col">
                <h4>Empresa</h4>
                <ul>
                  <li><a href="#sobre">Sobre nosotros</a></li>
                  <li><a href="#ecosistema">Nuestros partners</a></li>
                  <li><a href="#casos">Casos de éxito</a></li>
                  <li><a href="#metodologia">Metodología</a></li>
                  <li><a href="#">Blog técnico</a></li>
                </ul>
              </div>
              <div class="ftl-col">
                <h4>Contacto</h4>
                <ul>
                  <li><a href="mailto:contacto@grupoconsiti.com"><i class="fas fa-envelope"></i> contacto@grupoconsiti.com</a></li>
                  <li><a href="#"><i class="fas fa-globe"></i> www.grupoconsiti.com</a></li>
                  <li><a href="#"><i class="fas fa-map-marker-alt"></i> Latinoamérica</a></li>
                  <li><a href="#contacto"><i class="fas fa-headset"></i> Soporte técnico</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p class="fb-copy">© 2025 Grupo Consiti. Todos los derechos reservados.</p>
            <div class="fb-legal">
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos de Servicio</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
        /* ── Nav burger ── */
        const burger = document.getElementById('navBurger');
        const navLinks = document.getElementById('navLinks');
        burger.addEventListener('click', () => navLinks.classList.toggle('open'));

        /* ── Scroll effect ── */
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
          navbar.classList.toggle('scrolled', window.scrollY > 30);
        }, { passive: true });

        /* ── Smooth scroll ── */
        document.querySelectorAll('a[href^="#"]').forEach(a => {
          a.addEventListener('click', e => {
            const t = document.querySelector(a.getAttribute('href'));
            if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); navLinks.classList.remove('open'); }
          });
        });

        /* ── Intersection animations ── */
        const io = new IntersectionObserver(entries => {
          entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('visible'); } });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.svc-card, .eco-card, .caso-card, .met-card, .stat-item, .ap-item').forEach(el => {
          el.classList.add('reveal'); io.observe(el);
        });

        /* ── Counter animation ── */
        function animateCount(el, target, suffix) {
          let start = 0;
          const step = () => {
            start += Math.ceil(target / 60);
            if (start >= target) { el.textContent = '+' + target + suffix; return; }
            el.textContent = '+' + start + suffix;
            requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
        const statsObs = new IntersectionObserver(entries => {
          entries.forEach(en => {
            if (en.isIntersecting) {
              statsObs.unobserve(en.target);
              const nums = en.target.querySelectorAll('.stat-num');
              const targets = [12, 150, 300, 500, 10];
              nums.forEach((n, i) => animateCount(n, targets[i], ''));
            }
          });
        }, { threshold: 0.5 });
        const statsBar = document.querySelector('.stats-bar');
        if (statsBar) statsObs.observe(statsBar);

        /* ── Form submit ── */
        document.getElementById('submitBtn').addEventListener('click', function() {
          const fields = ['f-nombre','f-empresa','f-email','f-servicio'];
          const empty = fields.some(id => !document.getElementById(id).value.trim());
          if (!empty) {
            this.innerHTML = '<i class="fas fa-check-circle"></i> ¡Solicitud enviada! Te contactamos pronto.';
            this.style.background = 'linear-gradient(135deg, #059669, #047857)';
            this.disabled = true;
          } else {
            this.innerHTML = '<i class="fas fa-exclamation-circle"></i> Completa todos los campos requeridos';
            this.style.background = 'linear-gradient(135deg,#dc2626,#b91c1c)';
            setTimeout(() => {
              this.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar solicitud';
              this.style.background = '';
              this.disabled = false;
            }, 2500);
          }
        });
      ` }} />
    </>
  )
})

export default app
