import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import BlackBoxAnimated from './BlackBoxAnimated';

const Wrapper = styled.div`

`;

const ImageBox = styled.div`
width: 50%;
height: ${(props) => props.height}px;
background: url(${(props) => props.image});
background-size: cover;
background-position: center;
`;

class ImageBoxAnimated extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            animationNumber: 0
        }

        this.setNextAnimation = this.setNextAnimation.bind(this);
        this.runAnimation = this.runAnimation.bind(this);
    }
    componentWillMount() {
        this.runAnimation();
    }
    runAnimation() {
        setTimeout(this.setNextAnimation, 0);
        setTimeout(this.setNextAnimation, 500);
        setTimeout(this.setNextAnimation, 1000);
        setTimeout(this.setNextAnimation, 1500);
        setTimeout(this.setNextAnimation, 2000);
    }

    setNextAnimation() {
        this.setState({
            animationNumber: this.state.animationNumber + 1
        })
    }

    render() {
        const { animationNumber } = this.state;
       const {  height, image } = this.props;
        //console.log(image)
        return (
            <ImageBox
               //width = {width}
                height = {height}
                image = {image}
            >
                <BlackBoxAnimated
                    heightPercentage={20}
                    reverseDirection={false}
                    startAnimation={animationNumber >= 1}
                />
                <BlackBoxAnimated
                    heightPercentage={20}
                    reverseDirection={true}
                    startAnimation={animationNumber >= 2}
                />
                <BlackBoxAnimated
                    heightPercentage={20}
                    reverseDirection={false}
                    startAnimation={animationNumber >= 3}
                />
                <BlackBoxAnimated
                    heightPercentage={20}
                    reverseDirection={true}
                    startAnimation={animationNumber >= 4}
                />
                <BlackBoxAnimated
                    heightPercentage={20}
                    reverseDirection={false}
                    startAnimation={animationNumber >= 5}
                />
            </ImageBox>
        )
    }
}

ImageBoxAnimated.PropTypes = {
    width: PropTypes.any,
    height: PropTypes.any,
    image: PropTypes.string.isRequired,
}
export default ImageBoxAnimated;