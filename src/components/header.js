import React, { Component } from 'react';

export default class Header extends Component {
    state = {}
    render() {
        return (
            <header id="listar-header" className="listar-header cd-auto-hide-header listar-haslayout">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <strong className="listar-logo"><a href="index.html"><img src="images/logod.png" alt="company logo here" /></a></strong>
                            <nav className="listar-addnav">
                                <ul>
                                    <li>
                                        <a id="listar-btnsignin" className="listar-btn listar-btnblue" href="#listar-loginsingup">
                                            <i className="icon-smiling-face" />
                                            <span>Join Now</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="listar-btn listar-btngreen" href="dashboardaddlisting.html">
                                            <i className="icon-plus" />
                                            <span>Add Listing</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown listar-themedropdown">
                                            <a id="listar-cartdropdown" className="listar-btn listar-btnround listar-btncartdropdown" href="javascript:void(0);" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <em>2</em>
                                                <i className="icon-icons240" />
                                            </a>
                                            <div className="dropdown-menu listar-themedropdownmenu listar-minicart" aria-labelledby="listar-cartdropdown">
                                                <div className="listar-cartitem">
                                                    <figure><a href="javascript:void(0);"><img src="images/cart/img-01.jpg" alt="image description" /></a></figure>
                                                    <div className="listar-iteminfo">
                                                        <span>Orange Juice</span>
                                                        <span>2 x $15</span>
                                                        <a className="listar-btndelate icon-cross" href="javascript:void(0);" />
                                                    </div>
                                                </div>
                                                <div className="listar-cartitem">
                                                    <figure><a href="javascript:void(0);"><img src="images/cart/img-01.jpg" alt="image description" /></a></figure>
                                                    <div className="listar-iteminfo">
                                                        <span>Orange Juice</span>
                                                        <span>2 x $15</span>
                                                        <a className="listar-btndelate icon-cross" href="javascript:void(0);" />
                                                    </div>
                                                </div>
                                                <div className="listar-cartitem listar-totalarea">
                                                    <span>Order Total:</span>
                                                    <span>$60.00</span>
                                                </div>
                                                <a className="listar-btn listar-btngreen listar-btn-lg" href="javascript:void(0);">View Bag &amp; Checkout</a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <nav id="listar-nav" className="listar-nav">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#listar-navigation" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                        <span className="icon-bar" />
                                    </button>
                                </div>
                                <div id="listar-navigation" className="collapse navbar-collapse listar-navigation">
                                    <ul>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">Home</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Home v 1</a></li>
                                                <li><a href="indexv2.html">Home v 2</a></li>
                                                <li><a href="indexv3.html">Home v 3</a></li>
                                                <li><a href="indexv4.html">Home v 4</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children current-menu-item">
                                            <a href="javascript:void(0);">Explore</a>
                                            <ul className="sub-menu">
                                                <li><a href="listingvlist.html">All Listings</a></li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Food</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="listingv1.html">Cafe</a></li>
                                                        <li><a href="listingv2.html">Restaurant</a></li>
                                                        <li><a href="listingv1.html">Dinner</a></li>
                                                        <li><a href="listingv2.html">Pizza Place</a></li>
                                                        <li><a href="listingv1.html">Italian</a></li>
                                                        <li><a href="listingv2.html">Bakeries</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Entertainment</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="listingv1.html">Art &amp; Design</a></li>
                                                        <li><a href="listingv2.html">Movie Theater</a></li>
                                                        <li><a href="listingv1.html">Theme Parks</a></li>
                                                        <li><a href="listingv2.html">Music Life</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Educational</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="listingv1.html">School</a></li>
                                                        <li><a href="listingv2.html">College</a></li>
                                                        <li><a href="listingv1.html">University</a></li>
                                                        <li><a href="listingv2.html">Short Courses</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Nightlife</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="listingv1.html">Wine Bars</a></li>
                                                        <li><a href="listingv2.html">Pubs</a></li>
                                                        <li><a href="listingv1.html">Nightclub</a></li>
                                                        <li><a href="listingv2.html">Lounge</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <a href="javascript:void(0);">Outdoors</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="listingv1.html">Boutiques</a></li>
                                                        <li><a href="listingv2.html">Fashion</a></li>
                                                        <li><a href="listingv1.html">Furniture</a></li>
                                                        <li><a href="listingv2.html">Sport Equipment</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="howitwork.html">How It Works</a></li>
                                                <li><a href="services.html">Services</a></li>
                                                <li><a href="pkgprice.html">Packages</a></li>
                                                <li><a href="testimonials.html">Testimonials</a></li>
                                                <li><a href="contactus.html">Contact Us</a></li>
                                                <li><a href="404error.html">404 Error</a></li>
                                                <li><a href="comingsoon.html">Coming Sooon</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">News</a>
                                            <ul className="sub-menu">
                                                <li><a href="newsv1.html">Blog Standard</a></li>
                                                <li><a href="newsv2.html">Blog Classic</a></li>
                                                <li><a href="newsv3.html">Blog sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="dashboard.html">Dasboard</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}