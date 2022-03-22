import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { idText } from 'typescript';

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
    axios.get("http://localhost:3001/reminders")
      .then(function (response) {
        app.setState({
          reminders: response.data
        })
        console.log(response);
      })
  }

  onChangeName = (e) => {
    console.log(e.target.value)
    this.setState({ newName: e.target.value });
  }

  onChangeDate = (e) => {
    console.log(e.target.value)
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
      alert("Invalid Date! Cannot add in this format use this instead,                         yyyy-mm-ddTHH:MM")
      return;
    }
    const newReminder = {
      name: this.state.newName,
      timestamp: this.state.newDate
    }
    reminders.push(newReminder)
    this.setState({ reminders: reminders });
  }

  removeItem = (itemId) => {
    if (!window.confirm("Do you really want to remove this item?"))
      return
    axios.delete("http://localhost:3001/reminders/" + itemId)
      .then(() => {
        let reminders = this.state.reminders.filter(r => r.id != itemId)
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
          <div key={reminder.name}>
            <ReminderItem name={reminder.name} timestamp={reminder.timestamp} itemId={reminder.id} onRemoveItem={this.removeItem} />
          </div>
        ))}
        {/* debug: {this.state.newName} */}
        <Link to='./'>Back</Link>
      </div>
    )
  }
}

export default App