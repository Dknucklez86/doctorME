var React = require('react');

var AddAppointment = React.createClass({

  toggleAptDisplay: function() {
    this.props.handleToggle();
  },

  handleAdd: function(e) {
    var tempItem = {
      firstName: this.refs.inputFirstName.value,
      lastName: this.refs.inputLastName.value,
      aptDate: this.refs.inputAptDate.value + ' ' +
        this.refs.inputAptTime.value,
      aptNotes: this.refs.inputMedNotes.value
    } //tempItem
    e.preventDefault();
    this.props.addApt(tempItem);
  }, //handleAdd

  render: function() {

    var displayAptBody = {
      display: this.props.bodyVisible ? 'block' : 'none'
    };

    return(
      <div className="panel panel-primary">
        <div className="panel-heading apt-addheading" onClick={ this.toggleAptDisplay }>
        <span className="glyphicon glyphicon-plus"></span> Add Appointment</div>
        <div className="panel-body" style={ displayAptBody }>
          <form className="add-appointment form-horizontal"
          onSubmit={ this.handleAdd }>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="firstName">First Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="firstName" ref="inputFirstName" placeholder="First Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="petOwner">Pet Owner</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="lastName" ref="inputLastName" placeholder="Last Name" />
              </div>
            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="aptDate">Date</label>
              <div className="col-sm-4">
                <input type="date" className="form-control"
                  id="aptDate" ref="inputAptDate" />
              </div>
              <label className="col-sm-2 control-label" htmlFor="aptTime">Time</label>
              <div className="col-sm-4">
                <input type="time" className="form-control"
                  id="aptTime" ref="inputAptTime" />
              </div>

            </div>
            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="aptNotes">Medical Notes</label>
              <div className="col-sm-10">
                <textarea className="form-control" rows="4" cols="50"
                  id="aptNotes" ref="inputMedNotes" placeholder="Medical Notes"></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">Add Appointment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )//return
  } //render
}); // AddAppointment

module.exports = AddAppointment;
