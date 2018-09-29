import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        return (
            
                    <div>
                        <div className="preloader-outer">
                            <div className="pin" />
                            <div className="pulse" />
                        </div>
                        {/*************************************
			Preloader End
	**************************************/}
                        {/*************************************
			Wrapper Start
	**************************************/}
                        <div id="listar-wrapper" className="listar-wrapper listar-haslayout">
                            {/*************************************
				Header Start
		**************************************/}
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
                            {/*************************************
				Header End
		**************************************/}
                            {/*************************************
				Inner Search Start
		**************************************/}
                            <div className="listar-innerpagesearch">
                                <a id="listar-btnsearchtoggle" className="listar-btnsearchtoggle" href="javascript:void(0);"><i className="icon-icons185" /></a>
                                <div id="listar-innersearch" className="listar-innersearch">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <form className="listar-formtheme listar-formsearchlisting">
                                                    <fieldset>
                                                        <div className="form-group listar-inputwithicon">
                                                            <i className="icon-layers" />
                                                            <div className="listar-select">
                                                                <select id="listar-categorieschosen" className="listar-categorieschosen listar-chosendropdown">
                                                                    <option>Ex: Food, Retail, hotel, cinema</option>
                                                                    <option className="icon-entertainment">Art &amp; Entertainment</option>
                                                                    <option className="icon-shopping">Beauty &amp; Health</option>
                                                                    <option className="icon-study">Education</option>
                                                                    <option className="icon-healthfitness">Fitness</option>
                                                                    <option className="icon-icons240">Hotels</option>
                                                                    <option className="icon-localservice">Motor Mechanic</option>
                                                                    <option className="icon-nightlife">Night Life</option>
                                                                    <option className="icon-tourism">Restaurant</option>
                                                                    <option className="icon-shopping">Real Estate</option>
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
                                                            {/* <input id="listar-rangeslider" data-slider-id='ex1Slider' type="text" data-slider-min="0" data-slider-max="20" data-slider-step="1" data-slider-value="14"> */}
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
                            {/*************************************
				Inner Search End
		**************************************/}
                            {/*************************************
				Main Start
		**************************************/}
                            <main id="listar-main" className="listar-main listar-haslayout">
                                <div className="listar-themepost listar-placespost listar-detail listar-detailvone">
                                    <figure className="listar-featuredimg"><img src="images/post/img-23.jpg" alt="image description" /></figure>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="listar-postcontent">
                                                    <h1>Salt &amp; Pepper Emporium<i className="icon-checkmark listar-postverified listar-themetooltip" data-toggle="tooltip" data-placement="top" title data-original-title="Verified" /></h1>
                                                    <div className="listar-reviewcategory">
                                                        <div className="listar-review">
                                                            <span className="listar-stars"><span /></span>
                                                            <em>(6 Review)</em>
                                                        </div>
                                                        <ul className="listar-postinfotags">
                                                            <li><a href="javascript:void(0);"><i className="icon-heart2" /><span>23</span></a></li>
                                                            <li>
                                                                <div className="listar-btnquickinfo">
                                                                    <a className="listar-btnshare" href="javascript:void(0);">
                                                                        <i className="icon-share3" />
                                                                        <span>share</span>
                                                                    </a>
                                                                    <div className="listar-btnquickinfo">
                                                                        <div className="listar-shareicons">
                                                                            <a href="javascript:void(0);"><i className="fa fa-twitter" /></a>
                                                                            <a href="javascript:void(0);"><i className="fa fa-facebook" /></a>
                                                                            <a href="javascript:void(0);"><i className="fa fa-pinterest-p" /></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                            <li><span className="listar-tagviews"><i className="icon-eye2" /><span>52</span></span></li>
                                                        </ul>
                                                    </div>
                                                    <div className="listar-themepostfoot">
                                                        <ul>
                                                            <li>
                                                                <i className="icon-telephone114" />
                                                                <span>+ 7890 456 133</span>
                                                            </li>
                                                            <li>
                                                                <i className="icon-icons74" />
                                                                <span>Manhattan Hall, London W1K 2EQ UK</span>
                                                            </li>
                                                            <li>
                                                                <i className="icon-icons20" />
                                                                <span>Today <span>Closed Now</span> 10:00 AM - 5:00 PM</span>
                                                            </li>
                                                            <li>
                                                                <i className="icon-global" />
                                                                <span><a href="www.listingstar.com">www.listingstar.com</a></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="listar-themetabs">
                                                    <ul className="listar-themetabnav" role="tablist">
                                                        <li role="presentation" className="active"><a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overview</a></li>
                                                        <li role="presentation"><a href="#pricing" aria-controls="pricing" role="tab" data-toggle="tab">Pricing</a></li>
                                                        <li role="presentation"><a href="#location" aria-controls="location" role="tab" data-toggle="tab">Location</a></li>
                                                        <li role="presentation"><a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">Reviews</a></li>
                                                        <li role="presentation"><a href="#gallery" aria-controls="gallery" role="tab" data-toggle="tab">Gallery</a></li>
                                                    </ul>
                                                    <div className="tab-content listar-themetabcontent">
                                                        <div role="tabpanel" className="tab-pane active listar-overview" id="overview">
                                                            <div className="listar-leftbox">
                                                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Etiam porta sem malesuada magna mollis euismod.</p>
                                                                <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo.</p>
                                                                <p>Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi.</p>
                                                                <p>Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam.</p>
                                                                <div className="listar-videobox">
                                                                    <iframe src="https://player.vimeo.com/video/234265016?byline=0&portrait=0" />
                                                                </div>
                                                            </div>
                                                            <div className="listar-rightbox">
                                                                <div className="listar-amenitiesarea">
                                                                    <div className="listar-title">
                                                                        <h3>Amenities</h3>
                                                                    </div>
                                                                    <ul className="listar-amenities">
                                                                        <li>Pets allowed</li>
                                                                        <li>Kitchen</li>
                                                                        <li>Internet</li>
                                                                        <li>Suitable for events</li>
                                                                        <li>Gym</li>
                                                                        <li>Dryer</li>
                                                                        <li>Hot tub</li>
                                                                        <li>Family/kid friendly</li>
                                                                        <li>Doorman</li>
                                                                        <li>Cable TV</li>
                                                                        <li>Wheelchair accessible</li>
                                                                        <li>Wireless Internet</li>
                                                                        <li>Pool</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="listar-openinghoursarea">
                                                                    <div className="listar-title">
                                                                        <h3>Opening Hours</h3>
                                                                    </div>
                                                                    <ul className="listar-openinghours">
                                                                        <li>
                                                                            <span>Monday</span>
                                                                            <span>10:00 AM - 5:00 PM</span>
                                                                        </li>
                                                                        <li>
                                                                            <span>Tuesday</span>
                                                                            <span>10:00 AM - 5:00 PM</span>
                                                                        </li>
                                                                        <li>
                                                                            <span>Wednesday</span>
                                                                            <span>10:00 AM - 5:00 PM</span>
                                                                        </li>
                                                                        <li>
                                                                            <span>Thursday</span>
                                                                            <span>10:00 AM - 5:00 PM</span>
                                                                        </li>
                                                                        <li>
                                                                            <span>Friday</span>
                                                                            <span>10:00 AM - 5:00 PM</span>
                                                                        </li>
                                                                        <li>
                                                                            <span>Saturday</span>
                                                                            <span>10:00 AM - 3:00 PM</span>
                                                                        </li>
                                                                        <li>
                                                                            <span>Sunday</span>
                                                                            <span>Closed</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div role="tabpanel" className="tab-pane listar-pricing" id="pricing">
                                                            <ul className="listar-prices">
                                                                <li>
                                                                    <div className="listar-pricebox">
                                                                        <h3>Chicken Corn Soup</h3>
                                                                        <p>Served with Fish Crackers (Individual)</p>
                                                                        <span className="listar-price">$12</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-pricebox">
                                                                        <h3>Chicken Corn Soup</h3>
                                                                        <p>Served with Fish Crackers (Individual)</p>
                                                                        <span className="listar-price">$12</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-pricebox">
                                                                        <h3>Masala Fries</h3>
                                                                        <p>Served with Fish Crackers (Individual)</p>
                                                                        <span className="listar-price">$5</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-pricebox">
                                                                        <h3>Chicken Corn Soup</h3>
                                                                        <p>Served with Fish Crackers (Individual)</p>
                                                                        <span className="listar-price">$12</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-pricebox">
                                                                        <h3>Inside Out Sandwich</h3>
                                                                        <p>Served with Fish Crackers (Individual)</p>
                                                                        <span className="listar-price">$54</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-pricebox">
                                                                        <h3>Chicken Corn Soup</h3>
                                                                        <p>Served with Fish Crackers (Individual)</p>
                                                                        <span className="listar-price">$12</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-pricebox">
                                                                        <h3>Chicken Corn Soup</h3>
                                                                        <p>Served with Fish Crackers (Individual)</p>
                                                                        <span className="listar-price">$12</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-pricebox">
                                                                        <h3>Chicken Corn Soup</h3>
                                                                        <p>Served with Fish Crackers (Individual)</p>
                                                                        <span className="listar-price">$12</span>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-pricebox">
                                                                        <h3>Chicken Corn Soup</h3>
                                                                        <p>Served with Fish Crackers (Individual)</p>
                                                                        <span className="listar-price">$12</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div role="tabpanel" className="tab-pane listar-addressmaplocation" id="location">
                                                            <div id="listar-postlocationmap" className="listar-postlocationmap" />
                                                        </div>
                                                        <div role="tabpanel" className="tab-pane" id="reviews">
                                                            <ul id="listar-comments" className="listar-comments">
                                                                <li>
                                                                    <div className="listar-comment">
                                                                        <div className="listar-commentauthorbox">
                                                                            <figure><a href="javascript:void(0);"><img src="images/img-02.jpg" alt="image description" /></a></figure>
                                                                            <div className="listar-authorinfo">
                                                                                <h3>Katie</h3>
                                                                                <em>Family Vacation</em>
                                                                                <span className="listar-stars"><span /></span>
                                                                            </div>
                                                                        </div>
                                                                        <a className="listar-helpful" href="javascript:void(0);">
                                                                            <i className="icon-thumb-up2" />
                                                                            <span>Helpful</span>
                                                                            <span>1</span>
                                                                        </a>
                                                                        <div className="listar-commentcontent">
                                                                            <time dateTime="2017-09-09">
                                                                                <i className="icon-alarmclock" />
                                                                                <span>January 25, 2017</span>
                                                                            </time>
                                                                            <div className="listar-description">
                                                                                <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</p>
                                                                                <ul className="listar-authorgallery">
                                                                                    <li><figure><a href="images/img-03.jpg" data-rel="prettyPhoto[userimgone]"><img src="images/img-03.jpg" alt="image description" /></a></figure></li>
                                                                                    <li><figure><a href="images/img-04.jpg" data-rel="prettyPhoto[userimgone]"><img src="images/img-04.jpg" alt="image description" /></a></figure></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-comment">
                                                                        <div className="listar-commentauthorbox">
                                                                            <figure><a href="javascript:void(0);"><img src="images/img-02.jpg" alt="image description" /></a></figure>
                                                                            <div className="listar-authorinfo">
                                                                                <h3>Katie</h3>
                                                                                <em>Family Vacation</em>
                                                                                <span className="listar-stars"><span /></span>
                                                                            </div>
                                                                        </div>
                                                                        <a className="listar-helpful" href="javascript:void(0);">
                                                                            <i className="icon-thumb-up2" />
                                                                            <span>Helpful</span>
                                                                        </a>
                                                                        <div className="listar-commentcontent">
                                                                            <time dateTime="2017-09-09">
                                                                                <i className="icon-alarmclock" />
                                                                                <span>January 25, 2017</span>
                                                                            </time>
                                                                            <div className="listar-description">
                                                                                <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra justo.</p>
                                                                                <p>First, please don’t fall sick. However, if in case something does catchup with you, we will airlift you to hospital but your insurance will have to pay for this. Ulins aliquam massa nisl quis neque. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut liquam massa nisl quis neque.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-comment">
                                                                        <div className="listar-commentauthorbox">
                                                                            <figure><a href="javascript:void(0);"><img src="images/img-02.jpg" alt="image description" /></a></figure>
                                                                            <div className="listar-authorinfo">
                                                                                <h3>Katie</h3>
                                                                                <em>Family Vacation</em>
                                                                                <span className="listar-stars"><span /></span>
                                                                            </div>
                                                                        </div>
                                                                        <a className="listar-helpful" href="javascript:void(0);">
                                                                            <i className="icon-thumb-up2" />
                                                                            <span>Helpful</span>
                                                                        </a>
                                                                        <div className="listar-commentcontent">
                                                                            <time dateTime="2017-09-09">
                                                                                <i className="icon-alarmclock" />
                                                                                <span>January 25, 2017</span>
                                                                            </time>
                                                                            <div className="listar-description">
                                                                                <p>What a magical place, even better than I imagined! Teresa and Daniella were so helpful and awesome</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-comment">
                                                                        <div className="listar-commentauthorbox">
                                                                            <figure><a href="javascript:void(0);"><img src="images/img-02.jpg" alt="image description" /></a></figure>
                                                                            <div className="listar-authorinfo">
                                                                                <h3>Katie</h3>
                                                                                <em>Family Vacation</em>
                                                                                <span className="listar-stars"><span /></span>
                                                                            </div>
                                                                        </div>
                                                                        <a className="listar-helpful" href="javascript:void(0);">
                                                                            <i className="icon-thumb-up2" />
                                                                            <span>Helpful</span>
                                                                            <span>1</span>
                                                                        </a>
                                                                        <div className="listar-commentcontent">
                                                                            <time dateTime="2017-09-09">
                                                                                <i className="icon-alarmclock" />
                                                                                <span>January 25, 2017</span>
                                                                            </time>
                                                                            <div className="listar-description">
                                                                                <p>Very nice place</p>
                                                                                <ul className="listar-authorgallery">
                                                                                    <li><figure><a href="images/img-04.jpg" data-rel="prettyPhoto[userimgtwo]"><img src="images/img-04.jpg" alt="image description" /></a></figure></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div className="listar-comment">
                                                                        <div className="listar-commentauthorbox">
                                                                            <figure><a href="javascript:void(0);"><img src="images/img-02.jpg" alt="image description" /></a></figure>
                                                                            <div className="listar-authorinfo">
                                                                                <h3>Katie</h3>
                                                                                <em>Family Vacation</em>
                                                                                <span className="listar-stars"><span /></span>
                                                                            </div>
                                                                        </div>
                                                                        <a className="listar-helpful" href="javascript:void(0);">
                                                                            <i className="icon-thumb-up2" />
                                                                            <span>Helpful</span>
                                                                            <span>5</span>
                                                                        </a>
                                                                        <div className="listar-commentcontent">
                                                                            <time dateTime="2017-09-09">
                                                                                <i className="icon-alarmclock" />
                                                                                <span>January 25, 2017</span>
                                                                            </time>
                                                                            <div className="listar-description">
                                                                                <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue Sed non mauris vitae;erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo First, please don’t fall sick. However, if in case something does catchup.</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                            <nav className="listar-pagination">
                                                                <ul>
                                                                    <li className="listar-prevpage"><a href="javascript:void(0);"><i className="fa fa-angle-left" /></a></li>
                                                                    <li><a href="javascript:void(0);">1</a></li>
                                                                    <li><a href="javascript:void(0);">2</a></li>
                                                                    <li><a href="javascript:void(0);">3</a></li>
                                                                    <li className="listar-nextpage"><a href="javascript:void(0);"><i className="fa fa-angle-right" /></a></li>
                                                                </ul>
                                                            </nav>
                                                            <div className="listar-formreviewarea">
                                                                <h3>Add Review</h3>
                                                                <form className="listar-formtheme listar-formaddreview">
                                                                    <fieldset>
                                                                        <div className="row">
                                                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                                                <div className="listar-rating">
                                                                                    <p>Your rating for this listing</p>
                                                                                    <span className="listar-stars" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                                                <label className="listar-fileuploadlabel" htmlFor="listar-photogallery">
                                                                                    <i className="icon-upload3" />
                                                                                    <span>Upload Images</span>
                                                                                    <input id="listar-photogallery" className="listar-fileinput" type="file" name="file" />
                                                                                </label>
                                                                            </div>
                                                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                                                <div className="form-group">
                                                                                    <input type="text" name="yourname" className="form-control" placeholder="Your Name" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                                                <div className="form-group">
                                                                                    <input type="text" name="emailaddress" className="form-control" placeholder="Email Address" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                                                                <div className="form-group">
                                                                                    <span className="listar-select">
                                                                                        <select>
                                                                                            <option>Family Vacation</option>
                                                                                            <option>Family Vacation</option>
                                                                                            <option>Family Vacation</option>
                                                                                        </select>
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <div className="form-group">
                                                                                    <textarea name="review" className="form-control" placeholder="Review" defaultValue={""} />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                                                <button className="listar-btn listar-btngreen" type="button">Submit Review</button>
                                                                            </div>
                                                                        </div>
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                        <div role="tabpanel" className="tab-pane" id="gallery">
                                                            <div id="listar-postgallery" className="listar-postgallery">
                                                                <div className="listar-masnory"><figure><a href="images/gallery/img-01.jpg" data-rel="prettyPhoto[gallery]"><img src="images/gallery/img-01.jpg" alt="image description" /></a></figure></div>
                                                                <div className="listar-masnory"><figure><a href="images/gallery/img-02.jpg" data-rel="prettyPhoto[gallery]"><img src="images/gallery/img-02.jpg" alt="image description" /></a></figure></div>
                                                                <div className="listar-masnory"><figure><a href="images/gallery/img-03.jpg" data-rel="prettyPhoto[gallery]"><img src="images/gallery/img-03.jpg" alt="image description" /></a></figure></div>
                                                                <div className="listar-masnory"><figure><a href="images/gallery/img-05.jpg" data-rel="prettyPhoto[gallery]"><img src="images/gallery/img-05.jpg" alt="image description" /></a></figure></div>
                                                                <div className="listar-masnory"><figure><a href="images/gallery/img-04.jpg" data-rel="prettyPhoto[gallery]"><img src="images/gallery/img-04.jpg" alt="image description" /></a></figure></div>
                                                                <div className="listar-masnory"><figure><a href="images/gallery/img-06.jpg" data-rel="prettyPhoto[gallery]"><img src="images/gallery/img-06.jpg" alt="image description" /></a></figure></div>
                                                                <div className="listar-masnory"><figure><a href="images/gallery/img-07.jpg" data-rel="prettyPhoto[gallery]"><img src="images/gallery/img-07.jpg" alt="image description" /></a></figure></div>
                                                                <div className="listar-masnory"><figure><a href="images/gallery/img-08.jpg" data-rel="prettyPhoto[gallery]"><img src="images/gallery/img-08.jpg" alt="image description" /></a></figure></div>
                                                                <div className="listar-masnory"><figure><a href="images/gallery/img-09.jpg" data-rel="prettyPhoto[gallery]"><img src="images/gallery/img-09.jpg" alt="image description" /></a></figure></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <section className="listar-sectionspace listar-bglight listar-listingvtwo listar-haslayout">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                <div className="listar-title">
                                                    <h3>Amenities</h3>
                                                </div>
                                                <div id="listar-relatedlistingslider" className="listar-relatedlistingslider listar-gridview owl-carousel">
                                                    <div className="item">
                                                        <div className="listar-themepost listar-placespost">
                                                            <figure className="listar-featuredimg">
                                                                <img src="images/post/img-13.jpg" alt="image description" />
                                                                <div className="listar-postcontent">
                                                                    <h3><a href="javascript:void(0);">Tourist Guide</a></h3>
                                                                    <div className="listar-reviewcategory">
                                                                        <div className="listar-review">
                                                                            <span className="listar-stars"><span /></span>
                                                                            <em>(3 Review)</em>
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="listar-category">
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
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="listar-themepost listar-placespost">
                                                            <figure className="listar-featuredimg">
                                                                <img src="images/post/img-14.jpg" alt="image description" />
                                                                <div className="listar-postcontent">
                                                                    <h3><a href="javascript:void(0);">Serena Hotel</a><i className="icon-checkmark listar-postverified listar-themetooltip" data-toggle="tooltip" data-placement="top" title data-original-title="Verified" /></h3>
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
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="listar-themepost listar-placespost">
                                                            <figure className="listar-featuredimg">
                                                                <img src="images/post/img-15.jpg" alt="image description" />
                                                                <div className="listar-postcontent">
                                                                    <h3><a href="javascript:void(0);">Tourist Guide</a></h3>
                                                                    <div className="listar-reviewcategory">
                                                                        <div className="listar-review">
                                                                            <span className="listar-stars"><span /></span>
                                                                            <em>(3 Review)</em>
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="listar-category">
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
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="listar-themepost listar-placespost">
                                                            <figure className="listar-featuredimg">
                                                                <img src="images/post/img-13.jpg" alt="image description" />
                                                                <div className="listar-postcontent">
                                                                    <h3><a href="javascript:void(0);">Tourist Guide</a></h3>
                                                                    <div className="listar-reviewcategory">
                                                                        <div className="listar-review">
                                                                            <span className="listar-stars"><span /></span>
                                                                            <em>(3 Review)</em>
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="listar-category">
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
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="listar-themepost listar-placespost">
                                                            <figure className="listar-featuredimg">
                                                                <img src="images/post/img-14.jpg" alt="image description" />
                                                                <div className="listar-postcontent">
                                                                    <h3><a href="javascript:void(0);">Serena Hotel</a><i className="icon-checkmark listar-postverified listar-themetooltip" data-toggle="tooltip" data-placement="top" title data-original-title="Verified" /></h3>
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
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="listar-themepost listar-placespost">
                                                            <figure className="listar-featuredimg">
                                                                <img src="images/post/img-15.jpg" alt="image description" />
                                                                <div className="listar-postcontent">
                                                                    <h3><a href="javascript:void(0);">Tourist Guide</a></h3>
                                                                    <div className="listar-reviewcategory">
                                                                        <div className="listar-review">
                                                                            <span className="listar-stars"><span /></span>
                                                                            <em>(3 Review)</em>
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="listar-category">
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
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="listar-themepost listar-placespost">
                                                            <figure className="listar-featuredimg">
                                                                <img src="images/post/img-13.jpg" alt="image description" />
                                                                <div className="listar-postcontent">
                                                                    <h3><a href="javascript:void(0);">Tourist Guide</a></h3>
                                                                    <div className="listar-reviewcategory">
                                                                        <div className="listar-review">
                                                                            <span className="listar-stars"><span /></span>
                                                                            <em>(3 Review)</em>
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="listar-category">
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
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="listar-themepost listar-placespost">
                                                            <figure className="listar-featuredimg">
                                                                <img src="images/post/img-14.jpg" alt="image description" />
                                                                <div className="listar-postcontent">
                                                                    <h3><a href="javascript:void(0);">Serena Hotel</a><i className="icon-checkmark listar-postverified listar-themetooltip" data-toggle="tooltip" data-placement="top" title data-original-title="Verified" /></h3>
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
                                                            </figure>
                                                        </div>
                                                    </div>
                                                    <div className="item">
                                                        <div className="listar-themepost listar-placespost">
                                                            <figure className="listar-featuredimg">
                                                                <img src="images/post/img-15.jpg" alt="image description" />
                                                                <div className="listar-postcontent">
                                                                    <h3><a href="javascript:void(0);">Tourist Guide</a></h3>
                                                                    <div className="listar-reviewcategory">
                                                                        <div className="listar-review">
                                                                            <span className="listar-stars"><span /></span>
                                                                            <em>(3 Review)</em>
                                                                        </div>
                                                                        <a href="javascript:void(0);" className="listar-category">
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
                                                            </figure>
                                                        </div>
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
                                                            <div className="form-group">
                                                                <div className="listar-checkbox">
                                                                    <input type="checkbox" name="remember" id="rememberpass" />
                                                                    <label htmlFor="rememberpass">Remember me</label>
                                                                </div>
                                                                <span><a href="#">Lost your Password?</a></span>
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
                        {/*************************************
			Login Singup End
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
                    </div>
        );
    }
}