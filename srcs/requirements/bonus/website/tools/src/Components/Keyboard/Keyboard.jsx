import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Keyboard.css";

function Key({ letter }) {
    const key = letter;
    const [active, setActive] = useState(false);

    const handleKeyDown = (event) => {
        if (event.key === key || event.key === key.toLowerCase() || event.key === key.toUpperCase()) {
            setActive(true);
        }
        else if (event.key === ' ' && key === 'Space') {
            setActive(true);
        }
        else if (event.key === 'Control' && key === 'Ctrl') {
            setActive(true);
        }
    }
    const handleKeyUp = (event) => {
        if (event.key === key || event.key === key.toLowerCase() || event.key === key.toUpperCase()) {
            setActive(false);
        }
        else if (event.key === ' ' && key === 'Space') {
            setActive(false);
        }
        else if (event.key === 'Control' && key === 'Ctrl') {
            setActive(false);
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        }
    }, [handleKeyDown, handleKeyUp]);

    return (
        <button className={"button" + `${active? ' active' : ''}`}
        onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
            {key}
        </button>
    );
}

Key.propTypes = {
    letter: PropTypes.string.isRequired
}

function Keyboard() {
    return (
        <div className="keyboard">
            <div className="r1">
                <Key letter={'`'} /> <Key letter={'1'} /> <Key letter={'2'} />
                <Key letter={'3'} /> <Key letter={'4'} /> <Key letter={'5'} />
                <Key letter={'6'} /> <Key letter={'7'} /> <Key letter={'8'} />
                <Key letter={'9'} /> <Key letter={'0'} /> <Key letter={'-'} />
                <Key letter={'='} />
            </div>
            <div className="r2">
                <Key letter={'Tab'} />
                <Key letter={'Q'} /> <Key letter={'W'} /> <Key letter={'E'} />
                <Key letter={'R'} /> <Key letter={'T'} /> <Key letter={'Y'} />
                <Key letter={'U'} /> <Key letter={'I'} /> <Key letter={'O'} />
                <Key letter={'P'} /> <Key letter={'['} /> <Key letter={']'} />
                <Key letter={'\\'} />
            </div>
            <div className="r3">
                <Key letter={'CapsLock'} />
                <Key letter={'A'} /> <Key letter={'S'} /> <Key letter={'D'} />
                <Key letter={'F'} /> <Key letter={'G'} /> <Key letter={'H'} />
                <Key letter={'J'} /> <Key letter={'K'} /> <Key letter={'L'} />
                <Key letter={';'} /> <Key letter={'\''} /> <Key letter={'Enter'} />
            </div>
            <div className="r4">
                <Key letter={'Shift'} />
                <Key letter={'Z'} /> <Key letter={'X'} /> <Key letter={'C'} />
                <Key letter={'V'} /> <Key letter={'B'} /> <Key letter={'N'} />
                <Key letter={'M'} /> <Key letter={','} /> <Key letter={'.'} />
                <Key letter={'/'} /> <Key letter={'Shift'} />
            </div>
            <div className="r5">
                <Key letter={'Ctrl'} />
                <Key letter={'Fn'} />
                <Key letter={'Win'} /> <Key letter={'Alt'} />
                <Key letter={'Space'} />
                <Key letter={'Alt'} />
                <Key letter={'Ctrl'} />
            </div>
        </div>
    );
}

export default Keyboard;
