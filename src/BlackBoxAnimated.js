import React from 'react';
import styled from 'styled-components';
import { Motion, spring } from 'react-motion';

const BlackBox = styled.div`
height: 25%;
width: 100%;
background: #000;
transform-origin: right center;
`

const BlackBoxAnimated = () => {
    return (
        <Motion
            defaultStyle={{ scaleX: 1 }}
            style={{ scaleX: spring(0) }}
        >
            {(style) =>
                <BlackBox
                    style={{
                        transform: `scaleX(${style.scaleX})`
                    }}
                />
            }
        </Motion>
    )
}

BlackBoxAnimated.prototypes = {

};

export default BlackBoxAnimated;