import React from "react";
import './App.css'; 
import './index.css';


const Footer = () => {
return (
        <div className="footer"> 
	        <h1 style={{ color: "green",
				textAlign: "center",
				marginTop: "-50px" }}>
		@
        Indoor Plant website
	        </h1>
	    <div className="container">
		      < div className="row">
		            <div className="col-md-3">
			                <h3>About Us</h3>
			                    <a href="#">Aim</a>
		                    	<a href="#">Vision</a>
			                    <a href="#">Testimonials</a>
		            </div>
                        <div className="col-md-3">
                            <h3>Services</h3>
                            <a href="#">Plants</a>
                            <a href="#">Seeds</a>
                            <a href="#">Fertilizers</a>
                            <a href="#">Customized gifts</a>
                        </div>
                        <div className="col-md-3">
                            <h3>Contact Us</h3>
                            <a href="#">Andhra Pradesh</a>
                            <a href="#">Telangana</a>
                            <a href="#">Uttar Pradesh</a>
                            <a href="#">Mumbai</a>
                        </div>
		                <div className="col-md-3">
		        	<h3>Social Media</h3>
			            <a href="#">
            			<i className="fab fa-facebook-f">
			        	<span style={{ marginLeft: "10px" }}>
				            Facebook
		        		</span>
			            </i>
			            </a>
                        <a href="#">
                        <i className="fab fa-instagram">
                            <span style={{ marginLeft: "10px" }}>
                            Instagram
                            </span>
                        </i>
                        </a>
                        <a href="#">
                        <i className="fab fa-twitter">
                            <span style={{ marginLeft: "10px" }}>
                            Twitter
                            </span>
                        </i>
                        </a>
                        <a href="#">
                        <i className="fab fa-youtube">
                            <span style={{ marginLeft: "10px" }}>
                            Youtube
                            </span>
                        </i>
                        </a>
		                  </div>
		        </div>
	     </div>
</div>

    
);
}
export default Footer;