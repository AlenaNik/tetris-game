import React, {useState} from 'react';

import {usePlayer} from "../hooks/usePlayer";
import {useStage} from "../hooks/useStage";

import { StyledTetrisWrapper, StyledTetris} from "./styles/StyledTetris";
import Stage from './stage.component';
import Display from './display.component';
import StartButton from './start-button.component';

const Tetris = () => {
    const [ dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');

return (
    <StyledTetrisWrapper>
        <StyledTetris>
        <Stage stage={stage}/>
        <aside>
            {gameOver ? (
                <Display gameOver={gameOver} text="Game Over"/>) :
                (
            <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
            </div>
                )}
            <StartButton />
        </aside>
        </StyledTetris>
    </StyledTetrisWrapper>
);
};
export default Tetris;