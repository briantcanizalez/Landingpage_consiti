import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      {/* ── NAVBAR ── */}
      <nav class="navbar">
        <div class="container nav-inner">
          <a href="/" class="logo">
            <span class="logo-icon"><i class="fas fa-chart-line"></i></span>
            <span class="logo-text">InsightFlow</span>
          </a>
          <ul class="nav-links">
            <li><a href="#usecases">Casos de uso</a></li>
            <li><a href="#product">Producto</a></li>
            <li><a href="#testimonials">Clientes</a></li>
            <li><a href="#demo" class="btn btn-outline btn-sm">Solicitar Demo</a></li>
          </ul>
          <button class="nav-toggle" id="navToggle" aria-label="Menú">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section class="hero" id="hero">
        <div class="hero-bg-gradient"></div>
        <div class="hero-dots"></div>
        <div class="container hero-content">
          <div class="hero-badge">
            <i class="fas fa-bolt"></i>
            <span>Plataforma de analítica B2B de nueva generación</span>
          </div>
          <h1 class="hero-title">
            Convierte datos en <span class="gradient-text">decisiones</span> que impulsan tu negocio
          </h1>
          <p class="hero-subtitle">
            InsightFlow unifica tus fuentes de datos empresariales y genera dashboards inteligentes, alertas predictivas y reportes ejecutivos en tiempo real — sin necesidad de ingenieros de datos.
          </p>
          <div class="hero-actions">
            <a href="#demo" class="btn btn-primary btn-lg">
              <i class="fas fa-calendar-check"></i>
              Solicitar Demo
            </a>
            <a href="#product" class="btn btn-ghost btn-lg">
              <i class="fas fa-play-circle"></i>
              Ver cómo funciona
            </a>
          </div>
          <div class="hero-stats">
            <div class="stat-item">
              <span class="stat-number">+340%</span>
              <span class="stat-label">ROI promedio</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">2.4x</span>
              <span class="stat-label">Más decisiones por semana</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <span class="stat-number">8 min</span>
              <span class="stat-label">Integración inicial</span>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="container">
            <div class="dashboard-preview">
              <div class="dp-header">
                <div class="dp-dots">
                  <span></span><span></span><span></span>
                </div>
                <span class="dp-title">InsightFlow — Overview Dashboard</span>
                <div class="dp-actions">
                  <span class="dp-tag live"><i class="fas fa-circle"></i> En vivo</span>
                </div>
              </div>
              <div class="dp-body">
                <div class="dp-sidebar">
                  <div class="dp-nav-item active"><i class="fas fa-th-large"></i><span>Resumen</span></div>
                  <div class="dp-nav-item"><i class="fas fa-chart-bar"></i><span>Ventas</span></div>
                  <div class="dp-nav-item"><i class="fas fa-users"></i><span>Clientes</span></div>
                  <div class="dp-nav-item"><i class="fas fa-bullseye"></i><span>Marketing</span></div>
                  <div class="dp-nav-item"><i class="fas fa-cogs"></i><span>Ops</span></div>
                </div>
                <div class="dp-main">
                  <div class="dp-kpis">
                    <div class="kpi-card blue">
                      <div class="kpi-icon"><i class="fas fa-dollar-sign"></i></div>
                      <div class="kpi-info">
                        <span class="kpi-label">Ingresos MRR</span>
                        <span class="kpi-value">$284,500</span>
                        <span class="kpi-trend up"><i class="fas fa-arrow-up"></i> +12.4%</span>
                      </div>
                    </div>
                    <div class="kpi-card green">
                      <div class="kpi-icon"><i class="fas fa-user-plus"></i></div>
                      <div class="kpi-info">
                        <span class="kpi-label">Nuevos Leads</span>
                        <span class="kpi-value">1,847</span>
                        <span class="kpi-trend up"><i class="fas fa-arrow-up"></i> +8.1%</span>
                      </div>
                    </div>
                    <div class="kpi-card amber">
                      <div class="kpi-icon"><i class="fas fa-handshake"></i></div>
                      <div class="kpi-info">
                        <span class="kpi-label">Tasa Cierre</span>
                        <span class="kpi-value">34.2%</span>
                        <span class="kpi-trend down"><i class="fas fa-arrow-down"></i> -1.3%</span>
                      </div>
                    </div>
                    <div class="kpi-card purple">
                      <div class="kpi-icon"><i class="fas fa-star"></i></div>
                      <div class="kpi-info">
                        <span class="kpi-label">NPS Score</span>
                        <span class="kpi-value">68</span>
                        <span class="kpi-trend up"><i class="fas fa-arrow-up"></i> +5 pts</span>
                      </div>
                    </div>
                  </div>
                  <div class="dp-charts">
                    <div class="chart-card chart-main">
                      <div class="chart-header">
                        <span class="chart-title">Evolución de ingresos</span>
                        <span class="chart-period">Últimos 12 meses</span>
                      </div>
                      <div class="chart-bars">
                        <div class="bar-group">
                          <div class="bar" style="height:45%"><span class="bar-val">$198k</span></div>
                          <span class="bar-label">Ene</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:52%"><span class="bar-val">$212k</span></div>
                          <span class="bar-label">Feb</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:48%"><span class="bar-val">$205k</span></div>
                          <span class="bar-label">Mar</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:61%"><span class="bar-val">$228k</span></div>
                          <span class="bar-label">Abr</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:67%"><span class="bar-val">$241k</span></div>
                          <span class="bar-label">May</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:72%"><span class="bar-val">$256k</span></div>
                          <span class="bar-label">Jun</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:69%"><span class="bar-val">$249k</span></div>
                          <span class="bar-label">Jul</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:78%"><span class="bar-val">$267k</span></div>
                          <span class="bar-label">Ago</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:82%"><span class="bar-val">$272k</span></div>
                          <span class="bar-label">Sep</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:88%"><span class="bar-val">$279k</span></div>
                          <span class="bar-label">Oct</span>
                        </div>
                        <div class="bar-group">
                          <div class="bar" style="height:91%"><span class="bar-val">$281k</span></div>
                          <span class="bar-label">Nov</span>
                        </div>
                        <div class="bar-group active">
                          <div class="bar" style="height:95%"><span class="bar-val">$284k</span></div>
                          <span class="bar-label">Dic</span>
                        </div>
                      </div>
                    </div>
                    <div class="chart-card chart-side">
                      <div class="chart-header">
                        <span class="chart-title">Fuentes de leads</span>
                      </div>
                      <div class="donut-chart">
                        <svg viewBox="0 0 100 100" class="donut-svg">
                          <circle cx="50" cy="50" r="35" fill="none" stroke="#e2e8f0" stroke-width="12"/>
                          <circle cx="50" cy="50" r="35" fill="none" stroke="#3b82f6" stroke-width="12"
                            stroke-dasharray="88 132" stroke-dashoffset="0" class="donut-seg1"/>
                          <circle cx="50" cy="50" r="35" fill="none" stroke="#10b981" stroke-width="12"
                            stroke-dasharray="55 165" stroke-dashoffset="-88" class="donut-seg2"/>
                          <circle cx="50" cy="50" r="35" fill="none" stroke="#8b5cf6" stroke-width="12"
                            stroke-dasharray="33 187" stroke-dashoffset="-143" class="donut-seg3"/>
                          <circle cx="50" cy="50" r="35" fill="none" stroke="#f59e0b" stroke-width="12"
                            stroke-dasharray="24 196" stroke-dashoffset="-176" class="donut-seg4"/>
                        </svg>
                        <div class="donut-center">
                          <span class="donut-total">1,847</span>
                          <span class="donut-label">Leads</span>
                        </div>
                      </div>
                      <div class="donut-legend">
                        <div class="legend-item"><span class="legend-dot blue"></span><span>Orgánico 40%</span></div>
                        <div class="legend-item"><span class="legend-dot green"></span><span>Paid 25%</span></div>
                        <div class="legend-item"><span class="legend-dot purple"></span><span>Referral 20%</span></div>
                        <div class="legend-item"><span class="legend-dot amber"></span><span>Directo 15%</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS STRIP ── */}
      <section class="logos-strip">
        <div class="container">
          <p class="logos-label">Empresas que confían en InsightFlow</p>
          <div class="logos-row">
            <div class="logo-brand"><i class="fas fa-building"></i> Nexara Corp</div>
            <div class="logo-brand"><i class="fas fa-globe"></i> Orbis Systems</div>
            <div class="logo-brand"><i class="fas fa-cube"></i> Velatech</div>
            <div class="logo-brand"><i class="fas fa-layer-group"></i> Stratum Co</div>
            <div class="logo-brand"><i class="fas fa-rocket"></i> Pulsar IO</div>
            <div class="logo-brand"><i class="fas fa-bolt"></i> Zentry Labs</div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section class="usecases" id="usecases">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Casos de uso</div>
            <h2 class="section-title">Decisiones más inteligentes <br />en cada área del negocio</h2>
            <p class="section-subtitle">InsightFlow se adapta a los desafíos reales de los equipos B2B, desde ventas hasta operaciones.</p>
          </div>
          <div class="usecases-grid">

            {/* Case 1 */}
            <div class="usecase-card">
              <div class="uc-icon-wrap blue">
                <i class="fas fa-chart-line"></i>
              </div>
              <div class="uc-tag">Ventas & Revenue</div>
              <h3 class="uc-title">Acelera tu pipeline de ventas</h3>
              <p class="uc-desc">
                Identifica oportunidades en riesgo antes de que se enfríen. InsightFlow analiza el comportamiento de tus prospectos, predice probabilidades de cierre y alerta a tu equipo en el momento exacto para actuar.
              </p>
              <ul class="uc-bullets">
                <li><i class="fas fa-check-circle"></i> Predicción de churn con 87% de precisión</li>
                <li><i class="fas fa-check-circle"></i> Priorización automática de leads por valor</li>
                <li><i class="fas fa-check-circle"></i> Reportes de forecast en tiempo real</li>
              </ul>
              <div class="uc-metric">
                <span class="uc-metric-value">+28%</span>
                <span class="uc-metric-label">Tasa de conversión promedio</span>
              </div>
            </div>

            {/* Case 2 */}
            <div class="usecase-card featured">
              <div class="uc-badge">Más popular</div>
              <div class="uc-icon-wrap indigo">
                <i class="fas fa-bullseye"></i>
              </div>
              <div class="uc-tag">Marketing & Demanda</div>
              <h3 class="uc-title">Optimiza tus campañas con datos reales</h3>
              <p class="uc-desc">
                Unifica el rendimiento de todos tus canales de marketing en un solo lugar. Comprende qué campañas generan ingresos reales y reasigna presupuesto automáticamente hacia los canales de mayor ROI.
              </p>
              <ul class="uc-bullets">
                <li><i class="fas fa-check-circle"></i> Atribución multi-canal con modelo ML</li>
                <li><i class="fas fa-check-circle"></i> Alertas de anomalías en tiempo real</li>
                <li><i class="fas fa-check-circle"></i> Dashboards por segmento y audiencia</li>
              </ul>
              <div class="uc-metric">
                <span class="uc-metric-value">3.2x</span>
                <span class="uc-metric-label">Mejora en ROAS reportado</span>
              </div>
            </div>

            {/* Case 3 */}
            <div class="usecase-card">
              <div class="uc-icon-wrap teal">
                <i class="fas fa-cogs"></i>
              </div>
              <div class="uc-tag">Operaciones & Eficiencia</div>
              <h3 class="uc-title">Reduce costos operativos sin perder calidad</h3>
              <p class="uc-desc">
                Visualiza el rendimiento de tus procesos internos y detecta cuellos de botella en tiempo real. Conecta ERP, CRM y herramientas de soporte para obtener una visión 360° de tu operación.
              </p>
              <ul class="uc-bullets">
                <li><i class="fas fa-check-circle"></i> Integraciones con +50 herramientas B2B</li>
                <li><i class="fas fa-check-circle"></i> KPIs operativos personalizables</li>
                <li><i class="fas fa-check-circle"></i> Automatización de reportes periódicos</li>
              </ul>
              <div class="uc-metric">
                <span class="uc-metric-value">-18%</span>
                <span class="uc-metric-label">Reducción en costos operativos</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PRODUCT OVERVIEW ── */}
      <section class="product" id="product">
        <div class="container">
          <div class="product-inner">
            <div class="product-text">
              <div class="section-tag">Plataforma</div>
              <h2 class="section-title left">Todo lo que necesitas para analizar tu negocio en un solo lugar</h2>
              <p class="section-subtitle left">Diseñado para equipos de negocio, no para ingenieros. Configura tu primer dashboard en menos de 10 minutos.</p>
              <div class="features-list">
                <div class="feature-item">
                  <div class="fi-icon"><i class="fas fa-plug"></i></div>
                  <div class="fi-content">
                    <h4>Integraciones nativas</h4>
                    <p>Conecta Salesforce, HubSpot, Stripe, Zendesk y más de 50 herramientas B2B sin código.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="fi-icon"><i class="fas fa-brain"></i></div>
                  <div class="fi-content">
                    <h4>Insights con IA</h4>
                    <p>Recibe recomendaciones automáticas y alertas predictivas basadas en tus propios datos.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="fi-icon"><i class="fas fa-shield-alt"></i></div>
                  <div class="fi-content">
                    <h4>Seguridad enterprise</h4>
                    <p>SOC 2 Tipo II, cifrado en reposo y en tránsito, SSO y control de roles granular.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="fi-icon"><i class="fas fa-share-alt"></i></div>
                  <div class="fi-content">
                    <h4>Colaboración en equipo</h4>
                    <p>Comparte dashboards, añade anotaciones y programa reportes automáticos para stakeholders.</p>
                  </div>
                </div>
              </div>
              <a href="#demo" class="btn btn-primary">Solicitar Demo Personalizada <i class="fas fa-arrow-right"></i></a>
            </div>
            <div class="product-visual">
              <div class="product-dashboard">
                <div class="pd-toolbar">
                  <div class="pd-breadcrumb"><i class="fas fa-th-large"></i> Dashboards <i class="fas fa-chevron-right"></i> <strong>Vista General Q4</strong></div>
                  <div class="pd-toolbar-actions">
                    <button class="pd-btn"><i class="fas fa-plus"></i> Añadir widget</button>
                    <button class="pd-btn active"><i class="fas fa-share-alt"></i> Compartir</button>
                  </div>
                </div>
                <div class="pd-content">
                  <div class="pd-row">
                    <div class="pd-widget wide">
                      <div class="widget-header">
                        <span class="widget-title"><i class="fas fa-chart-area"></i> Rendimiento de pipeline</span>
                        <span class="widget-badge green">En objetivo</span>
                      </div>
                      <div class="pipeline-chart">
                        <div class="pipeline-stage">
                          <div class="ps-bar" style="width:100%"><span>Prospectos</span><strong>834</strong></div>
                        </div>
                        <div class="pipeline-stage">
                          <div class="ps-bar" style="width:72%"><span>Calificados</span><strong>601</strong></div>
                        </div>
                        <div class="pipeline-stage">
                          <div class="ps-bar" style="width:51%"><span>Propuesta</span><strong>425</strong></div>
                        </div>
                        <div class="pipeline-stage">
                          <div class="ps-bar" style="width:34%"><span>Negociación</span><strong>283</strong></div>
                        </div>
                        <div class="pipeline-stage">
                          <div class="ps-bar accent" style="width:18%"><span>Cerrado</span><strong>152</strong></div>
                        </div>
                      </div>
                    </div>
                    <div class="pd-widget narrow">
                      <div class="widget-header">
                        <span class="widget-title"><i class="fas fa-bell"></i> Alertas</span>
                        <span class="alert-count">3</span>
                      </div>
                      <div class="alerts-list">
                        <div class="alert-item warn">
                          <i class="fas fa-exclamation-triangle"></i>
                          <div>
                            <strong>Lead inactivo 14d</strong>
                            <p>Acme Corp — $42K</p>
                          </div>
                        </div>
                        <div class="alert-item info">
                          <i class="fas fa-info-circle"></i>
                          <div>
                            <strong>Pico de tráfico</strong>
                            <p>+340% sesiones hoy</p>
                          </div>
                        </div>
                        <div class="alert-item success">
                          <i class="fas fa-check-circle"></i>
                          <div>
                            <strong>Meta alcanzada</strong>
                            <p>Q4 Revenue 100%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="pd-row">
                    <div class="pd-widget">
                      <div class="widget-header">
                        <span class="widget-title"><i class="fas fa-users"></i> Segmentos activos</span>
                      </div>
                      <div class="segments-list">
                        <div class="seg-item">
                          <span class="seg-name">Enterprise (&gt;500)</span>
                          <div class="seg-bar"><div class="seg-fill" style="width:78%"></div></div>
                          <span class="seg-pct">78%</span>
                        </div>
                        <div class="seg-item">
                          <span class="seg-name">Mid-Market</span>
                          <div class="seg-bar"><div class="seg-fill mid" style="width:61%"></div></div>
                          <span class="seg-pct">61%</span>
                        </div>
                        <div class="seg-item">
                          <span class="seg-name">SMB</span>
                          <div class="seg-bar"><div class="seg-fill low" style="width:44%"></div></div>
                          <span class="seg-pct">44%</span>
                        </div>
                      </div>
                    </div>
                    <div class="pd-widget">
                      <div class="widget-header">
                        <span class="widget-title"><i class="fas fa-magic"></i> Recomendación IA</span>
                        <span class="widget-badge ai">AI</span>
                      </div>
                      <div class="ai-insight">
                        <div class="ai-icon"><i class="fas fa-lightbulb"></i></div>
                        <p>"Tres cuentas Enterprise muestran señales de expansión. Contactarlas esta semana podría generar <strong>+$68K en upsell</strong>."</p>
                        <button class="ai-cta">Ver cuentas <i class="fas fa-arrow-right"></i></button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pd-badge-floating">
                  <i class="fas fa-lock"></i> Seguridad SOC 2 Type II
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section class="testimonials" id="testimonials">
        <div class="container">
          <div class="section-header">
            <div class="section-tag">Prueba social</div>
            <h2 class="section-title">Lo que dicen nuestros clientes</h2>
            <p class="section-subtitle">Equipos de negocio en toda Latinoamérica y España ya toman mejores decisiones con InsightFlow.</p>
          </div>
          <div class="testimonials-grid">

            <div class="testimonial-card">
              <div class="tc-quote"><i class="fas fa-quote-left"></i></div>
              <div class="tc-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <p class="tc-text">
                "InsightFlow nos cambió la forma en que tomamos decisiones comerciales. En tres semanas ya teníamos dashboards que antes tardaban meses en construir con nuestro equipo de data."
              </p>
              <div class="tc-author">
                <div class="tc-avatar blue">
                  <span>MR</span>
                </div>
                <div class="tc-author-info">
                  <strong>María Rodríguez</strong>
                  <span>VP de Ventas · Nexara Corp</span>
                </div>
                <div class="tc-company-badge">
                  <i class="fas fa-building"></i>
                </div>
              </div>
            </div>

            <div class="testimonial-card featured">
              <div class="tc-quote"><i class="fas fa-quote-left"></i></div>
              <div class="tc-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <p class="tc-text">
                "El módulo de alertas predictivas es increíble. Detectamos un riesgo de churn crítico en uno de nuestros mejores clientes con dos semanas de antelación. Lo salvamos y renovó por el doble."
              </p>
              <div class="tc-author">
                <div class="tc-avatar indigo">
                  <span>CL</span>
                </div>
                <div class="tc-author-info">
                  <strong>Carlos López</strong>
                  <span>Director de Customer Success · Orbis Systems</span>
                </div>
                <div class="tc-company-badge">
                  <i class="fas fa-globe"></i>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="tc-quote"><i class="fas fa-quote-left"></i></div>
              <div class="tc-stars">
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <p class="tc-text">
                "Por fin podemos ir a las reuniones de board con datos consolidados y en tiempo real. InsightFlow eliminó por completo los reportes manuales en Excel que nos consumían 10 horas a la semana."
              </p>
              <div class="tc-author">
                <div class="tc-avatar teal">
                  <span>AS</span>
                </div>
                <div class="tc-author-info">
                  <strong>Ana Serrano</strong>
                  <span>CFO · Velatech Solutions</span>
                </div>
                <div class="tc-company-badge">
                  <i class="fas fa-cube"></i>
                </div>
              </div>
            </div>

          </div>

          <div class="social-numbers">
            <div class="sn-item">
              <span class="sn-value">500+</span>
              <span class="sn-label">Empresas activas</span>
            </div>
            <div class="sn-item">
              <span class="sn-value">12M+</span>
              <span class="sn-label">Datos procesados/día</span>
            </div>
            <div class="sn-item">
              <span class="sn-value">4.9/5</span>
              <span class="sn-label">Valoración media</span>
            </div>
            <div class="sn-item">
              <span class="sn-value">98%</span>
              <span class="sn-label">Retención anual</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEMO CTA ── */}
      <section class="demo-cta" id="demo">
        <div class="demo-bg"></div>
        <div class="container">
          <div class="demo-inner">
            <div class="demo-text">
              <h2>Empieza a tomar decisiones con datos reales</h2>
              <p>Agenda una demo personalizada de 30 minutos. Te mostramos cómo InsightFlow puede transformar el análisis de tu negocio específico.</p>
              <ul class="demo-promises">
                <li><i class="fas fa-check"></i> Sin compromiso ni tarjeta de crédito</li>
                <li><i class="fas fa-check"></i> Demo personalizada con tus datos</li>
                <li><i class="fas fa-check"></i> Respuesta en menos de 24 horas</li>
              </ul>
            </div>
            <div class="demo-form-wrap">
              <div class="demo-form">
                <h3><i class="fas fa-calendar-check"></i> Solicitar Demo</h3>
                <div class="form-row">
                  <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" placeholder="Tu nombre completo" />
                  </div>
                  <div class="form-group">
                    <label>Empresa</label>
                    <input type="text" placeholder="Nombre de tu empresa" />
                  </div>
                </div>
                <div class="form-group">
                  <label>Email corporativo</label>
                  <input type="email" placeholder="tu@empresa.com" />
                </div>
                <div class="form-group">
                  <label>Número de empleados</label>
                  <select>
                    <option value="">Selecciona un rango</option>
                    <option>1 – 50 empleados</option>
                    <option>51 – 200 empleados</option>
                    <option>201 – 1000 empleados</option>
                    <option>Más de 1000 empleados</option>
                  </select>
                </div>
                <button type="button" class="btn btn-primary btn-full">
                  <i class="fas fa-paper-plane"></i> Solicitar mi Demo
                </button>
                <p class="form-disclaimer">Al enviar aceptas nuestra <a href="#privacy">Política de Privacidad</a>. Tus datos están seguros.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer class="footer" id="footer">
        <div class="container">
          <div class="footer-top">
            <div class="footer-brand">
              <a href="/" class="logo">
                <span class="logo-icon"><i class="fas fa-chart-line"></i></span>
                <span class="logo-text white">InsightFlow</span>
              </a>
              <p class="footer-tagline">La plataforma de analítica B2B que transforma datos en decisiones estratégicas.</p>
              <div class="social-links">
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="Twitter"><i class="fab fa-x-twitter"></i></a>
                <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
              </div>
            </div>
            <div class="footer-links">
              <div class="fl-col">
                <h4>Producto</h4>
                <ul>
                  <li><a href="#product">Características</a></li>
                  <li><a href="#usecases">Casos de uso</a></li>
                  <li><a href="#">Integraciones</a></li>
                  <li><a href="#">Precios</a></li>
                  <li><a href="#">Changelog</a></li>
                </ul>
              </div>
              <div class="fl-col">
                <h4>Empresa</h4>
                <ul>
                  <li><a href="#">Sobre nosotros</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Carreras</a></li>
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Sala de prensa</a></li>
                </ul>
              </div>
              <div class="fl-col">
                <h4>Recursos</h4>
                <ul>
                  <li><a href="#">Documentación</a></li>
                  <li><a href="#">Guías y tutoriales</a></li>
                  <li><a href="#">API Reference</a></li>
                  <li><a href="#">Status</a></li>
                  <li><a href="#">Comunidad</a></li>
                </ul>
              </div>
              <div class="fl-col">
                <h4>Contacto</h4>
                <ul>
                  <li><a href="mailto:hola@insightflow.io"><i class="fas fa-envelope"></i> hola@insightflow.io</a></li>
                  <li><a href="tel:+34910000000"><i class="fas fa-phone"></i> +34 910 000 000</a></li>
                  <li><a href="#"><i class="fas fa-map-marker-alt"></i> Madrid, España</a></li>
                  <li><a href="#demo"><i class="fas fa-headset"></i> Soporte 24/7</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p class="footer-copy">© 2025 InsightFlow Technologies S.L. Todos los derechos reservados.</p>
            <div class="footer-legal">
              <a href="#privacy" id="privacy">Política de Privacidad</a>
              <a href="#">Términos de Servicio</a>
              <a href="#">Cookies</a>
              <a href="#">RGPD</a>
            </div>
          </div>
        </div>
      </footer>

      <script dangerouslySetInnerHTML={{ __html: `
        // Navbar toggle
        document.getElementById('navToggle').addEventListener('click', function() {
          document.querySelector('.nav-links').classList.toggle('open');
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
              e.preventDefault();
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              document.querySelector('.nav-links').classList.remove('open');
            }
          });
        });

        // Navbar scroll effect
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
          if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
          } else {
            navbar.classList.remove('scrolled');
          }
        });

        // Intersection Observer for animations
        const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, observerOptions);

        document.querySelectorAll('.usecase-card, .testimonial-card, .feature-item, .pd-widget, .kpi-card').forEach(el => {
          el.classList.add('fade-in');
          observer.observe(el);
        });

        // Form submit mock
        document.querySelector('.btn-full').addEventListener('click', function() {
          const inputs = document.querySelectorAll('.demo-form input, .demo-form select');
          let filled = true;
          inputs.forEach(i => { if (!i.value) filled = false; });
          if (filled) {
            this.innerHTML = '<i class="fas fa-check-circle"></i> ¡Solicitud enviada! Te contactaremos pronto.';
            this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
          } else {
            this.innerHTML = '<i class="fas fa-exclamation-circle"></i> Completa todos los campos';
            this.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
            setTimeout(() => {
              this.innerHTML = '<i class="fas fa-paper-plane"></i> Solicitar mi Demo';
              this.style.background = '';
            }, 2000);
          }
        });
      ` }} />
    </>
  )
})

export default app
