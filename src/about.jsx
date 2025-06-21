import React from "react";

import java from "./assets/java.png";
import wordpress from "./assets/wordpress.png";
import front from "./assets/front.png";
import "./about.css";
export default function About() {
  return (
<div className="about" id="about">
<div className="left">
    <div className="leftb">
        <img src={front} alt=""  width={100}/>
<h2>Front_End devloper</h2>
    </div>
<h2 className="dot"></h2>
    <div className="leftb">
        <img src={wordpress} alt="" width={100} />
<h2>Wordpres Devlopement</h2>
    </div>
    <h2 className="dot"></h2>
    <div className="leftb">
        <img src={java} alt="" width={60} style={{ paddingLeft: '10px' }} />

<h2>java fx/swing devlopment</h2>
    </div>
</div>
<div className="right">
    <h1>About me</h1>
    <p>I am a passionate and versatile developer specializing in front-end web development, WordPress customization, and desktop application development with Java. With a strong foundation in HTML, CSS, JavaScript, and modern libraries and freamwork like React, I create responsive, user-friendly interfaces that bring ideas to life. As a WordPress developer, I build custom themes and plugins tailored to business needs. On the desktop side, I develop powerful software solutions using Java Swing and JavaFX, offering intuitive UI and smooth functionality. My goal is to deliver clean, efficient, and scalable solutions that meet both client and user expectations.</p>
</div>
</div>    
  
)};
