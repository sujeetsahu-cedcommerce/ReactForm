// import logo from './logo.svg';
import './App.css';
import DarkMode from './DarkMode';
import DropDown from './DropDown';
import Textbox from './Textbox';
import UpperCase from './UpperCase';

function App() {
  return (
    <div className="App">
      <h3>Create a text box that accepts only numbers and display the same using buttons</h3>
      <Textbox/>
      <h3>Create a Text area and convert the text into uppercase using button</h3>
      <UpperCase/>
      <h3>Create a Dropdown list that has entries from 1 to 7, onchange of this dropdown the respective day must be printed</h3>
      <DropDown/>
      <h3>Create a button that converts the forms theme to dark mode/Light mode (Dark mode: Background color Black text white)</h3>
      <DarkMode/>
    </div>
  );
}

export default App;
