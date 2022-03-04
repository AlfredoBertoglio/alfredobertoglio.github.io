import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import { useContext, useRef, useState } from "react"
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

const Contact = () => {
    const formRef = useRef ()
    const [done, setDone] = useState (false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm(
          'service_f1w9obn',
          'template_xpzgd1n',
           formRef.current,
          'user_R15dwtnPHv0LcP0H1Ib2Q')
      .then((result) => {
          console.log(result.text);
          setDone (true)
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title"> Let's talk about new projects</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img src={Phone} 
                      alt="" 
                      className="c-icon"
                      />
                      +61 333 333 333
                  </div>
                  <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              alfredowebdev@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
            </div>
              </div>
          </div>
          <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. I'm available for a chat to discuss
            new challenges, and roles.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
              <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message"></textarea>
              <button>Submit</button>
              {done && "Thank You!"}
          </form>
          </div>
      </div>
    </div>
  );
}

export default Contact;
