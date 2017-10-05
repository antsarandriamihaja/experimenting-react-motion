import React, { Component } from 'react';
import styled from 'styled-components';
import baobabImage from './assets/baobabImage.jpg';

import BlackBoxAnimated from './BlackBoxAnimated';
const Wrapper = styled.div`

`

const ImageBox = styled.div`
width: 600px;
height: 400px;
background: url(${baobabImage});
background-size: cover;
background-position: center;
`


class App extends Component {
  render() {
    return (
      <Wrapper>
        <ImageBox>
          <BlackBoxAnimated/>
          <BlackBoxAnimated/>
          <BlackBoxAnimated/>
          <BlackBoxAnimated/>
        </ImageBox>
      </Wrapper>
    );
  }
}

export default App;
