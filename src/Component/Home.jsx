import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
        tittle="Model S" desc="Order Online For touchless Delivery" bgimg="model-s.jpg" leftbuttontittle="Custom Order" rightuttontext="Existing Inventory"/>
        <Section 
        tittle="Model Y" desc="Order Online For touchless Delivery" bgimg="model-y.jpg" leftbuttontittle="Custom Order" rightuttontext="Existing Inventory"/>
        <Section 
        tittle="Model X" desc="Order Online For touchless Delivery" bgimg="model-x.jpg" leftbuttontittle="Custom Order" rightuttontext="Existing Inventory"/>
        <Section 
        tittle="Model 3" desc="Order Online For touchless Delivery" bgimg="model-3.jpg" leftbuttontittle="Custom Order" rightuttontext="Existing Inventory"/>
        <Section 
        tittle="Lowest Cost Solar Pannel in India" desc="Money Back Guarantee" bgimg="solar-panel.jpg" leftbuttontittle="Order now" rightuttontext="Learn more"/>
        <Section 
        tittle="Solar of New Roof" desc="Solar Roof Cost Less than New Roof Plus Solar panels" bgimg="solar-roof.jpg" leftbuttontittle="Order now" rightuttontext="Learn more"/>
        <Section 
        tittle="Accesories" desc="" bgimg="accessories.jpg" leftbuttontittle="Order now" />
    </Container>
  )
}

export default Home

const Container= styled.div`
height:100vh;
`