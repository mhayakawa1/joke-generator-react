//https://github.com/15Dkatz/official_joke_api


import React, {useState} from 'react';


function App (){
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [show, setShow] = useState(false);


  const apiGet = () => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((response) => response.json())
      .then(data => {
        console.log(data)
        setSetup(data.setup)
        setPunchline(data.punchline)
        setShow(false)
      })
      .catch(err=>console.log(err))
  }


  const toggle = () => {
    setShow(true);
  };


  return(
    <div>
      <h1>Random Joke Generator</h1>
      <div className='buttons'>
        <button onClick={apiGet}>New Joke</button>
        <button onClick={() => toggle()}>See Punchline</button>
      </div>
     
      <p className='setup'>{setup}</p>


      {show === true ? (<p className='punchline'>{punchline}</p>) : (<p></p>)}


    </div>
  )
}
export default App;