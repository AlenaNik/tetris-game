import styled from 'styled-components';

export const StyledDisplay = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
margin: 0 0 20px 0;
padding: 20px;
border: 4px solid hotpink;
min-height: 10px;
width: 80%;
border-radius: 20px;
color: ${props => (props.gameOver ? 'hotpink' : 'white')};
background: #000;
font-family: Pixel, Arial, Helvetica, sans-serif;
font-size: 0.8em;
`