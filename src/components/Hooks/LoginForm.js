import React,{useState} from "react";
const LoginForm=()=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    // const {handleSubmit}=this.props;
    const handleSubmit=(e)=>{
        // e.preventdefault;
        // <p>Dang Nhap Thanh Cong</p>
    }
    return(
        <div className="App">
            <header className="App-header">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                    <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
            </header>
        </div>
    )
    
}
export default LoginForm;