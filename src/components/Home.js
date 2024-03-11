import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider'
function Home() {
  return (
    <Container>
        <ImgSlider />
    </Container>
  )
}

export default Home

const Container = styled.main`
min-height: calc(95vh - 90px);
padding: 0 calc(3.5vw + 5px);
position: relative;
overflow-y: hidden;

`