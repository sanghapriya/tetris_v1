import React, {useState} from 'react';

import { createStage } from '../gameHelpers';

import {useStage} from '../hooks/useStage';
import {usePlayer} from '../hooks/usePlayer';

import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

import {StyledTetris,StyledTetrisWrapper} from './styles/StyledTetris';


const Tetris = () => {
    const [dropTime,setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);
    
    const movePlayer = dir => {

    }

    const startGame = () => {

    }

    const drop = () => {


    }

    const dropPlayer = () => {

    }

    const move = (keyCode) => {

    }

    return (
        <StyledTetrisWrapper role = "button" tabIndex="0" onKeyDown={ e =>move(e)}>
            <StyledTetris>

            <Stage stage={stage} />

                <aside>
                    {gameOver?
                    (<Display gameOver={gameOver} text="Game Over" />):
                    (<div>
                        <Display text = "Score" /> 
                        <Display text = "Rows" /> 
                        <Display text = "Level" /> 
                    </div>
                    )}
                    
                    <StartButton />
                </aside>

            </StyledTetris>
        </StyledTetrisWrapper>
    )
}


export default Tetris;