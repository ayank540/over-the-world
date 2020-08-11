import React, { Component } from 'react'
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="footer light-gray">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-4 offset-1 col-sm-2">
                            <h5><span className="border-bottom border-danger">Links</span></h5>
                            <ul className="list-unstyled">
                                <li><Link to='/home'>Home</Link></li>
                                <li><Link to='/tech'>Technology</Link></li>
                                <li><Link to='/in'>G - News</Link></li>
                                <li><Link to='/about'>About</Link></li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-5">
                            <h5><span className="border-bottom border-danger">Our Address</span></h5>
                            <address>
                                Dehradun, Uttrakhand, India<br />
                                <i className="fa fa-phone fa-lg"></i>: <a href="tel:+91 1234 5678">+91 1234 56789</a><br />
                                <i className="fa fa-fax fa-lg"></i>: <a href="tel:+91 8765 4321">+91 8765 4321</a><br />
                                <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:overtheworld@news.net">
                                    overtheworld@news.net</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="text-center">
                                <h5><span className="border-bottom border-danger">Social Links</span></h5>
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-auto">
                            <p>© Copyright 2020 <span className="link-text playfair">OVER THE WORLD</span></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
