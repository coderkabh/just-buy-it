import React from 'react'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src = {imgPath} />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-Mail</h5>
                    <input type="text" className="login__id" value={email} placeholder="Type e-mail or Phone No." onChange={ e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" className="login__pass" placeholder="Type your Password" value={password} onChange= {e => setPassword(e.target.value)} />
                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    <input type="checkbox"/> By Signing In you must agree to out terms and conditions.
                </p>

                <button className="login__registerButton" onClick={register}>Create an Account</button>
            </div>
        </div>
    )
}

export default Login
