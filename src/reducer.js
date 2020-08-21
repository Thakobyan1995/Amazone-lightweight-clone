export const initialState = {
    basket: [],
    user: null
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return { 
                ...state,
                basket: [...state.basket, action.item] 
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((Item) => Item.id === action.id)
            if(index >= 0) {
                newBasket.splice(index, 1)
                return {...state, basket: newBasket}
            }
            else {
                console.warn("Cant remove product from basket")
            }
            
            return { ...state }
        default:
            return state;    
    }
}

export const getBasketTotal = (basket) => 
    basket?.reduce((amaunt, item) => item.price + amaunt, 0)

export default reducer;