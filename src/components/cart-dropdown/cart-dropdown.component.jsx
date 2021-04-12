import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component'
import CartItem from '../../components/cart-item/cart-item.component'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const CartDropdown = ({ cartItems }) => {
    return <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(
                    cartItem => <CartItem key={cartItem.id} item={cartItem} />
                )
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div >
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown)