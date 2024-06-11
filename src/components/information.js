import { useNavigate } from 'react-router-dom';
function Information() {
    const navigate = useNavigate();
    function login_view() {
        navigate('/actionLogin');
    }
    return ( 
        <div id = "block" >
            <h1 className = "tittle" > Information found </h1> 
                <form >
                <label className = "lb-register" > Name </label> <input className="input" / > < br / > < br / >
                <label className = "lb-register" > Lastname </label> <input className="input"/ > < br / > < br / >
                <label className = "lb-register" > Hours </label> <input className="input"/ > < br / > < br / >
                <label className = "lb-register" > Activity </label> <input className="input"/ > < br / > < br / >
                <label className = "lb-register" > Description </label> <textarea className="input"/ > < br / > < br / >
                <button className = "btn" onClick = { login_view } > Back </button>
                </form>
        </div>
        
    )
}

export { Information }