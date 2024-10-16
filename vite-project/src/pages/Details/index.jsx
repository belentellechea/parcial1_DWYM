import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./style.css"
import { EditDishModal } from '../../components/Modal/EditDishModal';

const url= `http://localhost:3000/dishes`;

export function Details({editDish}) {
    const { id } = useParams(); 
    const [dish, setDish] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [visible, setVisible] = useState("none")

    const navigate = useNavigate(); 

    useEffect(() => {
        async function fetchDishDetails() {
        try {
            const response = await axios.get(`${url}/${id}`);
            setDish(response.data); 
        } catch (error) {
            console.error("Error fetching dish details:", error);
        } finally {
            setLoading(false); 
        }
        }
        fetchDishDetails();
    }, [id]);
    
    function goBackHome() {
        navigate(`/`);
    }

    function openModal(){
        setVisible("block"); 
    }

    return (
        !isLoading && <div>
            <button className="button backButton" onClick={goBackHome}>Atrás</button>
            <div className='info'>
                <div className='divTitle2'>
                    <h1 className='title title-is-1'><strong>Detalles</strong></h1>
                    <p className='imagen'>{dish?.image}</p>
                </div>
                <p><strong>Receta: </strong>{dish?.name}</p>
                <p><strong>Descripción: </strong>{dish?.description}</p>
                <p><strong>Preparación: </strong>{dish?.preparation}</p>
                <p><strong>Categoría: </strong>{dish?.type}</p>
            </div>
            <div className='editDiv'>
                <button className='button editButton' onClick={openModal}>Editar</button>
            </div>
            <EditDishModal 
                visible={visible} setVisible={setVisible}
                editDish={editDish} dish={dish}
            />
        </div>
    );
}
