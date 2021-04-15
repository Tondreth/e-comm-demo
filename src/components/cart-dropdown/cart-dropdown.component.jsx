import React from 'react'
import CartItem from '../../components/cart-item/cart-item.component'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import {
    CartDropDownContainer,
    CartItemsContainer,
    CheckoutButtonContainer,
    EmptyMessageContainer
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropDownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?
                        cartItems.map(
                            cartItem => <CartItem key={cartItem.id} item={cartItem} />
                        )
                        : <EmptyMessageContainer>No items added yet</EmptyMessageContainer>
                }
            </CartItemsContainer>
            <CheckoutButtonContainer onClick={() => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}>CHECKOUT</CheckoutButtonContainer>
        </CartDropDownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))