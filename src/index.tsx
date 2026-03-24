import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
app.use(renderer)

/* ── Favicon ── */
app.get('/favicon.svg', (c) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="7" fill="#5216e7"/><path d="M9 10 L15 16 L9 22 M16 10 L22 16 L16 22" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`
  return c.body(svg, 200, { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=86400' })
})
app.get('/favicon.ico', (c) => c.redirect('/favicon.svg', 301))

/* ─── Minimalist line SVG icons (no 3D, no emoji) ─── */
const I = {
  /* Services */
  code:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  brain:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 1 4.5 2.8A4 4 0 0 1 20 8.5a4.5 4.5 0 0 1-1 8.8A5 5 0 0 1 12 22a5 5 0 0 1-7-4.7 4.5 4.5 0 0 1-1-8.8A4 4 0 0 1 7.5 4.8 5 5 0 0 1 12 2z"/><path d="M12 2v20"/><path d="M4.9 7.5h14.2"/><path d="M4.9 16.5h14.2"/></svg>`,
  cloud:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
  box:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
  link:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  chart:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  /* Hero / About */
  rocket:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>`,
  users:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  globe:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  /* CTA items */
  zap:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  shield:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  target:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  mappin:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  /* Methodology */
  search:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  pen:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>`,
  layers:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
  book:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  headset:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>`,
  /* Tech stack */
  googleCloud: `<svg viewBox="0 0 256 206"><path d="M170.252 56.82l22.253-22.252 1.47-9.38A128.026 128.026 0 0 0 31.474 79.165L39.6 78.4l44.505-7.34s2.268-3.768 3.412-3.553a83.528 83.528 0 0 1 82.735-10.686z" fill="#EA4335"/><path d="M218.6 79.166a128.23 128.23 0 0 0-38.687-62.49l-31.473 31.473A83.396 83.396 0 0 1 179.06 102.5v5.556A41.867 41.867 0 0 1 179.06 192h-51.062l-5.555 5.69v33.365l5.555 5.556h51.062a86.362 86.362 0 0 0 39.54-157.445z" fill="#4285F4"/><path d="M76.93 236.611h51.063V192H76.93a41.571 41.571 0 0 1-17.308-3.778l-11.958 3.667-22.388 22.252-2.932 11.515A85.932 85.932 0 0 0 76.93 236.611z" fill="#34A853"/><path d="M76.93 64.353A86.086 86.086 0 0 0 22.344 225.656l37.278-37.278A41.867 41.867 0 1 1 118 64.353h-.003l5.555-5.556V25.432L118 19.876H76.93z" fill="#FBBC05"/></svg>`,
  oracle: `<svg viewBox="0 0 512 66"><path fill="#C74634" d="M33.207 0C14.88 0 0 14.88 0 33.207s14.88 33.207 33.207 33.207h445.586C497.12 66.414 512 51.534 512 33.207S497.12 0 478.793 0zm445.586 53.131H33.207C22.188 53.131 13.283 44.226 13.283 33.207S22.188 13.283 33.207 13.283h445.586c11.019 0 19.924 8.905 19.924 19.924s-8.905 19.924-19.924 19.924z"/></svg>`,
  odoo: `<svg viewBox="0 0 80 80"><circle cx="40" cy="40" r="38" fill="#714B67"/><circle cx="40" cy="40" r="15" fill="white"/></svg>`,
  salesforce: `<svg viewBox="0 0 24 24"><path d="M10.05 4.85c.9-.95 2.15-1.55 3.55-1.55 1.85 0 3.45 1.05 4.3 2.6a5.32 5.32 0 0 1 2.2-.48c2.95 0 5.35 2.4 5.35 5.36s-2.4 5.36-5.35 5.36c-.45 0-.88-.06-1.3-.16a4.56 4.56 0 0 1-3.95 2.32c-.73 0-1.42-.18-2.03-.49a5.15 5.15 0 0 1-4.57 2.79c-2.28 0-4.2-1.48-4.88-3.53a4.49 4.49 0 0 1-.77.07A4.6 4.6 0 0 1-1.6 12.54c0-1.64.87-3.08 2.17-3.89A4.3 4.3 0 0 1 .3 7c0-2.37 1.92-4.3 4.3-4.3 1.41 0 2.66.68 3.45 1.73z" fill="#00A1E0" transform="translate(1.3 1.5) scale(.85)"/></svg>`,
  python: `<svg viewBox="0 0 24 24"><path d="M11.92 0C5.88 0 6.25 2.63 6.25 2.63l.01 2.73h5.77v.82H3.82S0 5.73 0 11.89s3.33 5.94 3.33 5.94h1.99v-2.86s-.11-3.33 3.28-3.33h5.65s3.17.05 3.17-3.07V3.54S17.95 0 11.92 0zm-3.14 2.05a1.02 1.02 0 1 1 0 2.04 1.02 1.02 0 0 1 0-2.04z" fill="#3776AB"/><path d="M12.08 24c6.04 0 5.67-2.63 5.67-2.63l-.01-2.73h-5.77v-.82h8.21S24 18.27 24 12.11s-3.33-5.94-3.33-5.94h-1.99v2.86s.11 3.33-3.28 3.33H9.75s-3.17-.05-3.17 3.07v5.03S6.05 24 12.08 24zm3.14-2.05a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04z" fill="#FFD43B"/></svg>`,
  tensorflow: `<svg viewBox="0 0 24 24"><path d="M1.29 6.64L12 .53l10.71 6.11v1.37L12 14.12 1.29 8.01V6.64zm0 4.37L12 17.12l10.71-6.11v3L12 20.12 1.29 14.01v-3z" fill="#FF6F00"/></svg>`,
  postgresql: `<svg viewBox="0 0 24 24"><path d="M17.13 2.14c-1.47-.3-2.25-.15-2.25-.15s.73.57.53 1.27c-.22.77-1.42 1.34-1.42 1.34S15.13 5.69 15 7.34c-.07.9-.62 2.69-1.63 3.37-.57.38-1.17.22-1.53-.11-.73-.67-.43-1.9-.43-1.9s-.72.83-.9 1.73c-.2 1-.06 2.17.79 2.78.67.48 1.57.36 2.17-.01 1.5-.93 2.22-3.26 2.25-4.62.03-1.26-.28-2.13-.55-2.69-.12-.25-.4-.67-.4-.67s1.24-.59 1.56-1.8c.15-.57-.07-1.04-.2-1.28z" fill="#336791"/><path d="M11.99 1C6.47 1 2 5.47 2 11s4.47 10 9.99 10S22 16.53 22 11 17.52 1 11.99 1zm5.92 15.89c-.56.89-1.81 1.62-1.81 1.62s-.1.77-.52 1.35c-.43.6-1.21.91-1.21.91s-1.11.08-1.78-.39c-.67-.47-1-1.29-.89-2.2.1-.82.67-1.64.67-1.64l-.03-.07c-.87.06-1.67-.23-2.15-.74-.63-.67-.79-1.6-.49-2.38.36-.93 1.22-1.67 2.05-2.02 0 0-.16-.83.3-1.83.4-.86 1.02-1.53 1.02-1.53s-.37-.67-.37-1.41c0-.89.47-1.89 1.59-1.89.53 0 .89.23 1.1.55.41.65.13 1.51-.12 2.13-.12.3-.62 1.14-.62 1.14s.38.63.59 1.25c.34 1 .32 2.16-.12 3.43-.32.9-.94 1.66-1.39 2.09 0 0 .18.4.19.98.02.8-.4 1.51-.4 1.51s.87-.33 1.49-1.01c.67-.73 1-1.59 1.24-2.57.33-1.32.12-2.67-.29-3.62z" fill="#336791" opacity=".3"/></svg>`,
  nodejs: `<svg viewBox="0 0 24 24"><path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.13c.94.47 1.27.46 1.7.46 1.39 0 2.18-.84 2.18-2.31V8.47c0-.12-.1-.22-.22-.22H8.5c-.12 0-.22.1-.22.22v8.06c0 .65-.68 1.31-1.77.76L4.43 16.1a.26.26 0 0 1-.13-.22V7.3c0-.09.05-.17.13-.22l7.44-4.3a.26.26 0 0 1 .26 0l7.44 4.3c.08.05.13.13.13.22v8.58a.26.26 0 0 1-.13.22l-7.44 4.3a.26.26 0 0 1-.26 0l-1.88-1.11a.2.2 0 0 0-.19-.02c-.52.22-.62.25-1.11.38-.12.03-.3.08.07.24l2.45 1.45c.24.14.51.2.78.2.27 0 .55-.07.78-.2l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3a1.57 1.57 0 0 0-.78-.2z" fill="#539E43"/></svg>`,
  kubernetes: `<svg viewBox="0 0 24 24"><path d="M12 1L2.5 6v12L12 23l9.5-5V6L12 1zm0 2.18L19.42 7.1v9.8L12 20.82 4.58 16.9V7.1L12 3.18z" fill="#326CE5"/><path d="M12 7a.5.5 0 0 0-.5.5v3.38l-2.93-1.69a.5.5 0 0 0-.5.87L11 11.75v3.38a.5.5 0 0 0 1 0v-3.38l2.93 1.69a.5.5 0 0 0 .5-.87L12.5 10.88V7.5A.5.5 0 0 0 12 7z" fill="#326CE5"/></svg>`,
  terraform: `<svg viewBox="0 0 24 24"><path d="M1 2.5v7l6 3.5v-7L1 2.5z" fill="#5C4EE5"/><path d="M8.5 6v7l6 3.5v-7L8.5 6z" fill="#5C4EE5"/><path d="M16 2.5v7l6 3.5v-7l-6-3.5z" fill="#5C4EE5" opacity=".5"/><path d="M8.5 17.5v7l6 3.5v-7l-6-3.5z" fill="#5C4EE5" transform="translate(0 -3.5)"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24"><path d="M17.47 14.38c-.28-.14-1.65-.82-1.9-.91-.26-.09-.44-.14-.63.14-.19.28-.72.91-.89 1.1-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.25-1.39-.83-.74-1.39-1.66-1.55-1.94-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.77.35-.26.28-1.01.99-1.01 2.41s1.04 2.8 1.18 2.99c.14.19 2.04 3.12 4.95 4.37.69.3 1.23.47 1.65.61.69.22 1.32.19 1.82.11.56-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.26-.19-.54-.33zM12.05 21.78a9.68 9.68 0 0 1-4.93-1.35l-.35-.21-3.68.97.98-3.59-.23-.37A9.71 9.71 0 0 1 12.05 2.28c5.37 0 9.73 4.36 9.73 9.72a9.74 9.74 0 0 1-9.73 9.78zM12.05.5C5.61.5.55 5.56.55 12a11.48 11.48 0 0 0 1.54 5.74L.43 23.5l5.93-1.56A11.47 11.47 0 0 0 12.05 23.5C18.49 23.5 23.55 18.44 23.55 12S18.49.5 12.05.5z" fill="#25D366"/></svg>`,
  looker: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="#4285F4" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="#4285F4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#4285F4" stroke-width="2" stroke-linecap="round"/></svg>`,
  cloudsec: `<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="none" stroke="#059669" stroke-width="2"/><path d="M10 12l2 2 4-4" stroke="#059669" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  react: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="2.14" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" stroke-width="1"/><ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" stroke-width="1" transform="rotate(120 12 12)"/></svg>`,
  dotnet: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" fill="#512BD4"/><text x="12" y="16" text-anchor="middle" fill="white" font-size="9" font-weight="700">.N</text></svg>`,
  bigquery: `<svg viewBox="0 0 24 24"><path d="M6 4h3v16H6z" fill="#4285F4"/><path d="M11 8h3v12h-3z" fill="#4285F4"/><path d="M16 12h3v8h-3z" fill="#4285F4"/><path d="M3 20h18v2H3z" fill="#4285F4"/></svg>`,
  /* Social */
  linkedin: `<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>`,
  twitter:  `<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>`,
  youtube:  `<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>`,
  /* Check */
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
}

app.get('/', (c) => {
  return c.render(
    <>
      {/* ── NAVBAR ── */}
      <header class="navbar" id="navbar">
        <div class="nav-inner">
          <a href="/" class="nav-logo">
            <img src="/static/logo-dark.png" alt="Grupo Consiti" class="nav-logo-img" />
          </a>
          <nav class="nav-links" id="navLinks">
            <a href="#servicios">Servicios</a>
            <a href="#ecosistema">Ecosistema</a>
            <a href="#casos">Casos de Exito</a>
            <a href="#nosotros">Nosotros</a>
            <a href="#faq">FAQ</a>
          </nav>
          <div class="nav-actions">
            <a href="#contacto" class="btn-nav-ghost">Contacto</a>
            <a href="#contacto" class="btn-nav-fill">Habla con nosotros</a>
          </div>
          <button class="nav-burger" id="navBurger" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* ── HERO ── */}
      <section class="hero">
        <div class="wrap hero-inner">
          <div class="hero-content">
            <div class="hero-badge"><span class="badge-dot"></span>Socio estrategico &middot; +12 anos en LATAM</div>
            <h1 class="hero-h1">Somos la compania de<br/><span class="hero-accent">Transformacion Digital</span><br/>mas comprometida de LATAM</h1>
            <p class="hero-sub">En Grupo Consiti impulsamos la innovacion y entregamos soluciones de Software, IA y Cloud que ayudan a las organizaciones a escalar y alcanzar sus objetivos.</p>
            <div class="hero-checks">
              {['Soluciones tecnologicas de vanguardia a su medida','Equipo experto certificado en Software, IA y Cloud','Confianza de organizaciones en toda Latinoamerica'].map((t,i)=>(
                <div class="hcheck" key={i}><span class="hcheck-icon" dangerouslySetInnerHTML={{__html: I.check}}/>{t}</div>
              ))}
            </div>
            <div class="hero-ctas">
              <a href="#contacto" class="btn-primary">Habla con un experto <span class="btn-arr">&rarr;</span></a>
              <a href="#casos" class="btn-outline">Ver casos de exito</a>
            </div>
          </div>
          <div class="hero-counters">
            {[
              {icon:I.rocket, target:200, plus:true, label:'Proyectos entregados'},
              {icon:I.users,  target:120, plus:true, label:'Clientes satisfechos'},
              {icon:I.calendar,target:12, plus:true, label:'Anos en la industria'},
              {icon:I.globe,  target:8,   plus:false,label:'Paises en LATAM'},
            ].map((s,i)=>(
              <div class="hcounter" key={i}>
                <div class="hc-icon" dangerouslySetInnerHTML={{__html: s.icon}}/>
                <div class="hc-row">
                  <span class="hc-num" data-target={s.target.toString()}>0</span>
                  {s.plus && <span class="hc-plus">+</span>}
                </div>
                <div class="hc-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section class="section sec-clients">
        <div class="wrap">
          <p class="clients-label">Grandes empresas que depositaron toda su confianza en nosotros</p>
          <div class="clients-row">
            {[
              {name:'Banco Hipotecario'},
              {name:'Davivienda'},
              {name:'Credisiman'},
              {name:'Siman'},
              {name:'Pull&Bear'},
              {name:'Multi Money'},
            ].map((cl,i)=>(
              <div class="client-logo" key={i}>
                <span class="cl-name">{cl.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section class="section sec-alt" id="nosotros">
        <div class="wrap grid-2col">
          <div class="reveal">
            <div class="chip">Sobre nosotros</div>
            <h2 class="sec-h2">Somos la empresa de soluciones IT <span class="hero-accent">mas comprometida con sus resultados</span></h2>
            <p class="sec-p mb24">En Grupo Consiti impulsamos la innovacion y entregamos soluciones de impacto que ayudan a las organizaciones a escalar. Nuestro compromiso con la excelencia y la tecnologia de punta garantiza que su proyecto este en las mejores manos.</p>
            <div class="about-checks">
              {['Soluciones tecnologicas de vanguardia adaptadas a sus necesidades','Un equipo de desarrolladores e ingenieros expertos en toda LATAM','Con la confianza de empresas multinacionales en todo el mundo'].map((t,i)=>(
                <div class="acheck" key={i}><span class="acheck-icon" dangerouslySetInnerHTML={{__html: I.check}}/><span>{t}</span></div>
              ))}
            </div>
          </div>
          <div class="reveal about-card-wrap">
            <div class="about-card">
              <div class="ac-head"><img src="/static/logo-dark.png" alt="Grupo Consiti" class="ac-logo" /></div>
              <div class="ac-stats">
                {[{v:'+200',l:'Proyectos'},{v:'+120',l:'Clientes'},{v:'+12',l:'Anos'},{v:'8',l:'Paises'}].map((s,i)=>(
                  <div class="ac-stat" key={i}><div class="ac-val">{s.v}</div><div class="ac-lbl">{s.l}</div></div>
                ))}
              </div>
              <div class="ac-pills">
                {['Software','IA','Cloud','ERP','CRM','Data & BI'].map((t,i)=>(
                  <span class="ac-pill" key={i}>{t}</span>
                ))}
              </div>
            </div>
            <div class="about-mini-card">
              <span class="amc-icon" dangerouslySetInnerHTML={{__html: I.globe}}/>
              <span>Presencia en <strong>Colombia, Mexico, Ecuador, Peru, Chile, Panama, Costa Rica</strong> y mas.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section class="section" id="servicios">
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="chip">Servicios</div>
            <h2 class="sec-h2">Nuestros servicios dedicados<br/>para <span class="hero-accent">cada cliente</span></h2>
          </div>
          <div class="svc-grid">
            {[
              {icon:I.code,  title:'Desarrollo de Software',desc:'Soluciones a medida que automatizan procesos criticos, integran sistemas y aceleran la operacion con tecnologia moderna.'},
              {icon:I.brain, title:'Inteligencia Artificial',desc:'Modelos de IA aplicados a procesos reales: procesamiento de documentos, atencion al cliente, prediccion de demanda.'},
              {icon:I.cloud, title:'Cloud & Infraestructura',desc:'Migracion, arquitectura y gestion de entornos cloud con Google Cloud y Oracle. Disponibilidad y seguridad garantizadas.'},
              {icon:I.box,   title:'Implementacion ERP/CRM',desc:'Despliegue y personalizacion de Odoo y Salesforce adaptados a los procesos de cada organizacion.'},
              {icon:I.link,  title:'Integracion de Sistemas',desc:'Conectamos plataformas heterogeneas mediante APIs y middleware, eliminando silos de informacion.'},
              {icon:I.chart, title:'Analitica & Business Intelligence',desc:'Dashboards ejecutivos, KPIs en tiempo real y modelos predictivos para decisiones estrategicas.'},
            ].map((s,i)=>(
              <div class="svc-card reveal" key={i}>
                <div class="svc-icon" dangerouslySetInnerHTML={{__html: s.icon}}/>
                <h3 class="svc-title">{s.title}</h3>
                <p class="svc-desc">{s.desc}</p>
                <span class="svc-arrow">&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSISTEMA ── */}
      <section class="section sec-alt" id="ecosistema">
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="chip">Alianzas</div>
            <h2 class="sec-h2">Representamos a las marcas<br/>tecnologicas <span class="hero-accent">lideres globales</span></h2>
          </div>
          <div class="eco-grid">
            {[
              {name:'Google Cloud',cat:'Partner Premier',count:'+50 clientes',desc:'Infraestructura cloud, BigQuery, Vertex AI y Google Workspace.',icon:I.googleCloud,color:'#4285f4'},
              {name:'Oracle',cat:'Gold Partner',count:'+30 clientes',desc:'Oracle ERP Cloud, Oracle Database y OCI Infrastructure.',icon:I.oracle,color:'#C74634'},
              {name:'Odoo',cat:'Certified Partner',count:'+60 clientes',desc:'ERP modular para manufactura, retail, servicios y gobierno.',icon:I.odoo,color:'#714B67'},
              {name:'Salesforce',cat:'Consulting Partner',count:'+20 clientes',desc:'CRM, Service Cloud, Marketing Cloud y automatizacion de ventas.',icon:I.salesforce,color:'#00a1e0'},
            ].map((p,i)=>(
              <div class="eco-card reveal" key={i}>
                <div class="eco-icon" dangerouslySetInnerHTML={{__html:p.icon}} />
                <div class="eco-body">
                  <div class="eco-top"><span class="eco-name">{p.name}</span><span class="eco-badge">{p.count}</span></div>
                  <div class="eco-cat">{p.cat}</div>
                  <p class="eco-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASOS DE EXITO ── */}
      <section class="section" id="casos">
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="chip chip-dark">Casos de exito</div>
            <h2 class="sec-h2">Nuestros <span class="hero-accent">proyectos destacados</span></h2>
          </div>
          <div class="cases-grid">
            {[
              {
                sector:'Sector Publico',tag:'ERP - Gobierno',
                title:'Modernizacion de gestion tributaria municipal',
                desc:'Sistema ERP con Odoo para digitalizar recaudo y gestion de impuestos, eliminando procesos manuales y reduciendo tiempos de dias a minutos.',
                results:[{val:'90%',lbl:'Reduccion en tiempos'},{val:'3x',lbl:'Incremento en recaudo'},{val:'0',lbl:'Errores en liquidacion'}],
                tech:[{name:'Odoo',svg:I.odoo},{name:'Python',svg:I.python},{name:'PostgreSQL',svg:I.postgresql}],
              },
              {
                sector:'Industria Manufacturera',tag:'IA - Computer Vision',
                title:'Plataforma de trazabilidad con vision artificial',
                desc:'Vision artificial para control de calidad en linea de produccion con alertas en tiempo real y reportes analiticos para gerencia.',
                results:[{val:'70%',lbl:'Reduccion defectos'},{val:'+40%',lbl:'Productividad de linea'},{val:'6ms',lbl:'Deteccion de fallas'}],
                tech:[{name:'Google Cloud',svg:I.googleCloud},{name:'TensorFlow',svg:I.tensorflow},{name:'Python',svg:I.python},{name:'BigQuery',svg:I.bigquery}],
              },
              {
                sector:'Sector Retail',tag:'CRM - Automatizacion',
                title:'CRM y automatizacion de ventas para retail',
                desc:'Salesforce con automatizacion de ventas, integracion WhatsApp Business y dashboards para cadena con 15 puntos de venta.',
                results:[{val:'+35%',lbl:'Conversion de ventas'},{val:'2x',lbl:'Velocidad comercial'},{val:'100%',lbl:'Visibilidad pipeline'}],
                tech:[{name:'Salesforce',svg:I.salesforce},{name:'WhatsApp',svg:I.whatsapp},{name:'Looker',svg:I.looker}],
              },
              {
                sector:'Sector Financiero',tag:'Cloud - Seguridad',
                title:'Migracion cloud y modernizacion bancaria',
                desc:'Migracion completa on-premise a Google Cloud para entidad financiera, reduciendo costos y aumentando disponibilidad.',
                results:[{val:'99.9%',lbl:'Disponibilidad'},{val:'-45%',lbl:'Costos infraestructura'},{val:'10x',lbl:'Velocidad despliegue'}],
                tech:[{name:'Google Cloud',svg:I.googleCloud},{name:'Kubernetes',svg:I.kubernetes},{name:'Terraform',svg:I.terraform},{name:'Cloud Security',svg:I.cloudsec}],
              },
            ].map((c,i)=>(
              <div class="case-card reveal" key={i}>
                <div class="case-top"><span class="case-sector">{c.sector}</span><span class="case-tag">{c.tag}</span></div>
                <h3 class="case-title">{c.title}</h3>
                <p class="case-desc">{c.desc}</p>
                <div class="case-results">
                  {c.results.map((r,j)=>(<div class="cr" key={j}><div class="cr-val">{r.val}</div><div class="cr-lbl">{r.lbl}</div></div>))}
                </div>
                <div class="case-tech">
                  {c.tech.map((t,j)=>(
                    <span class="ct-pill" key={j}>
                      <span class="ct-svg" dangerouslySetInnerHTML={{__html:t.svg}} />
                      <span>{t.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METODOLOGIA ── */}
      <section class="section sec-alt">
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="chip">Metodologia</div>
            <h2 class="sec-h2">Un proceso probado para<br/><span class="hero-accent">resultados sostenibles</span></h2>
          </div>
          <div class="method-grid">
            {[
              {n:'01',icon:I.search, t:'Diagnostico',d:'Entendemos a fondo los procesos, sistemas existentes y objetivos del negocio.'},
              {n:'02',icon:I.pen,    t:'Diseno de solucion',d:'Definimos arquitectura tecnologica, roadmap y KPIs de exito alineados a la estrategia.'},
              {n:'03',icon:I.layers, t:'Implementacion agil',d:'Desarrollamos en sprints cortos con entregas parciales para validar en tiempo real.'},
              {n:'04',icon:I.book,   t:'Capacitacion',d:'Formamos equipos para garantizar adopcion correcta y el impacto esperado.'},
              {n:'05',icon:I.headset,t:'Soporte continuo',d:'Acompanamos a largo plazo con soporte, evolucion y optimizacion continua.'},
            ].map((s,i)=>(
              <div class="meth-card reveal" key={i}>
                <div class="meth-icon" dangerouslySetInnerHTML={{__html:s.icon}}/>
                <div class="meth-num">{s.n}</div>
                <h3 class="meth-title">{s.t}</h3>
                <p class="meth-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section class="section">
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="chip">Testimonios</div>
            <h2 class="sec-h2">Lo que dicen <span class="hero-accent">nuestros clientes</span></h2>
          </div>
          <div class="testi-grid">
            {[
              {q:'Grupo Consiti transformo completamente nuestra operacion de recaudo. Lo que antes tomaba dias, ahora se hace en horas con cero errores.',name:'Carlos Mendoza',role:'Secretario de Hacienda - Municipio de Bucaramanga',av:'CM'},
              {q:'La implementacion de IA en nuestra linea de produccion supero todas las expectativas. Redujimos defectos en un 70% con visibilidad total.',name:'Laura Rios',role:'Directora de Operaciones - Industrias LATAM S.A.',av:'LR'},
              {q:'Con Salesforce implementado por Consiti, nuestro equipo de ventas duplico su productividad. El acompanamiento post-implementacion fue clave.',name:'Andres Martinez',role:'Gerente Comercial - Cadena Retail Nacional',av:'AM'},
            ].map((t,i)=>(
              <div class="tcard reveal" key={i}>
                <div class="tc-stars">★★★★★</div>
                <p class="tc-q">"{t.q}"</p>
                <div class="tc-auth"><div class="tc-av">{t.av}</div><div><div class="tc-name">{t.name}</div><div class="tc-role">{t.role}</div></div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section class="section sec-alt" id="faq">
        <div class="wrap">
          <div class="sec-center reveal">
            <div class="chip">FAQ</div>
            <h2 class="sec-h2">Preguntas <span class="hero-accent">frecuentes</span></h2>
          </div>
          <div class="faq-list">
            {[
              {q:'Que servicios ofrece Grupo Consiti?',a:'Ofrecemos desarrollo de software a medida, implementacion ERP/CRM (Odoo, Salesforce), inteligencia artificial, migracion y gestion cloud (Google Cloud, Oracle), integracion de sistemas y analitica de datos.'},
              {q:'Como puede Grupo Consiti mejorar la eficiencia de mi organizacion?',a:'A traves de optimizacion de procesos y aplicaciones personalizadas, automatizamos flujos de trabajo, mejoramos la experiencia del cliente y reducimos costos operativos.'},
              {q:'Con que tecnologias trabajan?',a:'Google Cloud, Oracle OCI, Python, Node.js, React, .NET, Odoo, Salesforce, TensorFlow y mas. Adaptamos la stack segun las necesidades de cada proyecto.'},
              {q:'Trabajan con organizaciones del sector publico?',a:'Si, tenemos amplia experiencia con entidades publicas: sistemas de gestion tributaria, portales ciudadanos, plataformas de tramites digitales y mas.'},
              {q:'En que paises tienen presencia?',a:'Colombia, Mexico, Ecuador, Peru, Chile, Panama, Costa Rica y otros paises de LATAM. Nuestro equipo distribuido atiende proyectos en toda la region.'},
              {q:'Cual es el tiempo tipico de una implementacion?',a:'Implementaciones basicas de ERP pueden completarse en 2-4 meses. Proyectos complejos de transformacion digital pueden tomar 6-18 meses, siempre con entregas parciales.'},
            ].map((f,i)=>(
              <div class="faq-item reveal" key={i} id={`faq-${i}`}>
                <button class="faq-q" onclick={`toggleFaq(${i})`} aria-expanded="false"><span>{f.q}</span><span class="faq-icon">+</span></button>
                <div class="faq-a" id={`faq-a-${i}`}><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section class="section sec-cta" id="contacto">
        <div class="wrap grid-2col">
          <div class="reveal">
            <div class="chip chip-light">Comencemos</div>
            <h2 class="sec-h2 white">Listo para transformar<br/><span class="accent-light">su organizacion?</span></h2>
            <p class="sec-p light mb32">Cuentenos su desafio. Nuestro equipo de expertos disenara una hoja de ruta personalizada para su transformacion digital.</p>
            <div class="cta-items">
              {[
                {icon:I.zap,    t:'Respuesta rapida',  d:'Menos de 24 horas habiles'},
                {icon:I.shield, t:'Sin costo inicial',  d:'Primera consulta gratuita'},
                {icon:I.target, t:'A su medida',        d:'Propuesta personalizada'},
                {icon:I.mappin, t:'Cobertura LATAM',    d:'Atencion en 8 paises'},
              ].map((x,i)=>(
                <div class="cta-row" key={i}><div class="cta-icon" dangerouslySetInnerHTML={{__html:x.icon}}/><div><div class="cta-t">{x.t}</div><div class="cta-d">{x.d}</div></div></div>
              ))}
            </div>
          </div>
          <div class="reveal">
            <form class="cform" id="contactForm">
              <h3 class="cform-h">Solicite una consulta gratuita</h3>
              <div class="frow2"><div class="fgroup"><label class="flabel">Nombre completo</label><input type="text" class="finput" placeholder="Ej: Juan Garcia" required /></div><div class="fgroup"><label class="flabel">Empresa</label><input type="text" class="finput" placeholder="Su organizacion" required /></div></div>
              <div class="fgroup"><label class="flabel">Correo electronico</label><input type="email" class="finput" placeholder="correo@empresa.com" required /></div>
              <div class="fgroup"><label class="flabel">Telefono / WhatsApp</label><input type="tel" class="finput" placeholder="+57 300 000 0000" /></div>
              <div class="fgroup"><label class="flabel">Principal desafio</label><select class="finput fselect"><option value="">Seleccione una opcion</option><option>Automatizacion de procesos</option><option>Implementacion ERP/CRM</option><option>Migracion a la nube</option><option>IA / Data</option><option>Integracion de sistemas</option><option>Otro</option></select></div>
              <div class="fgroup"><label class="flabel">Mensaje (opcional)</label><textarea class="finput ftarea" placeholder="Cuentenos mas..." rows={3}></textarea></div>
              <button type="submit" class="btn-submit">Enviar solicitud <span class="btn-arr">&rarr;</span></button>
              <p class="fnote">Al enviar, acepta nuestra <a href="#privacidad" id="privacidad">politica de privacidad</a>.</p>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer class="footer">
        <div class="wrap">
          <div class="ft-top">
            <div class="ft-brand"><img src="/static/logo-dark.png" alt="Grupo Consiti" class="ft-logo" /><p class="ft-tag">Transformacion digital con Software,<br/>Inteligencia Artificial y Cloud<br/>en toda Latinoamerica.</p>
              <div class="ft-social">
                {[
                  {label:'LinkedIn',svg:I.linkedin},
                  {label:'Twitter/X',svg:I.twitter},
                  {label:'YouTube',svg:I.youtube},
                ].map((s,i)=>(<a href="#" class="ft-soc" key={i} aria-label={s.label}><span dangerouslySetInnerHTML={{__html:`<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">${s.svg}</svg>`}}/></a>))}
              </div>
            </div>
            <div class="ft-cols">
              <div class="ft-col"><div class="ft-col-h">Servicios</div><ul><li><a href="#servicios">Desarrollo de Software</a></li><li><a href="#servicios">Inteligencia Artificial</a></li><li><a href="#servicios">Cloud & Infraestructura</a></li><li><a href="#servicios">Implementacion ERP</a></li><li><a href="#servicios">Analitica & BI</a></li></ul></div>
              <div class="ft-col"><div class="ft-col-h">Empresa</div><ul><li><a href="#nosotros">Sobre nosotros</a></li><li><a href="#casos">Casos de exito</a></li><li><a href="#ecosistema">Ecosistema</a></li><li><a href="#faq">FAQ</a></li><li><a href="#contacto">Blog</a></li></ul></div>
              <div class="ft-col"><div class="ft-col-h">Contacto</div><ul><li><a href="mailto:info@consiti.com">info@consiti.com</a></li><li><a href="tel:+573000000000">+57 300 000 0000</a></li><li><a href="#contacto">Bogota, Colombia</a></li><li><a href="#contacto">Solicitar demo</a></li></ul></div>
            </div>
          </div>
          <div class="ft-bottom"><span>&copy; 2025 Grupo Consiti. Todos los derechos reservados.</span><div class="ft-legal"><a href="#privacidad">Politica de privacidad</a><a href="#">Terminos de uso</a></div></div>
        </div>
      </footer>

      {/* ── SCRIPTS ── */}
      <script dangerouslySetInnerHTML={{__html:`
        const nb=document.getElementById('navbar');
        window.addEventListener('scroll',()=>{nb.classList.toggle('scrolled',window.scrollY>50)},{passive:true});
        const bg=document.getElementById('navBurger'),nl=document.getElementById('navLinks');
        bg.addEventListener('click',()=>{nl.classList.toggle('open');bg.classList.toggle('active')});
        document.querySelectorAll('.nav-links a, .nav-actions a').forEach(a=>{a.addEventListener('click',()=>{nl.classList.remove('open');bg.classList.remove('active')})});
        const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');ro.unobserve(e.target)}})},{threshold:.08});
        document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));
        function animC(el){const t=+el.dataset.target,dur=1800,step=t/(dur/16);let c=0;const ti=setInterval(()=>{c=Math.min(c+step,t);el.textContent=Math.floor(c);if(c>=t)clearInterval(ti)},16)}
        const co=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){animC(e.target);co.unobserve(e.target)}})},{threshold:.5});
        document.querySelectorAll('.hc-num[data-target]').forEach(el=>co.observe(el));
        window.toggleFaq=function(i){const b=document.querySelector('#faq-'+i+' .faq-q'),a=document.getElementById('faq-a-'+i),o=b.getAttribute('aria-expanded')==='true';
        document.querySelectorAll('.faq-q').forEach(x=>{x.setAttribute('aria-expanded','false');x.querySelector('.faq-icon').textContent='+'});
        document.querySelectorAll('.faq-a').forEach(x=>x.classList.remove('open'));
        if(!o){b.setAttribute('aria-expanded','true');b.querySelector('.faq-icon').textContent=String.fromCharCode(8722);a.classList.add('open')}};
        const fm=document.getElementById('contactForm');if(fm)fm.addEventListener('submit',e=>{e.preventDefault();const b=fm.querySelector('.btn-submit');b.innerHTML='\\u2713 Solicitud enviada';b.style.background='#059669';b.disabled=true});
      `}}/>
    </>
  )
})

export default app
