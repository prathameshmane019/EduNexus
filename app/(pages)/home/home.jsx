'use client'
import { useState, useEffect } from "react";
import { Container,  Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);

  const toRotate = [  "EduNexus", "Smart Education", "Web Development" ];
  const period = 2000;

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
    <section className="banner flex flex-row justify-center" id="home">
      <Container>
      
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
               
                <h1 className="ml-28">{`Hi! Welcome to`} <span className="txt-rotate" dataperiod="1500" data-rotate='[ "Abhiyantrika", "Web Development", "App Development" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="ml-14">"Discover an online hub where students from Indian universities and colleges showcase their projects. Fostering collaboration, innovation, and academic integrity, we unite academia's brightest minds."</p>
                  </div>}
            </TrackVisibility>
          </Col>
         
        
      </Container>
    </section>
  )
}
