
import './Assests/Css/style.css'
function App()
{
    return (
        <form id='login' class='input-group-login'>
        <input type='text'class='input-field'placeholder='Email Id' required />
<input type='password'class='input-field'placeholder='Enter Password' required />
<input type='checkbox'class='check-box' /><span>Remember Password</span>
<button type='submit'class='submit-btn'>Log in</button>
</form>
    );
}
export default App
