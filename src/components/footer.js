import React, { Component } from 'react';

export default class Header extends Component {
    state = {}
    render() {
        return (
            <footer id="listar-footer" className="listar-footer listar-haslayout">
                <div className="listar-footeraboutarea">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="listar-upperbox">
                                    <strong className="listar-logo"><a href="javascript:void(0);"><img src="images/logo.png" alt="image description" /></a></strong>
                                    <ul className="listar-socialicons">
                                        <li className="listar-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                                        <li className="listar-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                                        <li className="listar-linkedin"><a href="javascript:void(0);"><i className="fa fa-linkedin" /></a></li>
                                        <li className="listar-googleplus"><a href="javascript:void(0);"><i className="fa fa-google-plus" /></a></li>
                                        <li className="listar-vimeo"><a href="javascript:void(0);"><i className="fa fa-vimeo" /></a></li>
                                    </ul>
                                    <nav className="listar-navfooter">
                                        <ul>
                                            <li><a href="javascript:void(0);">Home</a></li>
                                            <li><a href="javascript:void(0);">how it work</a></li>
                                            <li><a href="javascript:void(0);">Shop</a></li>
                                            <li><a href="javascript:void(0);">Packages</a></li>
                                            <li><a href="javascript:void(0);">News</a></li>
                                            <li><a href="javascript:void(0);">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="listar-lowerbox">
                                    <div className="listar-description">
                                        <p>Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat Lorem ipsum dolor sit amet.</p>
                                    </div>
                                    <address><strong>Address:</strong> No.200 Josecph, San Francisco <span><strong>Tel:</strong> 01-987-654-3210</span></address>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="listar-footerbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <span className="listar-copyright">Copyright © 2018 Listingstar. All rights reserved.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}