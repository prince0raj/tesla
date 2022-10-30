import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
// import img from '../assects/images/model-s.jpg'
const Section = ({ tittle, desc, leftbuttontittle, rightuttontext, bgimg }) => {
  return (
    <Wrap bgImg={bgimg}>
      <Fade up>
        <ItemText>
          <h1>{tittle}</h1>
          <p>{desc}</p>
        </ItemText>
        {/* </Fade> */}
        {/* <Fade up> */}
        <Buttons>
          <ButtonGroup>
            <LeftButton>
              {leftbuttontittle}
            </LeftButton>
            {rightuttontext && <RightButton>
              {rightuttontext}
            </RightButton>}
          </ButtonGroup>
          <DownArrow src='/images/down-arrow.svg' />
          {/* <img src={img} alt="" /> */}
        </Buttons>
      </Fade>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100%;
height: 100vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
background-image:${props => `url("/images/${props.bgImg}")`};
`

const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`

const ButtonGroup = styled.div`
display:flex;
justify-content:center;
margin-bottom:15px;
@media (max-width:768px){
  flex-direction: column;
}
`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:250px;
color:white;
display:flex;
justify-content:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
align-items:center;
margin:5px;
cursor:pointer;
`
const RightButton = styled(LeftButton)`
background:white;
opacity:0.75;
color:black;
`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
animation: animateDown infinite 1.5s;
`
const Buttons = styled.div`
`