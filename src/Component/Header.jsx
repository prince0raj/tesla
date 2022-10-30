import React from 'react'
import styled from 'styled-components'
import { GrMenu } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';
import { useState } from 'react';

const Header = () => {
  const [value, setvalue] = useState(false);
  return (
    <div>
      <Container>
        <a>
          <img src="/images/logo.svg" alt="" />
        </a>
        <Menu>
          <a href="#">Model-S</a>
          <a href="#">Model-X</a>
          <a href="#">Model-Y</a>
          <a href="#">Model-3</a>
        </Menu>
        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
          <Hamburger show={value} onClick={() => setvalue(true)} />
        </RightMenu>
        <HamBur show={value}>
          <CrossButton>
            <Cross onClick={() => setvalue(false)} />
          </CrossButton>
          <li><a href="#">Model-S</a></li>
          <li><a href="#">Model-X</a></li>
          <li><a href="#">Model-Y</a></li>
          <li><a href="#">Model-3</a></li>
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadstar</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Semi</a></li>
        </HamBur>
      </Container>
    </div>
  )
}

export default Header;

const Container = styled.div`
  min-height:60px;
  display:flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 20px;
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index:1;
`
const Menu = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex:1;
    @media (max-width:760px){
      display:none;
    }
    a{
      font-weight:600;
      text-transform:uppercase;
      padding:0 10px;
    }
`

const RightMenu = styled.a`
display:flex;
align-items: center;
a{
  font-weight:600;
  text-transform:uppercase;
  margin-right:10px;
}

`

const Hamburger = styled(GrMenu)`
cursor:pointer;
font-size:1.1rem;
margin-left:5px;
opacity:${(props) => props.show ? '0' : '1'};
transition:opacity 0.9s;

`

const HamBur = styled.div`
box-shadow: 0 0 5px #00000033;
  display:flex;
  flex-direction:column;
  position:fixed;
  right:0;
  top:0;
  bottom:0;
  background:white;
  padding:20px;
  width:250px;
  z-index:20;
  transform:${(props) => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition:transform 0.2s;
  li{
    text-align:start;
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
      font-weight:600;
    }
  }
  li a:hover{
    color:#393c41ad;
    transition:color 0.2s ease;
  }
`

const Cross = styled(GrClose)`
cursor:pointer;
`
const CrossButton = styled.div`
display:flex;
justify-content:flex-end;
`