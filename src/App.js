// import logo from './logo.svg';
import './App.css';
import Textbox from './Textbox';
import UpperCase from './UpperCase';

function App() {
  return (
    <div className="App">
      <h3>Create a text box that accepts only numbers and display the same using buttons</h3>
      <Textbox/>
      <h3>Create a Text area and convert the text into uppercase using button</h3>
      <UpperCase/>
    </div>
  );
}

export default App;
