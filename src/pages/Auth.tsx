import { useState } from 'react'

interface IAuthFormState {
    email: string;
    password: string;
}

function Auth() {
    const [authFormState, setAuthFormState] = useState<IAuthFormState>({
        email: '',
        password: ''
    })

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
    }

    return (
        <div>
            <form>
                <p>Auth {authFormState.email} {authFormState.password}</p>
                <input type="text" name="email" placeholder='Email' value={authFormState.email} onChange={e => setAuthFormState({...authFormState, email: e.target.value})} />
                <input type="password" name="password" placeholder='Password' value={authFormState.password} onChange={e => setAuthFormState({...authFormState, password: e.target.value})} />
                <button type="submit" onClick={e => handleSubmit(e)}>Войти</button>
            </form>
        </div>
    )
}

export default Auth