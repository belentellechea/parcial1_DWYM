import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { Home } from './pages/Home'
import { Details } from './pages/Details';
import axios from "axios";
import { useState, useEffect } from "react";

const url= `http://localhost:3000/dishes`;

function App() {
  const [dishes, setDishes] = useState([]);

  async function fetchDishes() {
    try {
      const response = await axios.get(url);
      setDishes(response.data); 
    } catch (error) {
      console.error('Error fetching dishes:', error);
    }
  }

  useEffect(() => {
    fetchDishes();
  }, []);

  async function postDish(dish) {
    try {
      const response = await axios.post(url, dish); 
      setDishes([...dishes, response.data]); 
    } catch (error) {
      console.log("Error posting dish: ", error); 
    }
  }

  async function deleteDish(id) {
    try {
      await axios.delete(`${url}/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      console.log("Error deleting dih: ", error)
    }
  }

  function deleteHandler(id) {
    deleteDish(id); 
    setDishes([...dishes.filter(dish => dish.id !== id)]); 
  }

  async function updateDish(id, formData) {
    try {
      const response = await axios.patch(`${url}/${id}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
      });
      setDishes(prevDishes => 
        prevDishes.map(dish => dish.id === id ? response.data : dish)
      );
    } catch (error) {
      console.log("Error updating task: ", error); 
    }
  }

  return (
    <>
      <Router> 
        <div className="app">
  
        <Routes>
          <Route path="/*" element={<Navigate replace to="/"/>} />
          <Route path="/" element={<Home 
            dishes={dishes} 
            deleteDish={deleteHandler}
            addDish={postDish}
            />} />
          <Route path="/dishes/:id" element={<Details editDish={updateDish}/>} />
        </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
