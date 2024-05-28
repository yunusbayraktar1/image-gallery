import images from './images'
import React , {useState} from 'react';
import './style.css';
function App() {

  const [selected,setSelected] = useState("https://cdn.pixabay.com/photo/2023/02/08/18/36/tawny-owl-7777285_640.jpg");

  return (
    <div className="App">
      <div className='container'>
    <img className='selected' src={selected}/>
      </div>
      <div className='imgContainer'>
    {images.map((img,index)=>(
      <img src={img} key={index} onClick={()=>setSelected(img)}/>
    ))}
      </div>
    </div>
  );
}

export default App;
