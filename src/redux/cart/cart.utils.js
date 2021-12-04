export const addItemToCart = (cartItems, cartItemToAdd) =>{

    const existed = cartItems.find(x => x.id === cartItemToAdd.id);

    if(existed)
    {
        return cartItems.map(x => x.id === cartItemToAdd.id ? {...x, quantity: x.quantity + 1} : x)
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}