import { Dish } from "../Dish"
import "./style.css"

export function DishesList({ dishes, deleteDish }) {

    return (
        <>
            <div className="cards-container is-mobile">
                {dishes.map(dish => (
                    <Dish
                    key={dish.id} 
                    id={dish.id}
                    imagen={dish.image} 
                    receta={dish.name} 
                    categoria={dish.type} 
                    deleteDish={deleteDish} />
                ))}
            </div>
        </>
    )
} 