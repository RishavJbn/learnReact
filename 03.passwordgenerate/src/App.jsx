import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  //password generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_+{}|[]>?/><";

    for(let i = 0;i<length; i++){
     let char = Math.floor(Math.random()*str.length +1);
      pass +=str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyClipboard = ()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  //useRef hook
  useEffect(()=> {passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <div className="bg-gray-900 w-[800px] flex justify-center items-center flex-col rounded-2xl ">
      <h1 className="text-3xl text-pink-500 text-center mb-1 p-1">
        Password Generetor
      </h1>
      <div className="text-2xl ">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          readonly
          className="bg-white w-[460px] text-orange-400 my-2 p-1 rounded-l-lg text-2x"
        />
        <button onClick={copyClipboard} className="bg-blue-400 my-2 p-1 shrink-0 rounded-r-lg  text-white">
          copy
        </button>
      </div>
      <div className="text-amber-200 flex gap-2">
        <input
          type="range"
          min={8}
          max={32}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
        />
        <label>length: {length}</label>
        <input
          type="checkbox"
          defaultValue={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
        />
        <label>Number</label>
        <input
          type="checkbox"
          defaultValue={charAllowed}
          onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
        />
        <label>Character</label>
      </div>
    </div>
  );
}
export default App;
