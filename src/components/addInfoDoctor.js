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
                <label for="pwd">Doctor:</label>
                <input type="text" name="yourname" className="form-control" placeholder="Dr. Quang" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label for="pwd">Hospital:</label>
                <input type="text" name="emailaddress" className="form-control" placeholder="Thu Duc Hospital" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="form-group">
                <label for="pwd">Sequelae:</label>
                <textarea name="message" className="form-control" placeholder="Message" defaultValue={""} />
              </div>
              <div className="form-group">
                <label for="pwd">Symptoms:</label>
                <textarea name="message" className="form-control" placeholder="Message" defaultValue={""} />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button className="listar-btn listar-btngreen" type="button">Submit</button>
            </div>
          </div>
        </fieldset>
      </form>
    );
  }
}