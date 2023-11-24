// Firstly i Want to fetch my advice comment from api to make it work

/*----------------------------let start 🤗------------------------------*/

// // useState is a function in react which return an array in react
// import { useState } from 'react';
// import './App.css'

// function App() {
//   const [advice, setAdvice] = useState("");
//   const [count, setCount] = useState(0);

//   async function getAdvice(){
//     const res = await fetch("https://api.adviceslip.com/advice");
//     const data = await res.json();
//     // console.log(data.slip.advice);
//     /*-------*/
//     // set the setAdvice so that we can use to updata the start
//     setAdvice(data.slip.advice);
//     setCount((c) => c + 1);
//   }


//   return (
//     <>
//     <div className='container-info'>
//     <h1>{advice}</h1>

//     {/* when ever click the button the getAdvice should be called  */}
//      <button onClick={getAdvice}>Get advice</button>
//      <p>you have Read <strong>{count}</strong> piece of advice</p>
//     </div>
//     </>
//   )
// }

// export default App


/*-------------------------let see something 🤔---------------------------------*/

// second thing is that when you notice that we have no advice in your web page when you reload it you have no advice in it and of cause it started zero 🤣 so to make it work let use useEffect 

// useState is a function in react which return an array in react
import { Component, useEffect, useState } from 'react';
import './App.css'

function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    // console.log(data.slip.advice);
    /*-------*/
    // set the setAdvice so that we can use to updata the start
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getAdvice();
  }, []);


  return (
    <>
      <div className='container-info'>
        <div className="inner-box">
          <h1>{advice}</h1>
          {/* when ever click the button the getAdvice should be called  */}
          <button onClick={getAdvice}>Get advice</button>
          <Message count={count}/>
        </div>
      </div>
    </>
  )
};

export default App


// So the next thing is to make it a real word let create a new component down below


function Message(props) {
  return (
    <p>you have Read <strong>{props.count}</strong> piece of advice</p>
  // but now we have a problem we have to pass this value which is {count} into our main Component which is app but now this component as no way about the value of this variable  and that is why we pass the component by using props in my app component at the top

  )
};



// So in this project of real world application so we have useState, useEffect, props, that jsx and then we create two component