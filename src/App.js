import React, {useState} from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'

function App() {
    const [value, setValue] = useState('Text in input')

    return (
        <div className="App">
            <div className='post'>
                <div className="post__content">
                    <strong>1. Java Script</strong>
                    <div>
                        Javascript - язык программирования
                    </div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
}

export default App;
