import React, { Component } from 'react';

export default class TrackingHealth extends Component {
  state = {}
  render() {
    return (
      <form className="listar-formtheme listar-formaddreview">
        <fieldset>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label for="pwd">Blood Pressure(min):</label>
                <input type="number" name="yourname" min="0" className="form-control" />
              </div>
              <div className="form-group">
                <label for="pwd">Blood Pressure(max):</label>
                <input type="number" name="yourname" min="0" className="form-control" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label for="pwd">Respiratory rate:</label>
                <input type="number" name="emailaddress" min="0" className="form-control" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label for="pwd">Temperature:</label>
                <input type="number" name="yourname" min="0" className="form-control" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div className="form-group">
                <label for="pwd">Pulse rate:</label>
                <input type="number" name="yourname" min="0" className="form-control" />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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