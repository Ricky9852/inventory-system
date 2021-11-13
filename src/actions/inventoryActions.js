export const addItem=item=>{
    return {
        type:'ADD_ITEM',
        payload:item
    }
}
export const substractItem=item=>{
    return {
        type:'SUBSTRACT_ITEM',
        payload:item
    }
}