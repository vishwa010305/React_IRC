import { useState } from 'react'
const NavBar = () => {
    const [data, setData] = useState({
        username :'',
        password:''
    })
    const toggle = () => {
        setvisible(!visible)
    }
    const Login =(e)=>{
        e.preventDefault();
        alert(data.username + data.password) }
        const handleChange =(e)=>{ setData({...data,[e.target.id]:e.target.value}) }
        return(
            <div>
                <div class="navbar">
                    <div class="navtitle">
                        Hello World
                    </div>
                    <ul class ="navlinks">
                        <li>
                            Home
                        </li>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                        <li onClick={toggle}>
                            Login
                        </li>
                    </ul>
                </div>
                {visible ? (
                    <div className='card-wrapper'>
                        <div className="">
                            <h2 className="auth-title">Login</h2>
                            <form className="auth-container -30v shadow" onSubmit={Login}>
                                <input type="text" name="" id="username" placeholder="username" classname="auth-input" onChange={handleCahnge}/>
                                <input type="password" name="" id="password" placeholder="password" classname="auth-input" onChange={handleCahnge}/>
                                <span className='btn-container'>
                                    <input type="submit" value="Login" className="auth-btn w-50" />
                                    <button className='cancel-btn w-50'onClick={toggle}>Cancel</button>
                                </span>

                            </form>
                        </div>
                        </div>
                ):('')
                }
            </div>
        
    ) 
}

export default NavBar