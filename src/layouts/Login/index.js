import LoginForm from "./LoginForm/LoginForm";
import Slider from "./Slider/Slider";
import './Login.css'

 
function Login({handleSetIsLogin}) {
    return (
        <div>
            
            <div class="row">
            <div class="column side">
                <Slider />
            </div>

            <div class="column middle">
                <LoginForm handleSetIsLogin={handleSetIsLogin}/>
            </div>

            <div class="column final">
            </div>
            </div>

        </div>
    )
}

export default Login;