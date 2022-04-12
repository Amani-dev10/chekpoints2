import logo from './logo.svg';
import './App.css';
import img from './image1.jpg'

function App() {
  return (
    <div className="App">

<div style={{border:"solid 1px black"}} >

 <h1 className='title red'>Your name here</h1>

 <br/>

 <img src={img} />

 <br/>

 <img src="logo192.png" />

</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>

    </div>
  );
}

export default App;
