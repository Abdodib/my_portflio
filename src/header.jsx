import React from 'react';
import './header.css';
import myImage from'./assets/myimg.png'; // Ensure the image path is correct

export default function Header() {

    const [activeIndex, setActiveIndex] = React.useState(null);
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <>
      <nav>
        <p className="logo">ABDELALIM</p>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
             <a href={item.link}
                 className={activeIndex === index ? 'active' : ''}
              onClick={() => setActiveIndex(index)}
              >{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
<div className="star">
      <div className="whoami">
        <h1>hello <span>.</span></h1>
        <h2><span>________</span> i'm Abdelalim</h2>
        <h1>i'm a Front-end Developer</h1>

        <div className="whbtn">
          <a href='/contact' className="btn1">GET a Project?</a>
          <a href="/about" className="btn2">My resume</a>
        </div>
        </div>
        <div className="mypic">
          <div className="cyr"></div>
          <img src={myImage} alt="" className="myimg" />
        </div>
      
</div>
<div className="skils">
  <h2>HTML 5</h2>
  <h2>CSS</h2>
  <h2>JAVASCRIPT</h2>
  <h2>REACT.JS</h2>
  <h2>JAVA</h2>
  <h2>WORDPRESS</h2>
</div>
    </>
  );
}
