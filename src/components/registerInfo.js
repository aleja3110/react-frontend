import { useNavigate } from 'react-router-dom';
function RegisterInfo() {
    const navigate = useNavigate();
    function login_view() {
        navigate('/login');
    }
    return ( 
        <div id = "block" >
            <h1 className = "tittle" > Register information </h1> 
            <form >
                <label className = "lb-register" > Name </label> <input className="input" /> <br /> <br />
                <label className = "lb-register" > Lastname </label> <input className="input"/> <br /> <br />
                <label className = "lb-register" > Hours </label> <input className="input"/> <br /> <br />
                <label className = "lb-register" > Activity </label> <input className="input"/> <br /> <br />
                <label className = "lb-register" > Description </label> <textarea className="input"/> <br /> <br />
             
            </form> 
            <div className="container">
                <div className="section">
                    <button className = "btn" onClick = { login_view } > Save </button>
                </div>
                <div className="section">
                    <button className = "btn" onClick = { login_view } > Back </button>
                </div>
            </div>
        </div>
    )
}

export { RegisterInfo }