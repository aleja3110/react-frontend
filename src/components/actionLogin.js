import { useNavigate } from 'react-router-dom';
function ActionLogin() {
    const navigate = useNavigate();

    function register_view() {
        navigate('/registerInfo');
    }
    function info_view() {
        navigate('/information');
    }
    return ( 
        <div className="container" >
            <div className="section">
            <h1 className = "tittle" > Register information </h1> 
            <h2 className = "subtittle" > Enter user identification to register information  </h2>
                <form >
                    <label className = "lb-register" > Id </label> <input className="input"/ > < br / > < br / >
                    <button className = "btn" onClick = { register_view } > Register </button>    <br /> < br /> <br /> < br / >
                </form>

            </div>
            <div className="section">
            <h1 className = "tittle" > Consult information </h1> 
            <h2 className = "subtittle" > Enter user identification to consult information  </h2>
                <form >
                    <label className = "lb-register" > Id </label> <input className="input"/ > < br / > < br / >
                    <button className = "btn" onClick = { info_view } > Search </button>    <br /> < br /> <br /> < br />
                </form>
            </div>
            
        </div>
        
    )
}

export { ActionLogin }