import React, { useState } from "react";

// Use your sigil PNGs/SVGs here
const sigils = [
  "/sigil1.png",
  "/sigil2.png",
  "/sigil3.png"
];

const PAGES = {
  portal: "Portal",
  spellgram: "Spellgram Offerings",
  landing: "Custom Landing Page",
  store: "Online Store",
  audio: "Frequency Audio Player",
  links: "Linktree Grid"
};

const NeonBox = ({ children }) => (
  <div className="neon-box">{children}</div>
);

const Sigil = ({ src, alt }) => (
  <img className="sigil" src={src} alt={alt} />
);

function App() {
  const [page, setPage] = useState("portal");

  const goPortal = () => setPage("portal");
  const go = (p) => () => setPage(p);

  return (
    <div className="main-bg">
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');
      body, .main-bg {
        background: linear-gradient(135deg, #160036 0%, #2e005e 100%);
        color: #fff;
        font-family: 'Orbitron', Arial, sans-serif;
        min-height: 100vh;
        padding: 0;
        margin: 0;
      }
      h1, h2 {
        color: #ff00e6;
        text-shadow: 0 0 20px #ff40ff, 0 0 38px #e300ff;
        font-size: 2.2rem;
        margin-bottom: 1.1rem;
      }
      a, .neon-link {
        color: #ff57ff;
        text-shadow: 0 0 8px #ff40ff;
        font-weight: bold;
        transition: 0.2s;
        cursor: pointer;
        text-decoration: underline;
        font-size: 1.07rem;
      }
      a:hover, .neon-link:hover {
        color: #bd53f6;
        text-shadow: 0 0 18px #ff90ff, 0 0 40px #c499ff;
      }
      .sigil {
        display: block;
        margin: 20px auto 22px auto;
        width: 140px;
        filter: drop-shadow(0 0 40px #ff00ff) drop-shadow(0 0 90px #ad00ff);
        border-radius: 50%;
        background: rgba(80, 0, 80, 0.13);
        padding: 5px;
      }
      .neon-box {
        border: 2px solid #ff00e6;
        border-radius: 30px;
        padding: 26px 18px 18px 18px;
        background: rgba(25, 0, 32, 0.6);
        box-shadow: 0 0 44px #ff00e6, 0 0 72px #9000ff;
        margin: 28px auto 38px auto;
        max-width: 410px;
      }
      ul {
        padding-left: 1.7em;
      }
      li {
        margin-bottom: 0.48em;
        font-size: 1.08em;
      }
      .back {
        margin-top: 15px;
        display: inline-block;
      }
      .logo {
        width: 60px;
        margin: 0 auto 16px auto;
        display: block;
        filter: drop-shadow(0 0 22px #ff00e6);
      }
      .platforms-list {
        list-style: none;
        padding: 0;
        margin: 1.2em 0 0 0;
      }
      .platforms-list li {
        margin-bottom: 0.7em;
      }
      `}</style>
      <div style={{maxWidth: 600, margin: "auto", paddingTop: 28}}>
        <img src={sigils[1]} alt="Portal Sigil" className="logo"/>
        <h1>🌀 Welcome to Jamie’s Portal 🌀</h1>
        {page === "portal" && (
          <NeonBox>
            <p>More magic coming soon...</p>
            <Sigil src={sigils[0]} alt="Glowing Sigil 1"/>
            <p style={{fontSize: "1.13em", margin: "18px 0 8px 0"}}>Select your destination:</p>
            <ul>
              <li><span className="neon-link" onClick={go("spellgram")}>Spellgram Offerings</span></li>
              <li><span className="neon-link" onClick={go("landing")}>Custom Landing Page</span></li>
              <li><span className="neon-link" onClick={go("store")}>Online Store</span></li>
              <li><span className="neon-link" onClick={go("audio")}>Frequency Audio Player</span></li>
              <li><span className="neon-link" onClick={go("links")}>Linktree Grid</span></li>
            </ul>
          </NeonBox>
        )}
        {page === "spellgram" && (
          <NeonBox>
            <h2>Spellgram Offerings</h2>
            <Sigil src={sigils[2]} alt="Glowing Sigil 2"/>
            <p>Coming soon: Custom digital spells, sigils, and ritual tools.</p>
            <div className="back neon-link" onClick={goPortal}>← Back to Portal</div>
          </NeonBox>
        )}
        {page === "landing" && (
          <NeonBox>
            <h2>Custom Landing Page</h2>
            <Sigil src={sigils[1]} alt="Glowing Sigil 3"/>
            <p>This is your energetic anchor online.<br/>We’ll keep building it.</p>
            <div className="back neon-link" onClick={goPortal}>← Back to Portal</div>
          </NeonBox>
        )}
        {page === "store" && (
          <NeonBox>
            <h2>Online Store</h2>
            <Sigil src={sigils[0]} alt="Glowing Sigil 1"/>
            <p>Soon you’ll be able to sell your spellgrams, crystals, or energy tools here.</p>
            <div className="back neon-link" onClick={goPortal}>← Back to Portal</div>
          </NeonBox>
        )}
        {page === "audio" && (
          <NeonBox>
            <h2>Frequency Audio Player</h2>
            <Sigil src={sigils[2]} alt="Glowing Sigil 2"/>
            <p>Play healing tones and encoded tracks here soon.</p>
            <div className="back neon-link" onClick={goPortal}>← Back to Portal</div>
          </NeonBox>
        )}
        {page === "links" && (
          <NeonBox>
            <h2>Linktree Grid</h2>
            <Sigil src={sigils[1]} alt="Glowing Sigil 3"/>
            <p>All your platforms in one place.</p>
            <ul className="platforms-list">
              <li><a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://substack.com/" target="_blank" rel="noopener noreferrer">Substack</a></li>
              <li><a href="https://t.me/" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="https://ghost.org/" target="_blank" rel="noopener noreferrer">Ghost Blog</a></li>
            </ul>
            <div className="back neon-link" onClick={goPortal}>← Back to Portal</div>
          </NeonBox>
        )}
      </div>
    </div>
  );
}

export default App;
