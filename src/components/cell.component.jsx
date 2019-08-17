import React from 'react';
import {StyledCell} from "./styles/StyledCell.styles";
import { TETROMINOS} from "../tetrominos";

const Cell = ({ type }) => (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}/>
)

export default Cell;
