import {Container , Row ,Col } from "react-bootstrap";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { GiHouse } from "react-icons/gi";
import Profil from "../assets/img/profil1.png";




export const Banner = () =>{
    return(
        <section className="banner" id="home">
        <div className="container-fluid text-start">
        <div className="row">
            <div className="col-sm-9">
               
                <div className="col-md-9">
                <h3 className="bb">Hello ! Je suis  <span className="nom ms-1"> MOHAMET GNINGUE </span>  </h3>
                <h3 className="bb">Développeur FRONTEND à BAKELI</h3>
                </div>
                
                <div className="col-md-9 info">
                    <div><MdOutlinePhoneAndroid className="_n2"/> <span className="_n1">782575222</span></div>
                    <div><MdOutlineMail className="_n2"/><span className="_n1">Mohametgning300@gmail.com</span></div>
                    <div><IoLocation className="_n2"/><span className="_n1">Liberté-4 Dakar</span></div>
                    <div><GiHouse className="_n2"/><span className="_n1">BAKELI</span></div>
                </div>
            </div>
                <div className="col-sm-3 profil">
                    <img src={Profil} alt="profile" className="img-fluid"></img>
                </div>
                
            </div>
        </div>
        {/* <img src={wave} alt="img-wave" className="img-fluid1"/> */}
    </section>
    )
}
