import './App.css';
import Load from './asset/load2.jpg'
import { Image, Button } from 'react-bootstrap'

function App() {
  return (
    <div> 
      <Image src={Load} className="loadImg" />
      <Button href="/login" className="startBtn">Get start</Button>
    </div>
  );
}

export default App;
