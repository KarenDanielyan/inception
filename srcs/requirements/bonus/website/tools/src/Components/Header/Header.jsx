import { useState, useEffect } from 'react'

function Header()
{
    const handleKeyPress = (event) => {
        setText("You pressed: " + event.key)
    }

    useEffect(() => {
        window.addEventListener("keydown", handleKeyPress);
        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        }
    }, []);

    const [text, setText] = useState('React Keyboard')
    return (
        <header>
        <h1 onKeyDown={handleKeyPress}>{text}</h1>
        </header>
    )
}

export default Header