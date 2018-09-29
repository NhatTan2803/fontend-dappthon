import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="preloader-outer">
                    <div className="pin" />
                    <div className="pulse" />
                </div>
                <div id="listar-wrapper" className="listar-wrapper listar-haslayout">

                    <header id="listar-header" className="listar-header cd-auto-hide-header listar-haslayout">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

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
                                                <li className="menu-item-has-children current-menu-item">
                                                    <a href="javascript:void(0);">Home</a>
                                                    <ul className="sub-menu">
                                                        <li className="current-menu-item"><a href="index.html">Home v 1</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </header>
                    {/*************************************
				Header End
		**************************************/}
                    {/*************************************
				Home Slider Start
		**************************************/}
                    <div className="listar-homebannerslider">
                        <div id="listar-homeslider" className="listar-homeslider owl-carousel">
                            <div className="item"><figure><img src="images/slider/img-01.jpg" alt="image description" /></figure></div>
                            <div className="item"><figure><img src="images/slider/img-02.jpg" alt="image description" /></figure></div>
                            <div className="item"><figure><img src="images/slider/img-03.jpg" alt="image description" /></figure></div>
                            <div className="item"><figure><img src="images/slider/img-04.jpg" alt="image description" /></figure></div>
                            <div className="item"><figure><img src="images/slider/img-05.jpg" alt="image description" /></figure></div>
                        </div>
                        <div className="listar-homebanner">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="listar-bannercontent">
                                            <h1>Find Profile</h1>
                                            <div className="listar-description">
                                            </div>
                                            <form className="listar-formtheme listar-formsearchlisting">
                                                <fieldset>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-layers" />
                                                        <div className="listar-select">
                                                            <select id="listar-categorieschosen" className="listar-categorieschosen listar-chosendropdown">
                                                                <option className="icon-entertainment">Bệnh Nhân</option>
                                                                <option className="icon-entertainment">Bác Sĩ</option>
                                                                
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-global" />
                                                        <div className="listar-select listar-selectlocation">
                                                            <select id="listar-locationchosen" className="listar-locationchosen ">
                                                                <option>Address</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    
                                                    <button type="button" className="listar-btn listar-btngreen">Search Profile</button>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*************************************
				Home Slider End
		**************************************/}
                    {/*************************************
				Main Start
		**************************************/}
                    <main id="listar-main" className="listar-main listar-haslayout">
                        {/*************************************
					Explore The City Start
			**************************************/}
                        <section className="listar-sectionspace listar-haslayout">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="listar-sectionhead">
                                            <div className="listar-sectiontitle">
                                                <h2>Explore This City</h2>
                                            </div>
                                            <div className="listar-description">
                                                <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra doloremque laudantium, totam rem aperiam</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listar-themeposts listar-categoryposts">
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="listar-themepost listar-categorypost">
                                                <figure className="listar-featuredimg">
                                                    <a href="javascript:void(0);">
                                                        <img src="images/post/img-01.jpg" alt="image description" />
                                                        <div className="listar-contentbox">
                                                            <div className="listar-postcontent">
                                                                <span className="listar-categoryicon listar-flip"><i className="icon-tourism" /></span>
                                                                <h3>Appartments</h3>
                                                                <h4>Tourism</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="listar-themepost listar-categorypost">
                                                <figure className="listar-featuredimg">
                                                    <a href="javascript:void(0);">
                                                        <img src="images/post/img-02.jpg" alt="image description" />
                                                        <div className="listar-contentbox">
                                                            <div className="listar-postcontent">
                                                                <span className="listar-categoryicon listar-flip"><i className="icon-foods" /></span>
                                                                <h3>Restaurant</h3>
                                                                <h4>Food and Drinks</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="listar-themepost listar-categorypost">
                                                <figure className="listar-featuredimg">
                                                    <a href="javascript:void(0);">
                                                        <img src="images/post/img-03.jpg" alt="image description" />
                                                        <div className="listar-contentbox">
                                                            <div className="listar-postcontent">
                                                                <span className="listar-categoryicon listar-flip"><i className="icon-nightlife" /></span>
                                                                <h3>Dance Floor</h3>
                                                                <h4>Night Life</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="listar-themepost listar-categorypost">
                                                <figure className="listar-featuredimg">
                                                    <a href="javascript:void(0);">
                                                        <img src="images/post/img-04.jpg" alt="image description" />
                                                        <div className="listar-contentbox">
                                                            <div className="listar-postcontent">
                                                                <span className="listar-categoryicon listar-flip"><i className="icon-entertainment" /></span>
                                                                <h3>Cinema</h3>
                                                                <h4>Entertainment</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="listar-themepost listar-categorypost">
                                                <figure className="listar-featuredimg">
                                                    <a href="javascript:void(0);">
                                                        <img src="images/post/img-05.jpg" alt="image description" />
                                                        <div className="listar-contentbox">
                                                            <div className="listar-postcontent">
                                                                <span className="listar-categoryicon listar-flip"><i className="icon-localservice" /></span>
                                                                <h3>Motor Mechanics</h3>
                                                                <h4>Local Services</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="listar-themepost listar-categorypost">
                                                <figure className="listar-featuredimg">
                                                    <a href="javascript:void(0);">
                                                        <img src="images/post/img-06.jpg" alt="image description" />
                                                        <div className="listar-contentbox">
                                                            <div className="listar-postcontent">
                                                                <span className="listar-categoryicon listar-flip"><i className="icon-healthfitness" /></span>
                                                                <h3>Gym</h3>
                                                                <h4>Health and Fitness</h4>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                    {/*************************************
				Main End
		**************************************/}
                    {/*************************************
				Footer Start
		**************************************/}
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
                    {/*************************************
				Footer End
		**************************************/}
                </div>
                {/*************************************
			Wrapper End
	**************************************/}
                {/*************************************
			Theme Modal Box Start
	**************************************/}
                <div className="modal fade listar-placequickview" tabIndex={-1} role="dialog">
                    <div className="modal-dialog listar-modaldialog" role="document">
                        <div className="modal-content listar-modalcontent">
                            <div className="listar-themepost listar-placespost">
                                <span className="listar-btnclosequickview" data-toggle="modal" data-target=".listar-placequickview">X</span>
                                <figure className="listar-featuredimg" data-vide-bg="poster: images/post/img-16.jpg" data-vide-options="position: 50% 50%">
                                    <span className="listar-contactnumber">
                                        <i className="icon-"><img src="images/icons/icon-03.png" alt="image description" /></i>
                                        <em> + 7890 456 133</em>
                                    </span>
                                </figure>
                                <div className="listar-postcontent">
                                    <h3><a href="javascript:void(0);">Serena Hotel</a><i className="icon-checkmark listar-postverified listar-themetooltip" data-toggle="tooltip" data-placement="top" title="Verified" /></h3>
                                    <div className="listar-description">
                                        <p>Ut euismod ultricies sollicitudin. Curabitur sed dapibus nulla. Nulla eget iaculis lectus. Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit Nam in mauris quis libero sodales eleifend amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus</p>
                                    </div>
                                    <ul className="listar-listfeatures">
                                        <li>Pets allowed</li>
                                        <li>Kitchen</li>
                                        <li>Internet</li>
                                        <li>Suitable for events</li>
                                        <li>Gym</li>
                                        <li>Dryer</li>
                                        <li>Hot tub</li>
                                        <li>Family/kid friendly</li>
                                        <li>Wireless Internet</li>
                                    </ul>
                                    <div className="listar-reviewcategory">
                                        <div className="listar-review">
                                            <span className="listar-stars"><span /></span>
                                            <em>(3 Review)</em>
                                        </div>
                                        <a href="javascript:void(0);" className="listar-category">
                                            <i className="icon-tourism" />
                                            <span>Hotel</span>
                                        </a>
                                    </div>
                                    <div className="listar-themepostfoot">
                                        <span className="listar-openinghours">
                                            <i className="icon-alarmclock2" />
                                            <em>Today <span className="listar-greenthemecolor">Open Now</span> 10:00 AM - 5:00 PM</em>
                                        </span>
                                        <div className="listar-postbtns">
                                            <a className="listar-btnquickinfo listar-liked" href="javascript:void(0);"><i className="icon-heart2" /></a>
                                            <div className="listar-btnquickinfo">
                                                <div className="listar-shareicons">
                                                    <a href="javascript:void(0);"><i className="fa fa-twitter" /></a>
                                                    <a href="javascript:void(0);"><i className="fa fa-facebook" /></a>
                                                    <a href="javascript:void(0);"><i className="fa fa-pinterest-p" /></a>
                                                </div>
                                                <a className="listar-btnshare" href="javascript:void(0);">
                                                    <i className="icon-share3" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*************************************
			Theme Modal Box End
	**************************************/}
                {/*************************************
			Login Singup Start
	**************************************/}
                <div id="listar-loginsingup" className="listar-loginsingup">
                    <button type="button" className="listar-btnclose">x</button>
                    <figure className="listar-loginsingupimg" data-vide-bg="poster: images/bgjoin.jpg" data-vide-options="position: 50% 50%" />
                    <div className="listar-contentarea">
                        <div className="listar-themescrollbar">
                            <div className="listar-logincontent">
                                <div className="listar-themetabs">
                                    <ul className="listar-tabnavloginregistered" role="tablist">
                                        <li role="presentation" className="active"><a href="#listar-loging" data-toggle="tab">Log in</a></li>
                                        <li role="presentation"><a href="#listar-register" data-toggle="tab">Register</a></li>
                                    </ul>
                                    <div className="tab-content listar-tabcontentloginregistered">
                                        <div role="tabpanel" className="tab-pane active fade in" id="listar-loging">
                                            <form className="listar-formtheme listar-formlogin">
                                                <fieldset>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-profile-male" />
                                                        <input type="text" name="username" className="form-control" placeholder="Username Or Email" />
                                                    </div>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-icons208" />
                                                        <input type="password" name="password" className="form-control" placeholder="Password" />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="listar-checkbox">
                                                            <input type="checkbox" name="remember" id="rememberpass2" />
                                                            <label htmlFor="rememberpass2">Remember me</label>
                                                        </div>
                                                        <span><a href="#">Lost your Password?</a></span>
                                                    </div>
                                                    <button className="listar-btn listar-btngreen">Register</button>
                                                </fieldset>
                                            </form>
                                        </div>
                                        <div role="tabpanel" className="tab-pane fade" id="listar-register">
                                            <form className="listar-formtheme listar-formlogin">
                                                <fieldset>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-profile-male" />
                                                        <input type="text" name="username" className="form-control" placeholder="Username" />
                                                    </div>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-icons208" />
                                                        <input type="email" name="emailaddress" className="form-control" placeholder="Email Address" />
                                                    </div>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-lock-stripes" />
                                                        <input type="password" name="password" className="form-control" placeholder="Password" />
                                                    </div>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-lock-stripes" />
                                                        <input type="password" name="confirmpassword" className="form-control" placeholder="Password" />
                                                    </div>
                                                    <button className="listar-btn listar-btngreen">login</button>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="listar-shareor"><span>or</span></div>
                                <div className="listar-signupwith">
                                    <h2>Sign in With...</h2>
                                    <ul className="listar-signinloginwithsocialaccount">
                                        <li className="listar-facebook"><a href="javascript:void(0);"><i className="icon-facebook-1" /><span>Facebook</span></a></li>
                                        <li className="listar-twitter"><a href="javascript:void(0);"><i className="icon-twitter-1" /><span>Twitter</span></a></li>
                                        <li className="listar-googleplus"><a href="javascript:void(0);"><i className="icon-google4" /><span>Google +</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}