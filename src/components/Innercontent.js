import React from 'react';
import styled from 'styled-components';

function Innercontent({ imgSrc, headingText, descriptionText, link }) {
  const openLink = () => {
    window.open(link, '_blank');
  };
  return (
    <Innercon className={`cen ${headingText}`}>
            <img src={imgSrc} alt={headingText} />

            <Heading>{headingText}</Heading>
            <Description>{descriptionText}</Description>
            <Buttont onClick={openLink}>View</Buttont>
          </Innercon>
  )
}

export default Innercontent


const Innercon = styled.div`
width: 99%;
height: 100%;
background: #7d7d7d9d;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
 width: 90%;
 height: 30%;
 border-radius: 4px;
 margin-left: 22px;
 margin-top: 38px;
}

//  border-radius: 12px;
`

const Heading = styled.div`
 height: 15%;
 width: 90%;
 margin-top: 2px;
 margin: bottom: 1px;
 margin-left: 22px;
 display: flex;
 justify-content: center;
 align-items: center;
font-weight: 600;
font-size: 30px;
`

const Description = styled.div`
height: 23%;
display: flex;
width: 90%;
justify-content: flex-start;
text-align: center;
margin-top: 1px;
margin: bottom: 1px;
font-weight: 400;
font-size: 20px;
margin-left: 22px;
`

const Buttont = styled.button`
background-color: #54a2da;
height: 10%;
width: 40%;
margin-top: 1px;
margin: bottom: 1px;
border-radius: 12px;
border: none;
cursor: pointer;
letter-spacing: 1px;
font-size: 19px;
font-weight: 600;
color: #222222;
transform-origin: left center;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


&:hover{
 color: #1b3458;
 letter-spacing: 1.5px;
 box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 18px 10px -10px;
}
`