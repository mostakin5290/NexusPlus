import React, { useEffect, useState } from 'react'

const PasswordGenarator = () => {
    const [password,setpassword] = useState("");
    const [length,setLength] = useState(8);
    const [upperCase,setUpperCase] = useState(false);

    function generatePassword(){
        let str = "";
        let newPassword = "";
        if(upperCase) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";


        if(str==""){
            setpassword("Select at least one option");
            return;
        }

        for(let i = 0; i<length;i++){
            const random = Math.floor(Math.random()* str.length);
            newPassword += str[random];
        }

        setpassword(newPassword);
    }

    useEffect(()=>{
        generatePassword();
    },[length,upperCase]);
    return (
        <div className="container">
            <div className="main-panel">
                <h1>PASSWORD GENERATOR</h1>
                <div className="password-display">
                    <input type="text" readOnly className="input" value={password}/>
                    <button className="regenerate-btn">
                        ⟳
                    </button>
                </div>
                <button className="btn copy-btn">
                    <p>COPY PASSWORD</p>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
                <div className="controls">
                    <div className="length-control">
                        <label>LENGTH </label>
                        <input type="range" min="4" max="50" className="silder" value={length} onChange={(e)=>setLength(e.target.value)}/>
                    </div>

                    <div className="options-grid">
                        <label className="checkbox">
                            <input type="checkbox" checked={upperCase} onChange={()=>setUpperCase(!upperCase)}/>
                            <span>UPPERCASE</span>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                            />
                            <span>LOWERCASE</span>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                            />
                            <span>DIGITS</span>
                        </label>
                        <label className="checkbox">
                            <input
                                type="checkbox"
                            />
                            <span>SYMBOLS</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordGenarator
