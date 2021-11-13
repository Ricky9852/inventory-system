import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../actions/inventoryActions";

const InventoryComponent=props=>{
    const dispatch=useDispatch()
    const inventory=useSelector((state)=>{
        return state.inventory
    })
    const handleAddItem=item=>{
        if(item.quantity<=0){
            alert('Product is out of stock')
        }else{
            dispatch(addItem(item))
        }
    }
    return (
        <div>
            <h1>Inventory System</h1>
            <ul>
                {inventory.map((item)=>{
                    return <li key={item.id}>{item.itemName} - {item.quantity} unit <button onClick={()=>{handleAddItem(item)}}>Add</button></li>
                })}
            </ul><hr/>
        </div>
    )
}

export default InventoryComponent