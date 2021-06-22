import './App.css';
import { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



function App() {


  const [value, setValue] = useState("");
  const [data, setData] = useState([])
  const [btnValue, setBtnValue] = useState("ADD")

  function set() {
    let index = data.findIndex((item) => item.editMode === true);

    if (data.length == 0 || index == -1) {
      setData([
        ...data, {
          text: value,
          editMode: false
        }
      ])
      setValue("");
    }
    else {

      let newData = [...data];
      newData[index].text = value;
      newData[index].editMode = false;

      setData(newData);

      setBtnValue("ADD");
      setValue("");

    }


  }



  function chandeEditMode(index) {
    let newData = [...data];
    newData[index].editMode = true;
    setValue(newData[index].text);
    setBtnValue("EDIT");

    setData(newData);

  }


  function remove(index) {
    let newData = [...data];

    newData.splice(index, 1);

    setData(newData);
  }


  return (
    < div className="App d-flex justify-content-center align-items-center" >
      <div className="main d-flex flex-column align-items-center">
        <h1 className="mt-4">ToDo App</h1>

        <div className="form d-flex justify-content-between align-items-center">
          <input type="text" placeholder="ADD YOUR TASK ..." className="input" onInput={(e) => setValue(e.target.value)} value={value} />
          <button className="btn" onClick={set}>{btnValue}</button>
        </div>

        <div className="div-card">
          {
            data.map((item, index) => (
              <div key={index} className="cards d-flex justify-content-between align-items-center">
                <div>
                  <p className="title">{item.text}</p>
                </div>
                <div className="icons">
                  <MdDelete style={{ fontSize: '1.8rem', cursor: 'pointer' }} onClick={() => (remove(index))} />
                  <FaEdit style={{ fontSize: '1.8rem', cursor: 'pointer' }} onClick={() => (chandeEditMode(index))} />
                </div>
              </div>
            ))
          }

        </div>


      </div>
    </div >
  );
}

export default App;
