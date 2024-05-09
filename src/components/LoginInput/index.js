import './style.css';

function LoginInput(proprieties) {
    return (
        <div>
            <input className={proprieties.name} placeholder={proprieties.name}></input>
        </div>
    )
}

export default LoginInput;