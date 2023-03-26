import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {

    // For the Animation, we have to store the different states 

    const toRotate = ["Full stack Engineer", "Web Developer", "Java Developer"];
    // Also need to have a useEffect hook to detect when we are typing or deleting animation
    // loopNumb indicates index which word is currently displayed on the screen.
    const[loopNum, setLoopNum] = useState(0);
    // isDeleting indicates which word is being deleted aka typed out
    const[isDeleting, setIsDeleting] = useState(false);
    //which text are we showing right now - indicates portion of the word being displayed
    const[text, setText] = useState('');
    //determines how fast each letter comes after the first one is typed
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    //period arbitrarily indicate how much time passess between one extra letter being typed out
    //amount of time for transition between each word 
    const period = 2000;

    //this function will be responsible for typing and deleting
     //this useEffect will run everytime the text gets updated
    useEffect(() => {
        //the interval which the text will be updated
        let ticker = setInterval (() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        //loopNum is constantly increasing so once we go over the number of words in toRotate
        //we want to then go back to the first element
        let index = loopNum % toRotate.length;
        //need to keep track of the full text
        let fullText = toRotate[index];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)
        setText(updatedText);
        //have to determine if it is deleting
        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText===''){
            setIsDeleting(false);
            //update loop number as you need to move on to next text
            setLoopNum(loopNum+1);
            setDelta(500);
        }

    }
   
   

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Fatimah `}<span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button onClick={() => console.log('connect')}>Let's Connect! <ArrowRightCircle size={25}/></button>

                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}