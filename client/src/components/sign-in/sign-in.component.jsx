import React, { useState } from 'react'
import './sign-in.styles.scss'
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const { email, password } = userCredentials

    const handleSubmit = async event => {
        event.preventDefault()
        emailSignInStart(email, password)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password.</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    handleChange={handleChange}
                    name="email" value={email}
                    type="email"
                    required
                    label='Email'
                />
                <FormInput
                    handleChange={handleChange}
                    name="password" value={password}
                    type="password"
                    required
                    label='Password'
                /> 
                <div className='buttons'>
                    <CustomButton type="submit">
                        Sign in
                    </CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn)