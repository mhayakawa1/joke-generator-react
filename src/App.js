//https://github.com/15Dkatz/official_joke_api
import React, {useState, useEffect} from 'react';

function App (){
  const [setup, setSetup] = useState('');
  const [punchline, setPunchline] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    apiGet();
  }, []);

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
  };

  const toggle = () => {
    setShow(true);
  };

  return(
    <div className='container'>
      <h1>Random Joke Generator</h1>

      <div className='buttons'>
        <button onClick={apiGet}>New Joke</button>
        <button onClick={() => toggle()}>See Punchline</button>
      </div>

      <div style={{height: '30%'}} className='text-container'>
        <p className='setup'>{setup}</p>
        {show === true ? (<p className='punchline'>{punchline}</p>) : (<p className='punchline'></p>)}      
      </div>      
    </div>
  )
}
export default App;