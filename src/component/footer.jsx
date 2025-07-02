import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import "../style/footer.css"; 

export default function Footer() {
  return (
    <footer className="footer">
      <h2>Abdelalim Dib</h2>
      <p>Designed with love, all rights reserved for Jensen Omega.</p>
      <div className="social-icons">
        <a href="mailto:abdelalimedib@gmail.com" target="_blank" rel="noopener noreferrer">
        <Mail size={32} />
        </a>

        <a href="https://github.com/Abdodib" target="_blank" rel="noopener noreferrer">
          <Github size={32} />
        </a>
        <a href="https://www.linkedin.com/in/abdelalim-dib-598170324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <Linkedin size={32} />
        </a>
      </div>
    </footer>
  );
}
