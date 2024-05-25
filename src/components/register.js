function Register() {
    return ( <
        div id = "block" >
        <
        h1 className = "tittle" > Register users < /h1> <
        form >
        <
        label className = "lb-register" > Name < /label> <input className="input" / > < br / > < br / >
        <
        label className = "lb-register" > Lastname < /label> <input className="input"/ > < br / > < br / >
        <
        label className = "lb-register" > Id < /label> <input className="input"/ > < br / > < br / >
        <
        button className = "btn-register" > Register < /button> <
        /form> <
        /div>
    )
}

export { Register }