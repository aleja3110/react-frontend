import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    function consult_view() {
        navigate('/actionLogin');
    }
    return ( 
        <div id = "block" >
            <h1 className = "tittle" > Login </h1> 
            <form >
                <label className = "lb-register" > User </label> <input className="input" / > < br / > < br / >
                <label className = "lb-register" > Password </label> <input className="input"/ > < br / > < br / >
                <button className = "btn" onClick = { consult_view } > Login </button> 
            </form> 
        </div>
    )
}

export { Login }