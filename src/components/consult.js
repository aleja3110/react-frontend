import { useNavigate } from 'react-router-dom';

function Consult() {

    const navigate = useNavigate();

    function info_view() {
        navigate('/information');
    }
    return ( 
        <div id = "block" >
        <h1 className = "tittle" > Enter the user ID </h1> 
        <form >
        <li className = "items-consult" >
        <label className = "lb-consult" > Id </label>  
        <input className = "input-consult" / > < br / > < br / >
        <button className = "btn-consult" onClick = { info_view } > Search </button>    <br /> < br /> <br /> < br/ >
        </li>
        </form>
        </div>
    )
}

export { Consult }