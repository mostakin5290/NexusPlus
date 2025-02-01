import { useState, useEffect } from "react";
import copy from "copy-to-clipboard"
import "./Main.css";

const Main = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [upperCase, setUpperCase] = useState(false);
    const [lowerCase, setLowerCase] = useState(false);
    const [digits, setDigits] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatePassword = () => {
        let charSet = "";
        let newPassword = "";

        if (upperCase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowerCase) charSet += "abcdefghijklmnopqrstuvwxyz";
        if (digits) charSet += "0123456789";
        if (symbols) charSet += "!@#$%^&*()_+{}|<>?/~";

        if (!charSet.length) {
            setPassword("Select at least one option");
            return;
        }

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charSet.length);
            newPassword += charSet[randomIndex];
        }

        setPassword(newPassword);
    };

    useEffect(() => {
        generatePassword();
    }, [length, upperCase, lowerCase, digits, symbols]);

    

    function copyBtn(){
        copy(password);
        const btn = document.querySelector(".copy-btn");
        btn.style.backgroundColor="#16cd16";    
        setInterval(() => {
        btn.style.backgroundColor="#FFEE00";    
        }, 2000);
    }

    return (
        <div className="container">
            <div className="main-panel">
                <h1>PASSWORD GENERATOR</h1>
                <div className="password-display">
                    <input type="text" value={password} readOnly className="input"/>
                    <button className="regenerate-btn" onClick={generatePassword}>
                        ⟳
                    </button>
                </div>
                <button className="btn copy-btn" onClick={copyBtn}>
                    <p>COPY PASSWORD</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
                <div className="controls">
                    <div className="length-control">
                        <label>LENGTH ({length})</label>
                        <input type="range" min="4" max="50" value={length} onChange={(e) => setLength(e.target.value)} className="silder"/>
                    </div>

                    <div className="options-grid">
                        <label className="checkbox">
                            <input type="checkbox" checked={upperCase} onChange={() => setUpperCase(!upperCase)}/>
                            <span>UPPERCASE</span>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={lowerCase}
                                onChange={() => setLowerCase(!lowerCase)}
                            />
                            <span>LOWERCASE</span>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={digits}
                                onChange={() => setDigits(!digits)}
                            />
                            <span>DIGITS</span>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={symbols}
                                onChange={() => setSymbols(!symbols)}
                            />
                            <span>SYMBOLS</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
