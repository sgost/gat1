
import React from 'react';
import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaBehanceSquare } from "@react-icons/all-files/fa/FaBehanceSquare";
import { FaMediumM } from "@react-icons/all-files/fa/FaMediumM";
import { Link } from 'gatsby'

function Page5(){
    return(
        <div className="container">
        <div className="p5">
        <div className="page5">
            <h1>More to come !</h1>
            <p>Do you have any Idea ?</p>
            <form>
            <textarea type="email" placeholder="Type here"></textarea>
           <span>
           <img src="https://i.ibb.co/qy2bWNb/fluent-send-28-regular.png" alt="" width="20px" />
           </span>
           </form>
           </div>
           <div className="footer">
           <div className="f"><Link to = ""><FaLinkedinIn className="fi" /></Link></div>
           <div className="f"><Link to = ""><FaGithub className="fi"/></Link></div>
           <div className="f"><Link to = ""><FaBehanceSquare className="fi"/></Link></div>
           <div className="f"><Link to = ""><FaMediumM className="fi"/></Link></div>
           </div>
           <div className="fend">
           <p>www.fidisys.com</p>
           </div>
           </div>
           </div>
    );
}
export default Page5;