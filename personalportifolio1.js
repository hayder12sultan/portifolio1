:root {
  --bg-dark: #0d1b1e;
  --bg-mid: #163234;
  --bg-card: #1d3739;
  --primary: #d0c08d;
  --primary-strong: #b99552;
  --text: #edf3f1;
  --muted: rgba(237, 243, 241, 0.78);
  --border: rgba(255, 255, 255, 0.12);
  --shadow: rgba(0, 0, 0, 0.18);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: linear-gradient(180deg, var(--bg-dark) 0%, var(--bg-mid) 100%);
  color: var(--text);
  font-family: 'Open Sans', sans-serif;
  line-height: 1.7;
}

img,
iframe {
  max-width: 100%;
  display: block;
}

.navigation-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(15, 28, 29, 0.9);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(8px);
}

.nav-items {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem 1.5rem;
}

.nav-link {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: var(--primary);
}

.header-section {
  padding: 6rem 1.5rem 4rem;
  background: radial-gradient(circle at top, rgba(217, 193, 117, 0.18), transparent 40%);
}

.header-content {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow,
.section-label {
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
  color: var(--primary);
  margin-bottom: 0.75rem;
}

h1,
h2,
h3 {
  font-family: 'Cormorant Garamond', serif;
  line-height: 1.1;
  font-weight: 700;
}

h1 {
  font-size: clamp(2.8rem, 6vw, 5rem);
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2rem, 4vw, 3rem);
}

.intro {
  max-width: 640px;
  margin: 0 auto;
  font-size: 1.05rem;
  color: var(--muted);
}

section {
  padding: 2rem 1.5rem 4rem;
}

.quran-player,
.lesson-section,
.resources-section {
  max-width: 1100px;
  margin: 0 auto;
}

.section-heading {
  max-width: 760px;
  margin: 0 auto 2rem;
  text-align: center;
}

.quran-container {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 40px var(--shadow);
}

.quran-container iframe {
  width: 100%;
  min-height: 520px;
  border: 0;
}

.lesson-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 auto 2rem;
  max-width: 760px;
}

.tab-button {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.8rem 1.4rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab-button:hover,
.tab-button:focus-visible {
  border-color: var(--primary);
}

.tab-button.active {
  background: var(--primary);
  color: #132225;
  border-color: transparent;
}

.tab-content {
  display: none;
  max-width: 760px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 30px var(--shadow);
}

.tab-content.active {
  display: block;
}

.tab-content h3 {
  margin-bottom: 0.5rem;
  font-size: 2rem;
}

.resource-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.islamic-card {
  background: linear-gradient(180deg, rgba(208, 192, 141, 0.12), rgba(255, 255, 255, 0.03));
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 1.5rem;
  transition: transform 0.2s ease, border-color 0.2s ease;
  box-shadow: 0 12px 28px var(--shadow);
}

.islamic-card:hover {
  transform: translateY(-4px);
  border-color: rgba(208, 192, 141, 0.8);
}

.islamic-card h3 {
  margin-bottom: 0.75rem;
  font-size: 2rem;
}

.islamic-card p {
  color: var(--muted);
  margin-bottom: 1rem;
}

.islamic-card a {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
}

.footer {
  padding: 2rem 1.5rem 3rem;
  background: rgba(9, 18, 19, 0.8);
  border-top: 1px solid var(--border);
  text-align: center;
}

.contact-text p {
  margin-bottom: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.social-media-icons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.social-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border);
  border-radius: 50%;
  color: var(--text);
  font-size: 1.2rem;
  transition: background 0.2s ease, color 0.2s ease;
}

.social-icon:hover,
.social-icon:focus-visible {
  background: var(--primary);
  color: #132225;
}

@media (max-width: 640px) {
  .nav-items {
    gap: 1rem;
    flex-wrap: wrap;
  }

  .lesson-tabs {
    flex-direction: column;
  }

  .tab-button {
    width: 100%;
  }
}
