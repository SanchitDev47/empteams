import React from 'react'
import styled from "styled-components";

export default function Defaultpage() {
    return (
        <>
        <Container>
            <h1>COSTOM SOFTWARE SOLUTION FOR BUSINESS PROBLEMS THAT MATTER MOST</h1>
            <p>We at Techovarya, are dedicated towards fulfilling all your software and mobile app development needs, like the SaaS development services which elegantly solve real world problems faced by Small and Medium Enterprises. Over a decade of consistent performance has yielded us long lasting customers who trust us with the services they need. At Techovarya, fulfilling the needs of our clients is our priority, and we curate customized solutions based on the expectations of our clients ensuring two very important factors – high quality and cost effectiveness.

                In our journey so far, as well as moving forward, we embrace the forever learner attitude which makes our team at Techovarya lead competitively, stay committed to growth, and explore different tangents of the clientele and their demands. Techovarya will continue to innovate, curate more powerful and robust, yet highly intuitive cloud based software through our on-going research and development.

                Our sole aim is to make our customers very well pleased and content, deliver satisfying products, as well as maintaining a long-term relationship with them.
                Check out our flagship product, Abhisi</p>
        </Container>
        </>
    )
}
 
const Container = styled.div`
width:50%;
display:flex;
align-item:center;
justify-content: center;
flex-direction:column;
align-content:center;
height:100%;
background-color:white;
padding: 5%;
`;