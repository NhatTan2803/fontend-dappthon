import React, { Component } from 'react'
import AddInfoDoctor from '../components/addInfoDoctor';
import TrackingHealth from '../components/trackingHealth'
import Footer from '../components/footer'
import Header from '../components/header';


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
                    <Header />
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
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                        <div className="listar-postcontent" style={{ marginTop: "23px", }}>
                                        </div>
                                        <div className="listar-themetabs">
                                            <ul className="listar-themetabnav" role="tablist">
                                                <li role="presentation" className="active"><a href="#overview" aria-controls="overview" role="tab" data-toggle="tab">Overview</a></li>
                                                <li role="presentation"><a href="#pricing" aria-controls="pricing" role="tab" data-toggle="tab">Patient History</a></li>

                                                <li role="presentation"><a href="#reviews" aria-controls="reviews" role="tab" data-toggle="tab">Tracking Health Form</a></li>
                                                <li role="presentation"><a href="#gallery" aria-controls="gallery" role="tab" data-toggle="tab">Images</a></li>
                                            </ul>
                                            <div className="tab-content listar-themetabcontent">
                                                <div role="tabpanel" className="tab-pane active listar-overview" id="overview">
                                                    <div className="listar-leftbox">
                                                        <p>Headache</p>
                                                        <p>Feel not good</p>
                                                        <p>High blood pressure</p>
                                                        <p>He got a pain in his back</p>
                                                    </div>
                                                    <div className="listar-rightbox">
                                                        <div className="listar-amenitiesarea">
                                                            <div className="listar-title">
                                                                <h3>Status</h3>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <ul>
                                                                        <li>Blood Pressure: 120/180mmHg</li>
                                                                        <li>Respiratory rate: 100/min</li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <ul className="">
                                                                        <li>Temperature: 37&#176;C</li>
                                                                        <li>Pulse rate: 25/min</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="listar-openinghoursarea">
                                                            <div className="listar-title">
                                                                <h3>Admission Time</h3>
                                                                <h6>Health Tracking</h6>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <label for="email">From:</label>
                                                                    <input type="date" class="form-control" id="email" />
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <label for="pwd">To:</label>
                                                                    <input type="date" class="form-control" id="pwd" />
                                                                </div>
                                                            </div>
                                                            <br />
                                                            <ul className="listar-openinghours">
                                                                <li>
                                                                    <a href="#">
                                                                        <span style={{ color: '#5c5c5c' }}>Monday</span>
                                                                        <span style={{ color: '#5c5c5c' }}>10:00 AM</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span style={{ color: '#5c5c5c' }}>Tuesday</span>
                                                                        <span style={{ color: '#5c5c5c' }}>10:00 AM</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span style={{ color: '#5c5c5c' }}>Wednesday</span>
                                                                        <span style={{ color: '#5c5c5c' }}>10:00 AM</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span style={{ color: '#5c5c5c' }}>Thursday</span>
                                                                        <span style={{ color: '#5c5c5c' }}>10:00 AM</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span style={{ color: '#5c5c5c' }}>Friday</span>
                                                                        <span style={{ color: '#5c5c5c' }}>10:00 AM</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span style={{ color: '#5c5c5c' }}>Saturday</span>
                                                                        <span style={{ color: '#5c5c5c' }}>10:00 AM</span>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <span style={{ color: '#5c5c5c' }}>Sunday</span>
                                                                        <span style={{ color: '#5c5c5c' }}>10:00 AM</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div role="tabpanel" className="tab-pane listar-pricing" id="pricing">
                                                    <AddInfoDoctor />
                                                </div>
                                                <div role="tabpanel" className="tab-pane listar-addressmaplocation" id="location">
                                                    <div id="listar-postlocationmap" className="listar-postlocationmap" />
                                                </div>
                                                <div role="tabpanel" className="tab-pane" id="reviews">
                                                    <TrackingHealth />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    {/*************************************
				Main End
		**************************************/}
                    {/*************************************
				Footer Start
		**************************************/}
                    <Footer />
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