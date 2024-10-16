import "./style.css"
import { Button } from "../../components/Button"
import { DishesList } from "../../components/DishesList"

export function Home({dishes, deleteDish, addDish}){
    return (
        <>
            <div className="divTitle">
                <h1 className="title">Recetas</h1>
                <Button addDish={addDish}></Button>
            </div>
            <div>
                <DishesList 
                    dishes={dishes}
                    deleteDish={deleteDish}
                />
            </div>

        </>

    )
}