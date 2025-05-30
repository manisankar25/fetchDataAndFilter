import { useState, useEffect, use } from 'react';
import './App.css';
import SearchFun from './SearchFun';
import DataGridContainer from './DataGridContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Parent from './Parent';

function App() {

  const [data, setData]= useState([])
  const [searchInput, setSearchInput] = useState("")

  const handleSearchInput = (val)=>{
    console.log('ddd', val)
    setSearchInput(val)
    const resdata= data.filter(item=>item.name=== searchInput) 
    setData(resdata)
  }
  

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
      .then(res => setData(res))
  }, [])

  console.log('fff',data)
  return (
    <div >
      {/* <SearchFun searchInput={searchInput} handleSearchInput={handleSearchInput}></SearchFun>
      <DataGridContainer data={data}></DataGridContainer> */}

      <div>test dev1</div>
      <div>test dev2</div>
      <Parent></Parent>
    </div>
  );
}

export default App;
