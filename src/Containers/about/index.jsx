import React from "react";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image6 from "../../images/image6.jpeg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
//import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './styles.scss';

const About = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "'Web Developer'", "'Java Developer'", "'Mern Developer'" ];
  const period = 2000;

  const handleNavigate=()=>{
    window.location.href = "http://localhost:3000/contact"
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""} style={{display:"flex",justifyContent:"center"}}>
                  <img src={Image6} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                {/* <span className="tagline">Welcome to my Portfolio</span> */}
                <h1 style={{display:"flex",justifyContent:"center",color:"var(--yellow-theme-main-color)"}}>{`Hi! I'm Ritik Gupta`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Java Developer", "Mern Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p style={{marginLeft:"30px"}}>I am Ritik Gupta, Aspiring Java and Mern Stack Developer, Post-graduated in Master's in Computer Application(MCA) from Guru Gobind Singh Indraprastha University(USICT).I have learned multiple languages and framework throughout my academics like React.js, Express.js, MongoDB, Java, JavaScript, Mysql, and Node.js.Beyond academics I have my interests in playing cricket and badminton.</p>
                  <button onClick={handleNavigate}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About;
