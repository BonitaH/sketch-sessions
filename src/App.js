import React from 'react';
import './App.css'

class Header extends React.Component {
   render() {
      return (
        <div>
            <img src={'logo.png'} />
            <h1>Learning to draw</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>What do you want to draw?</h2>
            <p></p>
         </div>
      );
   }
}
class SelectExpressions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'both'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Choose expression: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Choose facial expression?:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="all">all</option>
            <option value="neutral">neutral</option>
            <option value="happy">happy</option>
            <option value="sad">sad</option>
            <option value="angry">angry</option>
            <option value="goofy">goofy</option>
            <option value="surprised">surprised</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
class SelectGender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'both'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You want to draw: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Do you want to draw men or women?:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="both">both</option>
            <option value="men">men</option>
            <option value="women">women</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class SelectSessions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'both'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('What kind of session: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What kind of session?:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="All the same length">All the same length</option>
            <option value="Class mode">Class mode</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


var Session = React.createClass({

  getInitialState: function () {
    return {
      selectedOption: 'option1',
      text: 'hello'
    };
  },

  handleOptionChange: function (changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  },

  handleFormSubmit: function (formSubmitEvent) {
    formSubmitEvent.preventDefault();

    console.log('You have selected:', this.state.selectedOption);
  },

  handleTextChange: function(changeEvent) {
    this.setState({
      text: changeEvent.target.value
    })
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

          <br />

          {this.state.text}

          <input type="text" value={this.state.text} onChange={this.handleTextChange} />

          <br />

            <form onSubmit={this.handleFormSubmit}>
              <div className="radio">
                <label>
                  Do you want to draw men or women: <br/>
                  <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
                  Both
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                  Men
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
                  Women
                </label>
              </div>
              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
});



class App extends React.Component {
   render() {
      return (
         <div className="centerDiv">
            <Header/>
            <Content/>
            <SelectGender/>
            <SelectExpressions/>
            <SelectSessions/>
            <Session />
         </div>
      );
   }
}

export default App;
