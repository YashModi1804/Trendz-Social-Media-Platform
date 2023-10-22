import img from './images/bird.png'
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {

    navigate('/home'); 
  };
  
    return (
      
        <div className="form-container">
          <img src={img} className="logo"></img>
         <h1 className="heading">Trendz</h1> 
          <form className="form">
            <p className='plogin'>Please login to your account</p>
  
            <div className="email">
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Email address"
              />
            
            </div>
  
            <div className="password">
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Password"
              />
             
            </div>
  
            <div >
              <button  className="buttons" onClick={handleLogin} >
                Log in
              </button>
              <br/>
              <br/>
              <a href="#!" className="forgot">
                Forgot password?
              </a>
            </div>
  
            <div className="text-center">
              <p className="mb-0">Don't have an account?</p>
              <button type="button" className="createnew">
                Create new
              </button>
            </div>
          </form>
          {/* <img src={img} className="logo"></img> */}
        </div>
     
    );
  }
  