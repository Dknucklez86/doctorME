var Timeline = React.createClass({
    getInitialState(){
        return {editing: false} //vertical timeline initial state
    },
    edit(){
        this.setState({editing: true}) //vertical timeline editing state
    },
    save(){
        var valTitle = this.refs.newTitle.value
        var valNote = this.refs.newNote.value
        alert('Later we will save this value: ' + valTitle)
        alert('We will also save this value: ' + valNote)
        this.setState({editing: false})
        //vertical timeline save state
    },
    remove(){
        alert("Removing Note")
    },
    renderForm(){
        //Medical note date & time stamp
        var dtime = new Date(),
            day = dtime.getDate(),
            month = dtime.toLocaleString("en", { month: "long"}),
            year = dtime.getFullYear(),
            hour = dtime.getHours(),
            minutes = dtime.getMinutes(),
            dte = hour + ":" + minutes + " " + day + " " + month + " " + year;
        
        return (
            <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline timeline-centered">
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>{ dte }</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">
                            <textarea ref="newTitle"></textarea>
                        </h3>
                        <p>
                            <textarea ref="newNote"></textarea>
                        </p>
                        <button onClick={this.save}> Save</button>
                    </div>
                </li>
            </ul>
        </div>
         <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline timeline-centered">
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>{ dte }</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">
                            <textarea ref="newTitle"></textarea>
                        </h3>
                        <p>
                            <textarea ref="newNote"></textarea>
                        </p>
                        <button onClick={this.save}> Save</button>
                    </div>
                </li>
            </ul>
        </div>
        )
    },
    renderDisplay(){
        var dtime = new Date(),
            day = dtime.getDate(),
            month = dtime.toLocaleString("en", { month: "long"}),
            year = dtime.getFullYear(),
            hour = dtime.getHours(),
            minutes = dtime.getMinutes(),
            dte = hour + ":" + minutes + " " + day + " " + month + " " + year;
        return (
               <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline timeline-centered">
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>{ dte }</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Medical Note</h3>
                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque.</p>
                        <button onClick={this.edit}>EDIT</button>
                        <button onClick={this.remove}>REMOVE</button>
                    </div>
                </li>
            </ul>
        </div>
              <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
            <ul className="timeline timeline-centered">
                <li className="timeline-item">
                    <div className="timeline-info">
                        <span>{ dte }</span>
                    </div>
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                        <h3 className="timeline-title">Medical Note</h3>
                        <p>Nullam vel sem. Nullam vel sem. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Donec vitae sapien ut libero venenatis faucibus. ullam dictum felis
                            eu pede mollis pretium. Pellentesque ut neque.</p>
                        <button onClick={this.edit}>EDIT</button>
                        <button onClick={this.remove}>REMOVE</button>
                    </div>
                </li>
            </ul>
        </div>
        )
    }
    ,render(){
        return (this.state.editing)? this.renderForm()
                                    : this.renderDisplay()
         
    }
})


ReactDOM.render(
    <Timeline></Timeline>
    ,document.getElementById("root")

)