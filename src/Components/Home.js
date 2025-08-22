import React from "react";
import { Carousel, Container } from "react-bootstrap";
import image1 from "./ironman.jpg";
import image2 from "./spider.jpg";
import image3 from "./tony.jpg";
function Home()
{
    return (
        <>
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100" src={image1} alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={image2} alt="Second slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={image3} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
        <Container className="mt-5 text-center">
            <h2 className="section-title">About Me</h2>
            <p className="fs-5 text-muted px-4">
                Hey there! I'm Hemant, a passionate and curious learner currently diving deep into Java Full Stack Development. I love building clean and functional web applications, and I’m always looking to learn something new every day. When I'm not coding, you might find me exploring music, watching thrillers, or just learning cool tech stuff. My goal is to grow as a developer, work on meaningful projects, and collaborate with amazing people.
            </p>
        </Container>
        </>
    );
}

export default Home;