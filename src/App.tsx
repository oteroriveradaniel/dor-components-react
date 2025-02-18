
import './App.css';
import Button from './components/base/Button';

function App() {
  return (
    <div className='flex-sandbox'>
      <Button 
        onClick={() => console.log("Clicked!")}
        text='Something' />
    </div>
  );
}

export default App;
