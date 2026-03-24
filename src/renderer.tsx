import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Grupo Consiti — Transformación Digital con Software, IA y Cloud en LATAM</title>
        <meta name="description" content="Somos el socio estratégico que acompaña a organizaciones públicas y privadas en su modernización tecnológica con Software, IA y Cloud. +12 años en LATAM. +200 proyectos entregados." />
        <meta name="theme-color" content="#09090f" />
        <meta property="og:title" content="Grupo Consiti — Transformación Digital" />
        <meta property="og:description" content="+12 años transformando organizaciones en LATAM con Software, IA y Cloud." />
        <meta property="og:type" content="website" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="/static/style.css" rel="stylesheet" />
        <style>{`
          html { background: #09090f; }
          body { background: #09090f; }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
})
