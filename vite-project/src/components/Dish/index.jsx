import { useNavigate } from 'react-router-dom';
import "./style.css"

export function Dish(props){

    const navigate = useNavigate(); 

    function deleteDish() {
        props.deleteDish(props.id);
    };

    function goToDetails() {
        navigate(`/dishes/${props.id}`);
    }

    return (
        <div className="card" id={props.id}>
            <div className="card-header">
                <p className='imagenReceta'>{props.imagen}</p>
            </div>
            <div className="card-content">
                <div className='info-container'>
                    <p>{props.image}</p>
                    <p><strong>Receta: </strong>{props.receta}</p>
                    <p><strong>Comida: </strong>{props.categoria}</p>
                </div>
                <div className="button-container">
                    <button className="detailsButton" onClick={goToDetails}>Detalles</button>
                    <button className="deleteButton" onClick={deleteDish}>Eliminar</button>
                </div>
            </div>
        </div>
    )
}