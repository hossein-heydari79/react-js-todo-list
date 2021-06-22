import './App.css';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



function App() {
  return (
    <div className="App d-flex justify-content-center align-items-center">
      <div className="main d-flex flex-column align-items-center">
        <h1 className="mt-4">ToDo App</h1>

        <form className="form d-flex justify-content-between align-items-center">
          <input type="text" placeholder="ADD YOUR TASK ..." className="input" />
          <button className="btn">ADD</button>
        </form>


        <div className="cards d-flex justify-content-between align-items-center">
          <div>
            <p className="title">salam</p>
          </div>
          <div className="icons">
            <MdDelete style={{ fontSize: '1.8rem' }} />
            <FaEdit style={{ fontSize: '1.8rem' }} />
          </div>
        </div>



      </div>
    </div >
  );
}

export default App;
