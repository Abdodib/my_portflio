
import "../style/contact.css";

export default function Contact(){
    return (
      <form action="">
         <div className="contact-container" id="contact">
      <div className="contact-left">
        <h4>Contacts</h4>
        <h1>Have a project?<br />Let's talk!</h1>
        <button type="submit">Submit</button>
      </div>
      <div className="contact-right">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
        </form>
      </div>
    </div>
   
      </form>
  );
}
