import img from './images/bird.png'
export default function Profile(){
    return(
        <>
        <div className="container-profile">
            <div className="up-profile"></div>
            <img src={img} className="profile-img"/>
            <div className="down-profie"></div>
        </div>
        </>
    )
}