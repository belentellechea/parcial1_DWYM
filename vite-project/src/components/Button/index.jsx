import { useState } from "react";
import { AddDishModal } from "../Modal/AddDishModal";
import "./style.css"

export function Button({addDish}) {
    const [visible, setVisible] = useState("none")

    function openModal(){
        setVisible("block"); 
    }

    return ( 
        <>
            <button className="button add-button" onClick={openModal}>
                <strong> Nueva receta </strong>
            </button>
            <AddDishModal 
                visible={visible} setVisible={setVisible}
                addDish= {addDish}
            />
        </>
    )
}