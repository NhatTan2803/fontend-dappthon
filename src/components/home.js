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
                                    <strong className="listar-logo"><a href="index.html"><img src="../../public/images/logo.png" alt="company logo here" /></a></strong>
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
                                                                <a className="listar-btndelate" href="javascript:void(0);">X</a>
                                                            </div>
                                                        </div>
                                                        <div className="listar-cartitem">
                                                            <figure><a href="javascript:void(0);"><img src="images/cart/img-01.jpg" alt="image description" /></a></figure>
                                                            <div className="listar-iteminfo">
                                                                <span>Orange Juice</span>
                                                                <span>2 x $15</span>
                                                                <a className="listar-btndelate" href="javascript:void(0);">X</a>
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
                                                <li className="menu-item-has-children current-menu-item">
                                                    <a href="javascript:void(0);">Home</a>
                                                    <ul className="sub-menu">
                                                        <li className="current-menu-item"><a href="index.html">Home v 1</a></li>
                                                        <li><a href="indexv2.html">Home v 2</a></li>
                                                        <li><a href="indexv3.html">Home v 3</a></li>
                                                        <li><a href="indexv4.html">Home v 4</a></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
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
                                            <h1>Find Local Services</h1>
                                            <div className="listar-description">
                                                <p>Find the best places in the city for food, activities and relaxation</p>
                                            </div>
                                            <form className="listar-formtheme listar-formsearchlisting">
                                                <fieldset>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-layers" />
                                                        <div className="listar-select">
                                                            <select id="listar-categorieschosen" className="listar-categorieschosen listar-chosendropdown">
                                                                <option>Ex: Food, Retail, hotel, cinema</option>
                                                                <option className="icon-entertainment">Art &amp; Entertainment</option>
                                                                <option className="icon-spa">Beauty &amp; Health</option>
                                                                <option className="icon-education">Education</option>
                                                                <option className="icon-healthfitness">Fitness</option>
                                                                <option className="icon-tourism">Hotels</option>
                                                                <option className="icon-localservice">Motor Mechanic</option>
                                                                <option className="icon-nightlife">Night Life</option>
                                                                <option className="icon-foods">Restaurant</option>
                                                                <option className="icon-museum">Real Estate</option>
                                                                <option className="icon-shopping">Shopping</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className="icon-global" />
                                                        <div className="listar-select listar-selectlocation">
                                                            <select id="listar-locationchosen" className="listar-locationchosen listar-chosendropdown">
                                                                <option>Choose a Location</option>
                                                                <option>Lahore</option>
                                                                <option>Bayonne</option>
                                                                <option>Greenville</option>
                                                                <option>Manhattan</option>
                                                                <option>Queens</option>
                                                                <option>The Heights</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="form-group listar-inputwithicon">
                                                        <i className><img src="images/icons/icon-01.png" alt="image description" /></i>
                                                        <p>Price: </p>
                                                        <input id="listar-rangeslider" className="listar-rangeslider" data-slider-id="ex1Slider" type="text" data-slider-min={0} data-slider-max={20} data-slider-step={1} data-slider-value={14} />
                                                    </div>
                                                    <button type="button" className="listar-btn listar-btngreen">Search Places</button>
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
                        {/*************************************
					Explore The City End
			**************************************/}
                        {/*************************************
					Best Theme Video Start
			**************************************/}
                        <section className="listar-themeparallax" data-appear-top-offset={600} data-parallax="scroll" data-image-src="images/parallax/bgparallax-01.jpg">
                            <div className="listar-parallaxcolor">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-push-2 col-md-8 col-lg-push-2 col-lg-8">
                                            <div className="listar-videobox listar-prettyPhoto">
                                                <h2>Our Main Goal -<span>Best Theme for your Business</span></h2>
                                                <figure>
                                                    <img src="images/img-01.jpg" alt="image description" />
                                                    <figcaption>
                                                        <a id="lister-video" className="listar-btnplay" href="https://www.youtube.com/watch?v=RhprOoSs9sk"><i className="icon-play3" /></a>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*************************************
					Best Theme Video End
			**************************************/}
                        {/*************************************
					Theme Features Start
			**************************************/}
                        <section className="listar-sectionspace listar-overlapcontent listar-bglight listar-haslayout">
                            <div className="container">
                                <div className="row">
                                    <div className="listar-features">
                                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                            <div className="listar-feature">
                                                <span className="listar-featureicon"><i className="icon-layers" /></span>
                                                <h2><span className="listar-bluethemecolor">01</span> Choose a Category</h2>
                                                <div className="listar-description">
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet doming...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                            <div className="listar-feature">
                                                <span className="listar-featureicon"><i className="icon-map3" /></span>
                                                <h2><span className="listar-bluethemecolor">02</span> Find Location</h2>
                                                <div className="listar-description">
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet doming...</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                                            <div className="listar-feature">
                                                <span className="listar-featureicon"><i className="icon-hotairballoon" /></span>
                                                <h2><span className="listar-bluethemecolor">03</span> Go have Fun</h2>
                                                <div className="listar-description">
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet doming...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*************************************
					Theme Features End
			**************************************/}
                        {/*************************************
					Explore The City Start
			**************************************/}
                        <section className="listar-sectionspace listar-haslayout">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="listar-sectionhead">
                                            <div className="listar-sectiontitle">
                                                <h2>Latest Categories</h2>
                                            </div>
                                            <div className="listar-description">
                                                <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra doloremque laudantium <a className="listar-bluethemecolor" href="javascript:void(0);">See All Categories</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div id="listar-categoriespostslider" className="listar-themeposts listar-categoryposts listar-gridslider owl-carousel">
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-07.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-foods" /></span>
                                                                    <h3>Food &amp; Drinks</h3>
                                                                    <h4>120 Listings</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-08.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-nightlife" /></span>
                                                                    <h3>Night Life</h3>
                                                                    <h4>03 Listings</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-09.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-tourism" /></span>
                                                                    <h3>Hotels</h3>
                                                                    <h4>18 Listings</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-10.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-healthfitness" /></span>
                                                                    <h3>Fitness</h3>
                                                                    <h4>11 Listing</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-11.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-entertainment" /></span>
                                                                    <h3>Entertainment</h3>
                                                                    <h4>03 Listing</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-12.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-shopping" /></span>
                                                                    <h3>Shops</h3>
                                                                    <h4>20 Listing</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-07.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-foods" /></span>
                                                                    <h3>Food &amp; Drinks</h3>
                                                                    <h4>120 Listings</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-08.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-nightlife" /></span>
                                                                    <h3>Night Life</h3>
                                                                    <h4>03 Listings</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-09.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-tourism" /></span>
                                                                    <h3>Hotels</h3>
                                                                    <h4>18 Listings</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-10.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-healthfitness" /></span>
                                                                    <h3>Fitness</h3>
                                                                    <h4>11 Listing</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-11.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-entertainment" /></span>
                                                                    <h3>Entertainment</h3>
                                                                    <h4>03 Listing</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-12.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-shopping" /></span>
                                                                    <h3>Shops</h3>
                                                                    <h4>20 Listing</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-07.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-foods" /></span>
                                                                    <h3>Food &amp; Drinks</h3>
                                                                    <h4>120 Listings</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-08.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-nightlife" /></span>
                                                                    <h3>Night Life</h3>
                                                                    <h4>03 Listings</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-09.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-tourism" /></span>
                                                                    <h3>Hotels</h3>
                                                                    <h4>18 Listings</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-10.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-healthfitness" /></span>
                                                                    <h3>Fitness</h3>
                                                                    <h4>11 Listing</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-11.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-entertainment" /></span>
                                                                    <h3>Entertainment</h3>
                                                                    <h4>03 Listing</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                                <div className="listar-themepost listar-categorypost">
                                                    <figure className="listar-featuredimg">
                                                        <a href="javascript:void(0);">
                                                            <img src="images/post/img-12.jpg" alt="image description" />
                                                            <div className="listar-contentbox">
                                                                <div className="listar-postcontent">
                                                                    <span className="listar-categoryicon listar-flip"><i className="icon-shopping" /></span>
                                                                    <h3>Shops</h3>
                                                                    <h4>20 Listing</h4>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*************************************
					Explore The City End
			**************************************/}
                        {/*************************************
					Discover New Places Start
			**************************************/}
                        <section className="listar-sectionspace listar-bglight listar-haslayout">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="listar-sectionhead">
                                            <div className="listar-sectiontitle">
                                                <h2>Discover New Places</h2>
                                            </div>
                                            <div className="listar-description">
                                                <p>Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra doloremque laudantium, totam rem aperiam</p>
                                            </div>
                                        </div>
                                        <div className="listar-horizontalthemescrollbar">
                                            <div className="listar-themeposts listar-placesposts">
                                                <div className="listar-themepost listar-placespost">
                                                    <figure className="listar-featuredimg"><a href="detailv1.html"><img src="images/post/img-13.jpg" alt="image description" /></a></figure>
                                                    <div className="listar-postcontent">
                                                        <h3><a href="detailv1.html">Tourist Guide</a></h3>
                                                        <div className="listar-description">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                                                        </div>
                                                        <div className="listar-reviewcategory">
                                                            <div className="listar-review">
                                                                <span className="listar-stars"><span /></span>
                                                                <em>(3 Review)</em>
                                                            </div>
                                                            <a href="listingv1.html" className="listar-category">
                                                                <i className="icon-nightlife" />
                                                                <span>Night Life</span>
                                                            </a>
                                                        </div>
                                                        <div className="listar-themepostfoot">
                                                            <a className="listar-location" href="javascript:void(0);">
                                                                <i className="icon-icons74" />
                                                                <em>New York</em>
                                                            </a>
                                                            <div className="listar-postbtns">
                                                                <a className="listar-btnquickinfo" href="#" data-toggle="modal" data-target=".listar-placequickview"><i className="icon-expand" /></a>
                                                                <a className="listar-btnquickinfo" href="javascript:void(0);"><i className="icon-heart2" /></a>
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
                                                <div className="listar-themepost listar-placespost">
                                                    <figure className="listar-featuredimg"><a href="detailv2.html"><img src="images/post/img-14.jpg" alt="image description" /></a></figure>
                                                    <div className="listar-postcontent">
                                                        <h3><a href="detailv2.html">Serena Hotel</a><i className="icon-checkmark listar-postverified listar-themetooltip" data-toggle="tooltip" data-placement="top" title="Verified" /></h3>
                                                        <div className="listar-description">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                                                        </div>
                                                        <div className="listar-reviewcategory">
                                                            <div className="listar-review">
                                                                <span className="listar-stars"><span /></span>
                                                                <em>(3 Review)</em>
                                                            </div>
                                                            <a href="listingv2.html" className="listar-category">
                                                                <i className="icon-tourism" />
                                                                <span>Hotel</span>
                                                            </a>
                                                        </div>
                                                        <div className="listar-themepostfoot">
                                                            <a className="listar-location" href="javascript:void(0);">
                                                                <i className="icon-icons74" />
                                                                <em>New York</em>
                                                            </a>
                                                            <div className="listar-postbtns">
                                                                <a className="listar-btnquickinfo" href="#" data-toggle="modal" data-target=".listar-placequickview"><i className="icon-expand" /></a>
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
                                                <div className="listar-themepost listar-placespost">
                                                    <figure className="listar-featuredimg"><a href="detailv1.html"><img src="images/post/img-15.jpg" alt="image description" /></a></figure>
                                                    <div className="listar-postcontent">
                                                        <h3><a href="detailv1.html">Tourist Guide</a></h3>
                                                        <div className="listar-description">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                                                        </div>
                                                        <div className="listar-reviewcategory">
                                                            <div className="listar-review">
                                                                <span className="listar-stars"><span /></span>
                                                                <em>(3 Review)</em>
                                                            </div>
                                                            <a href="listingvlist.html" className="listar-category">
                                                                <i className="icon-foods" />
                                                                <span>Food and Drinks</span>
                                                            </a>
                                                        </div>
                                                        <div className="listar-themepostfoot">
                                                            <a className="listar-location" href="javascript:void(0);">
                                                                <i className="icon-icons74" />
                                                                <em>New York</em>
                                                            </a>
                                                            <div className="listar-postbtns">
                                                                <a className="listar-btnquickinfo" href="#" data-toggle="modal" data-target=".listar-placequickview"><i className="icon-expand" /></a>
                                                                <a className="listar-btnquickinfo" href="javascript:void(0);"><i className="icon-heart2" /></a>
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
                                                <div className="listar-themepost listar-placespost">
                                                    <figure className="listar-featuredimg"><a href="detailv2.html"><img src="images/post/img-13.jpg" alt="image description" /></a></figure>
                                                    <div className="listar-postcontent">
                                                        <h3><a href="detailv2.html">Tourist Guide</a></h3>
                                                        <div className="listar-description">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                                                        </div>
                                                        <div className="listar-reviewcategory">
                                                            <div className="listar-review">
                                                                <span className="listar-stars"><span /></span>
                                                                <em>(3 Review)</em>
                                                            </div>
                                                            <a href="listingv1.html" className="listar-category">
                                                                <i className="icon-nightlife" />
                                                                <span>Night Life</span>
                                                            </a>
                                                        </div>
                                                        <div className="listar-themepostfoot">
                                                            <a className="listar-location" href="javascript:void(0);">
                                                                <i className="icon-icons74" />
                                                                <em>New York</em>
                                                            </a>
                                                            <div className="listar-postbtns">
                                                                <a className="listar-btnquickinfo" href="#" data-toggle="modal" data-target=".listar-placequickview"><i className="icon-expand" /></a>
                                                                <a className="listar-btnquickinfo" href="javascript:void(0);"><i className="icon-heart2" /></a>
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
                                                <div className="listar-themepost listar-placespost">
                                                    <figure className="listar-featuredimg"><a href="detailv1.html"><img src="images/post/img-14.jpg" alt="image description" /></a></figure>
                                                    <div className="listar-postcontent">
                                                        <h3><a href="detailv1.html">Serena Hotel</a><i className="icon-checkmark listar-postverified listar-themetooltip" data-toggle="tooltip" data-placement="top" title="Verified" /></h3>
                                                        <div className="listar-description">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                                                        </div>
                                                        <div className="listar-reviewcategory">
                                                            <div className="listar-review">
                                                                <span className="listar-stars"><span /></span>
                                                                <em>(3 Review)</em>
                                                            </div>
                                                            <a href="listingv1.html" className="listar-category">
                                                                <i className="icon-tourism" />
                                                                <span>Hotel</span>
                                                            </a>
                                                        </div>
                                                        <div className="listar-themepostfoot">
                                                            <a className="listar-location" href="javascript:void(0);">
                                                                <i className="icon-icons74" />
                                                                <em>New York</em>
                                                            </a>
                                                            <div className="listar-postbtns">
                                                                <a className="listar-btnquickinfo" href="#" data-toggle="modal" data-target=".listar-placequickview"><i className="icon-expand" /></a>
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
                                                <div className="listar-themepost listar-placespost">
                                                    <figure className="listar-featuredimg"><a href="detailv1.html"><img src="images/post/img-15.jpg" alt="image description" /></a></figure>
                                                    <div className="listar-postcontent">
                                                        <h3><a href="detailv1.html">Tourist Guide</a></h3>
                                                        <div className="listar-description">
                                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod</p>
                                                        </div>
                                                        <div className="listar-reviewcategory">
                                                            <div className="listar-review">
                                                                <span className="listar-stars"><span /></span>
                                                                <em>(3 Review)</em>
                                                            </div>
                                                            <a href="listingv2.html" className="listar-category">
                                                                <i className="icon-foods" />
                                                                <span>Food and Drinks</span>
                                                            </a>
                                                        </div>
                                                        <div className="listar-themepostfoot">
                                                            <a className="listar-location" href="javascript:void(0);">
                                                                <i className="icon-icons74" />
                                                                <em>New York</em>
                                                            </a>
                                                            <div className="listar-postbtns">
                                                                <a className="listar-btnquickinfo" href="#" data-toggle="modal" data-target=".listar-placequickview"><i className="icon-expand" /></a>
                                                                <a className="listar-btnquickinfo" href="javascript:void(0);"><i className="icon-heart2" /></a>
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
                                </div>
                            </div>
                        </section>
                        {/*************************************
					Discover New Places End
			**************************************/}
                        {/*************************************
					Add Listing Start
			**************************************/}
                        <section className="listar-themeparallax" data-appear-top-offset={600} data-parallax="scroll" data-image-src="images/parallax/bgparallax-02.jpg">
                            <div className="listar-parallaxcolor listar-parallaxaddlisting">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-push-2 col-md-8 col-lg-push-2 col-lg-8">
                                            <div className="listar-addlisting">
                                                <h2>Run and Grow Your Business With Listing Star from Anywhere</h2>
                                                <a className="listar-btn listar-btngreen" href="javascript:void(0);">
                                                    <i className="icon-plus" />
                                                    <span>Add Listing</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*************************************
					Add Listing End
			**************************************/}
                        {/*************************************
					Blog Post Start
			**************************************/}
                        <section className="listar-sectionspace listar-haslayout listar-bglight">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="listar-sectionhead">
                                            <div className="listar-sectiontitle">
                                                <h2>Latest News Posts</h2>
                                            </div>
                                            <div className="listar-description">
                                                <p>Checkout Latest News and Articles from <a className="listar-bluethemecolor" href="javascript:void(0);">Our Blog</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listar-themeposts listar-blogposts">
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="listar-themepost listar-post">
                                                <figure className="listar-featuredimg">
                                                    <a href="newsdetail.html"><img src="images/post/img-17.jpg" alt="image description" /></a>
                                                    <a className="listar-postcategory" href="newsv1.html">Fitness</a>
                                                </figure>
                                                <div className="listar-postcontent">
                                                    <figure className="listar-authorimg"><img src="images/author/img-01.jpg" height={54} width={54} alt="image description" /></figure>
                                                    <h3><a href="newsdetail.html">The most common mistakes people make at the gym</a></h3>
                                                    <div className="listar-themepostfoot">
                                                        <time dateTime="2017-08-08">
                                                            <i className="icon-clock4" />
                                                            <span>Apr 22, 2018</span>
                                                        </time>
                                                        <span className="listar-postcomment">
                                                            <i className="icon-comment" />
                                                            <span>3 Comments</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="listar-themepost listar-post">
                                                <figure className="listar-featuredimg">
                                                    <a href="newsdetail.html"><img src="images/post/img-18.jpg" alt="image description" /></a>
                                                    <a className="listar-postcategory" href="newsv2.html">Enjoy Life</a>
                                                </figure>
                                                <div className="listar-postcontent">
                                                    <figure className="listar-authorimg"><img src="images/author/img-02.jpg" alt="image description" /></figure>
                                                    <h3><a href="newsdetail.html">Here's how drinking can be good for your wellbeing</a></h3>
                                                    <div className="listar-themepostfoot">
                                                        <time dateTime="2017-08-08">
                                                            <i className="icon-clock4" />
                                                            <span>Apr 22, 2018</span>
                                                        </time>
                                                        <span className="listar-postcomment">
                                                            <i className="icon-comment" />
                                                            <span>3 Comments</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                                            <div className="listar-themepost listar-post">
                                                <figure className="listar-featuredimg">
                                                    <a href="newsdetail.html"><img src="images/post/img-19.jpg" alt="image description" /></a>
                                                    <a className="listar-postcategory" href="newsv1.html">Travel</a>
                                                </figure>
                                                <div className="listar-postcontent">
                                                    <figure className="listar-authorimg"><img src="images/author/img-03.jpg" alt="image description" /></figure>
                                                    <h3><a href="newsdetail.html">12 of the best family days out in the Melbourne</a></h3>
                                                    <div className="listar-themepostfoot">
                                                        <time dateTime="2017-08-08">
                                                            <i className="icon-clock4" />
                                                            <span>Apr 22, 2018</span>
                                                        </time>
                                                        <span className="listar-postcomment">
                                                            <i className="icon-comment" />
                                                            <span>3 Comments</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*************************************
					Blog Post End
			**************************************/}
                        {/*************************************
					Testimonials Start
			**************************************/}
                        <section className="listar-sectionspace listar-haslayout">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="listar-sectionhead">
                                            <div className="listar-sectiontitle">
                                                <h2>People Feedback</h2>
                                            </div>
                                            <div className="listar-description">
                                                <p>What our Clients Says <a className="listar-bluethemecolor" href="javascript:void(0);">View All</a></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-push-2 col-lg-8">
                                        <div id="listar-testimonialslider" className="listar-testimonialslider listar-testimonials owl-carousel">
                                            <div className="item listar-testimonial">
                                                <figure>
                                                    <img src="images/author/img-04.jpg" alt="image description" />
                                                    <figcaption>
                                                        <h3>John Doe</h3>
                                                        <h4>Manager at GreenTech</h4>
                                                    </figcaption>
                                                </figure>
                                                <blockquote>
                                                    <h5>Good Design</h5>
                                                    <q>Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat.</q>
                                                </blockquote>
                                            </div>
                                            <div className="item listar-testimonial">
                                                <figure>
                                                    <img src="images/author/img-04.jpg" alt="image description" />
                                                    <figcaption>
                                                        <h3>John Doe</h3>
                                                        <h4>Manager at GreenTech</h4>
                                                    </figcaption>
                                                </figure>
                                                <blockquote>
                                                    <h5>Good Design</h5>
                                                    <q>Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat.</q>
                                                </blockquote>
                                            </div>
                                            <div className="item listar-testimonial">
                                                <figure>
                                                    <img src="images/author/img-04.jpg" alt="image description" />
                                                    <figcaption>
                                                        <h3>John Doe</h3>
                                                        <h4>Manager at GreenTech</h4>
                                                    </figcaption>
                                                </figure>
                                                <blockquote>
                                                    <h5>Good Design</h5>
                                                    <q>Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat.</q>
                                                </blockquote>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*************************************
					Testimonials End
			**************************************/}
                        {/*************************************
					Three Columns Start
			**************************************/}
                        <section className="listar-haslayout">
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 pull-left">
                                <div className="row">
                                    <div className="listar-postfirstlisting">
                                        <figure><a href="javascript:void(0);"><img src="images/placeholder-03.png" alt="image description" /></a></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 pull-right">
                                <div className="row">
                                    <div className="listar-followus">
                                        <figure><a href="javascript:void(0);"><img src="images/placeholder-04.png" alt="image description" /></a></figure>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                <div className="row">
                                    <div className="listar-newsletter">
                                        <div className="listar-newsletteroverlay">
                                            <h2>Newsletter</h2>
                                            <div className="listar-description">
                                                <p>Lorem ipsum dolor sit amet, eu per legimus referrentur. Ius ne viris repudiare, nominavi sententiae eos in. Et duo salutatus consequat.</p>
                                            </div>
                                            <form className="listar-formtheme listar-formnewsletter">
                                                <fieldset>
                                                    <input type="email" name="email" className="form-control" placeholder="Your email address" />
                                                    <button type="button"><i className="icon-arrow-right2" /></button>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/*************************************
					Three Columns End
			**************************************/}
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