import "../style.css"
import { useRef } from "react";

export function AddDishModal({visible, setVisible, addDish}){

    function addDishes(e) {
        e.preventDefault(); 

        const newDish = {
            name: e.target.receta.value,
            description: e.target.descripcion.value, 
            type: e.target.categoria.value,
            image: e.target.imagen.value, 
            preparation: e.target.preparacion.value,
        }
        
        addDish(newDish); 
        closeModal(); 
    }

    function closeModal(){
        setVisible("none"); 
    }

    return (
        <div className="modal" style={{display: visible}}> 
            <div className="modal-content">
            <h2>Nueva tarea</h2>
            <form id="taskForm" onSubmit={addDishes}>
                <div className="columns is-mobile">
                    <div className="column">
                        <div className="box">
                            <label for="receta">Receta</label>
                            <input type="text" id="recetaInput" name="receta"/>
                        </div>

                        <div className="box">
                            <label for="imagen">Imagen</label>
                            <input type="text" id="imagenInput" name="imagen"/>
                        </div>

                        <div className="box">
                            <label for="descripcion">Descripción</label>
                            <input type="text" id="descripcionInput" name="descripcion"/>
                        </div>

                    </div>
                    <div className="column">
                        <div className="box">
                            <label for="preparacion">Preparacion</label>
                            <input type="text" id="preparacionInput" name="preparacion"/>
                        </div>

                        <div className="box">
                            <label for="categoria">Categoria</label>
                            <input type="text" id="categoriaInput" name="categoria"/>
                        </div>
                    </div>
                </div>
                <div className="modal-buttons">
                    <button type="submit" id="accept-button">Agregar</button>
                    <button onClick={closeModal}>Cancelar</button>
                </div>
            </form>
            </div>
        </div>
    );
}