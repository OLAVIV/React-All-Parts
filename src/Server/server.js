const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '.mongozilla.', 'public');
const port = process.env.PORT || 3001;
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});

import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class ReminderForm extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <form>
      <div>
        Name: <input onChange={this.props.onChangeName} />
      </div>
      <div>
        At time: <input onChange={this.props.onChangeDate} />
      </div>
      <div>
        <button onClick={this.props.onAddReminder}>Add</button>
      </div>
    </form>
  }
}

class ReminderItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <div>
      {new Date(this.props.timestamp).toDateString() + " "}
      {this.props.name}
      <button onClick={(e) => this.props.onRemoveItem(this.props.itemId)}>
        Remove
      </button>
    </div>
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reminders: [],
      newName: '',
      newDate: ''
    }
  }

  componentDidMount() {
    let app = this
    axios.get("https://reminderserver.herokuapp.com/api/reminders")
      .then(function (response) {
        app.setState({
          reminders: response.data.reminders
        })
        console.log(response);
      })
  }

  onChangeName = (e) => {
    this.setState({ newName: e.target.value });
  }

  onChangeDate = (e) => {
    this.setState({ newDate: e.target.value });
  }

  addReminder = (e) => {
    e.preventDefault();
    let reminders = this.state.reminders
    if (reminders.some(r => this.state.newName == r.name)) {
      alert("Reminder already exists! Cannot add the same name twice.")
      return;
    }
    let date = new Date(this.state.newDate)
    if (date == "Invalid Date") {
      alert("Invalid Date! Cannot add in this format use this instead,                         yyyy-mm-ddthh:mm")
      return;
    }
    const newReminder = {
      name: this.state.newName,
      timestamp: date.toISOString()
    }
    let app = this
    axios.post("https://reminderserver.herokuapp.com/api/reminders", newReminder)
      .then(function (response) {
        reminders.push(response.data)
        app.setState({ reminders: reminders });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  removeItem = (itemId) => {
    if (!window.confirm("Do you really want to remove this item?"))
      return
    axios.delete("https://reminderserver.herokuapp.com/api/reminders/" + itemId)
      .then(() => {
        let reminders = this.state.reminders.filter(r => r._id != itemId)
        this.setState({ reminders: reminders });
      })
  }

  render() {
    return (
      <div>
        <h2>Reminders</h2>
        <ReminderForm onChangeName={this.onChangeName} onChangeDate={this.onChangeDate} onAddReminder={this.addReminder} />
        <h2>Reminders</h2>
        {this.state.reminders.map((reminder) => (
          <div key={reminder._id}>
            <ReminderItem name={reminder.name} timestamp={reminder.timestamp} itemId={reminder._id} onRemoveItem={this.removeItem} />
          </div>
        ))}
        {/* debug: {this.state.newName} */}
        <Link to='./'>Back</Link>
      </div>
    )
  }
}

export default App