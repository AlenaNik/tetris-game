import React from 'react';
import { createStage } from "../gameHelpers";
import Stage from './stage.component';
import Display from './display.component';
import StartButton from './start-button.component';

const Tetris = () => {

return (
    <div>
        <Stage stage={createStage()}/>
        <aside>
            <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
            </div>
            <StartButton />
        </aside>
    </div>
);
};
export default Tetris;