import React, { Component } from 'react';

export default class AddInfoDoctor extends Component {
    state = {}
    render() {
        return (
            <form className="listar-formtheme listar-formaddreview">
                <fieldset>
                    <div className="row">
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
                                <input type="text" name="website" className="form-control" placeholder="Website" />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="form-group">
                                <textarea name="message" className="form-control" placeholder="Message" defaultValue={""} />
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button className="listar-btn listar-btngreen" type="button">Post Comment</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        );
    }
}