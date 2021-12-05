import {createSelector} from "reselect";

const getCart = state => state.cart;

export const getCartItems = createSelector(
    [getCart],
    cart => cart.cartItems
);

export const getCartItemsTotal = createSelector(
    [getCartItems],
    cartItems =>
        cartItems.reduce(
            (sum, cartItem) =>
                sum + cartItem.quantity, 0
        )
)