const { useState } = require("react");




const RegisterCat = () => {
    const [cat , setCat] = useState({
        nameCat : ""
    })

    const hundelChange =(e)=>{
        setCat({...setCat , [e.target.name]:e.target.value})
    }



    return (
        <div style={{ marginTop:"5rem"}}>
            <form>
                <label>Category Name :</label>
                <input type = "text" name="nameCat" onChange={hundelChange}/>
                
                <button>Add</button>
            </form>

        </div>
    )
} ;

export default RegisterCat ;