export const addItemToCart = (cartItems, cartItemToAdd) =>{

    const existed = cartItems.find(x => x.id === cartItemToAdd.id);

    if(existed)
    {
        return cartItems.map(x => x.id === cartItemToAdd.id ? {...x, quantity: x.quantity + 1} : x)
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) =>{

    const existed = cartItems.find(x => x.id === cartItemToRemove.id);

    if(existed?.quantity === 1)
    {
        return cartItems.filter(x => x.id !== cartItemToRemove.id);
    }

    return cartItems.map(item =>
        item.id === cartItemToRemove.id ? {...item, quantity: item.quantity -1} : item
    );
}