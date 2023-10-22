import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import img2 from './images/bird.png';
export default function Nav(){
    return(
        <>
         <nav className='nav-container'>

            
            <ul className="nav-list">
                <li className="nav-home">
                <img src={img2} className='nav-logo'/>
                </li>
                <li className="nav-item">
                <input type='text' placeholder='Search' className="nav-search"/>
                </li>
           
                <li className="nav-item">
                <FontAwesomeIcon icon={faHome}/>
                    <span> Home</span>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon icon={faBell} />
                    <span> Notification</span>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span> Message</span>
                </li>
                <li className="nav-item">
                    <FontAwesomeIcon icon={faUser} />
                    <span> Me</span>
                </li>
            </ul>
        </nav>
        </>
    )
}