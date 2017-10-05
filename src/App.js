import React, { Component } from 'react';
import styled from 'styled-components';
import ImageBoxAnimated from './imageBoxAnimated';
import baobabImage from './assets/baobabImage.jpg';
import cameleon from './assets/cameleon.jpg';
import lemur from './assets/lemur.jpg';
import seaside from './assets/seaside.jpg';

const Wrapper = styled.div`
  display: flex;
  width: 100%
`

class App extends React.Component {

  render() {
    return (
      <div>
        <Wrapper>
          <ImageBoxAnimated
            image={baobabImage}
            height={400}
          />
          <ImageBoxAnimated
            image={lemur}
            height={400}
          />
          </Wrapper>
          <Wrapper>
            <ImageBoxAnimated
              image={cameleon}
              height={400}
            />
            <ImageBoxAnimated
              image={seaside}
              height={400}
            />
          </Wrapper>
        </div>
      
        );
  }
}

export default App;
