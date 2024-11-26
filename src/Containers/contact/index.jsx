import styles from './styles.scss';

function Contact() {
  return (
    <section id="contact" className={styles.container} style={{display:"flex",justifyContent:"center"}}>
      {/* <h1 className="sectionTitle" >Contact</h1> */}
      <form style={{marginTop:"50px"}} action=""><h1 style={{marginLeft:"70px",fontSize:"50px",color:"var(--yellow-theme-main-color)"}}>Contact Me</h1>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
          style={{width:"400px"}}
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
          style={{width:"400px"}}
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
          style={{width:"400px"}}
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;