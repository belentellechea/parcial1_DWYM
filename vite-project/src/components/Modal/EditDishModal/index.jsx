import "../style.css";
import { useState } from "react";

export function EditDishModal({ editDish, visible, setVisible, dish }) {
    const [formData, setFormData] = useState(dish);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData, 
            [name]: value,
        }));
    };

    function closeModal(){
        setVisible("none"); 
    }

    async function actualizarPlato(e) {
        e.preventDefault(); 
        editDish(dish.id, formData); 
        closeModal(); 
    }

    return (
        <div className="modal" style={{display: visible}}> 
            <div className="modal-content">
            <h2>Nueva tarea</h2>
            <form id="taskForm" onSubmit={actualizarPlato}>
                <div className="columns is-mobile">
                    <div className="column">
                        <div className="box">
                            <label for="receta">Receta</label>
                            <input 
                            type="text" 
                            id="recetaInput" 
                            name="receta"
                            defaultValue={formData.name}
                            onChange={handleInputChange}/>
                        </div>

                        <div className="box">
                            <label for="imagen">Imagen</label>
                            <input 
                            type="text" 
                            id="imagenInput" 
                            name="imagen"
                            defaultValue={formData.image}
                            onChange={handleInputChange}/>
                        </div>

                        <div className="box">
                            <label for="descripcion">Descripción</label>
                            <input 
                            type="text" 
                            id="descripcionInput" 
                            name="descripcion"
                            defaultValue={formData.description}
                            onChange={handleInputChange}/>
                        </div>

                    </div>
                    <div className="column">
                        <div className="box">
                            <label for="preparacion">Preparacion</label>
                            <input 
                            type="text" 
                            id="preparacionInput" 
                            name="preparacion"
                            defaultValue={formData.preparation}
                            onChange={handleInputChange}/>
                        </div>

                        <div className="box">
                            <label for="categoria">Categoria</label>
                            <input 
                            type="text" 
                            id="categoriaInput" 
                            name="categoria"
                            defaultValue={formData.type}
                            onChange={handleInputChange}/>
                        </div>
                    </div>
                </div>
                <div className="modal-buttons">
                    <button type="button" id="cancel-button" onClick={closeModal}>
                        Cancelar
                    </button>
                    <button type="submit" id="save-button"> 
                        Guardar cambios
                    </button>
                </div>
            </form>
            </div>
        </div>
    );
}
