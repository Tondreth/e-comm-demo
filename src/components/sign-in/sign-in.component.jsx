import React from 'react'
import './sign-in.styles.scss'
import '../../components/form-input/form-input.component'
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state
        try {
            await auth.isSignInWithEmailandPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        handleChange={this.handleChange}
                        name="email" value={this.state.email}
                        type="email"
                        required
                        label='Email'
                    />
                    <FormInput
                        handleChange={this.handleChange}
                        name="password" value={this.state.password}
                        type="password"
                        required
                        label='Password'
                    />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn