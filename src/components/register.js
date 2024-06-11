function Register() {
    return ( 
        <div id = "block" >
            <h1 className = "tittle" > Register users </h1> 
                <form action= "/register" method="post">
                    <label className = "lb-register" > Name </label> <input name="name" /> <br/> <br/>
                    <label className = "lb-register" > LastName </label> <input name="lastname"/> <br/> <br/>
                    <label className = "lb-register" > Identification </label> <input name="identification"/> <br/> <br/>
                    <button className = "btn" > Register </button> 
                </form> 
        </div>
    )
}

export { Register }