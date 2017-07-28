import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Logo extends React.Component {
   render() {
      return (
        <div>
           <img className = "App-logo" src={'LOGOEXAMPLE.png'} />
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            <h1 className="Header"> Learn to draw </h1>
         </div>
         </div>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
        <div className="Content container">
          <div className="row">
            <div className="col-sm-12">
            <h2 className="Content">What do you want to draw?</h2>
         </div>
         </div>
         </div>
      );
   }
}
class Expressions extends React.Component{
constructor(props){
  super(props);
  this.state = {
    selectedExpression: 'option1',
    text: 'Option1'
  }
}
handleOptionChange(changeEvent) {
  this.setState({
    selectedExpression: changeEvent.target.value
  });
}

handleFormSubmit(formSubmitEvent) {
  formSubmitEvent.preventDefault();

  console.log('You have selected:', this.state.selectedExpression);
}

  render() {
    return (
     <div className="Radio container">
      <h3 className="radioLabel">Expression:</h3>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit.bind(this)}>
              <div className="radio">
                <label className="biglabel">
                  <input type="radio" value="option1" checked={this.state.selectedExpression === 'option1'} onChange={this.handleOptionChange.bind(this)} />
                  All
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" checked={this.state.selectedExpression === 'option2'} onChange={this.handleOptionChange.bind(this)}/>
                  Neutral
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" checked={this.state.selectedExpression === 'option3'} onChange={this.handleOptionChange.bind(this)}/>
                  Happy
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option4" checked={this.state.selectedExpression === 'option4'} onChange={this.handleOptionChange.bind(this)}/>
                Sad
                </label>
              </div>
              <div className="radio">
                  <label>
                    <input type="radio" value="option5" checked={this.state.selectedExpression === 'option5'} onChange={this.handleOptionChange.bind(this)}/>
                    Angry
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="option6" checked={this.state.selectedExpression === 'option6'} onChange={this.handleOptionChange.bind(this)}/>
                    Surprised
                  </label>
                </div>
                <button className="btn btn-default" type="submit">Save</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

class Gender extends React.Component {
  constructor(props) {
    super(props) ;

    this.state = {
      selectedGender: 'option1'
    };
  }
  handleOptionChange(changeEvent) {
    this.setState({
      selectedGender: changeEvent.target.value
    });
  }
  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();

    console.log('You have selected:', this.state.selectedGender);
  }
  render() {
    return (
      <div className="Radio container">
        <div className="row">
          <div className="col-sm-12">
        <h3 className="radioLabel">Female or male:</h3>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
              <div className="radio">
                <label className="biglabel">
                  <input type="radio" value="option1" checked={this.state.selectedGender === 'option1'} onChange={this.handleOptionChange.bind(this)} />
                  Both
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" checked={this.state.selectedGender === 'option2'} onChange={this.handleOptionChange.bind(this)}/>
                  Female
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" checked={this.state.selectedGender === 'option3'} onChange={this.handleOptionChange.bind(this)}/>
                  Male
                </label>
              </div>
              <button className="btn btn-default" type="submit">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

class NavButton extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <img src={'logoplaceholder.png'} />
            <button type="button" className="btn btn-default btn-lg button1">HOME</button>
            <button type="button" className="btn btn-default btn-lg button2">ABOUT</button>
          </div>
        </div>
      </div>
    );
  }
}

class ButtonClicked extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      clickButton : false
    }
  }

  onClick() {
      this.setState({ clickButton: true });
  }

  onClose() {
      this.setState({ clickButton: false });
  }

  render() {
      return (
          <div>
            <button type="button" className="btn btn-default btn-lg button1" onClick={this.onClick.bind(this)}>START</button>
            { this.state.clickButton ? <ImageOverlay close={this.onClose.bind(this)} gender="female" expression="sad"/> : null }
          </div>
      );
  }
}

class ImageOverlay extends React.Component {
  constructor(props){
    super(props);

    this.count = 0;
    this.counter = null;
    this.switchEvery = 30;

    this.state = {
      imageSourcesAll: [
        {
          number: 0,
          gender: "female",
          expression: "neutral",
          location: "./pic1.jpg"
        },
        {
          number: 1,
          gender: "female",
          expression: "x",
          location: "./pic2.jpeg"
        },
        {
          number: 2,
          gender: "female",
          expression: "neutral",
          location: "./pic3.jpg"
        },
        {
          number: 3,
          gender: "female",
          expression: "neutral",
          location: "./pic4.jpg"
        },
        {
          number: 4,
          gender: "female",
          expression: "neutral",
          location: "./pic5.jpg"
        },
        {
          number: 5,
          gender: "male",
          expression: "neutral",
          location: "./picm1.jpg"
        },
        {
          number: 6,
          gender: "male",
          expression: "happy",
          location: "./picm2.jpg"
        },
        {
          number: 7,
          gender: "male",
          expression: "sad",
          location: "./picm3.jpg"
        },
        {
          number: 8,
          gender: "male",
          expression: "angry",
          location: "./picm4.jpg"
        },
        {
          number: 9,
          gender: "male",
          expression: "surprised",
          location: "./picm5.jpg"
        },
        {
          number: 10,
          gender: "female",
          expression: "neutral",
          location: "./pic6.jpeg"
        },
        {
          number: 2,
          gender: "female",
          expression: "neutral",
          location: "./pic7.jpg"
        },
        {
          number: 3,
          gender: "female",
          expression: "happy",
          location: "./pic8.jpg"
        },
        {
          number: 4,
          gender: "female",
          expression: "sad",
          location: "./pic9.jpg"
        },
        {
          number: 5,
          gender: "female",
          expression: "angry",
          location: "./pic10.jpg"
        },
        {
          number: 6,
          gender: "male",
          expression: "happy",
          location: "./picm6.jpg"
        },
        {
          number: 7,
          gender: "male",
          expression: "sad",
          location: "./picm7.jpg"
        },
        {
          number: 8,
          gender: "male",
          expression: "angry",
          location: "./picm8.jpg"
        },
        {
          number: 1,
          gender: "male",
          expression: "happy",
          location: "./picm9.jpeg"
        },
        {
          number: 2,
          gender: "male",
          expression: "sad",
          location: "./picm10.jpg"
        },
        {
          number: 3,
          gender: "male",
          expression: "angry",
          location: "./picm11.jpg"
        }],
      imageIndex: 0
    };
  }

  selection() {
    var results = this.state.imageSourcesAll.filter(function(image){
      return selectedExpression === image.expression && selectedGender === image.gender
    });
    results = results.map(function(image) {
      return image.location;
    });
    return results;
  }

  componentWillMount() {
    // console.log(this.props);
    this.setState({
      selection: this.selection()
    });
  }

  componentDidMount() {
    this.counter = setInterval(this.timerTick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counter);
  }

  changeSwitch(event) {
    this.switchEvery = parseInt(event.target.value);
  }

  timerTick() {
    this.count = this.count +1;
    if(this.count % this.switchEvery === 0){
      this.next();
    }
    console.log(this.count);
  }


  previous() {
    this.count = 0;
    this.setState({
      imageIndex: (this.state.imageIndex -1 < 0) ? this.state.selection.length -1 : this.state.imageIndex -1
    });
  }

  next() {
    this.count = 0;
    this.setState({
      imageIndex: (this.state.imageIndex +1 > this.state.selection.length -1) ? 0 : this.state.imageIndex +1
    });
  }



    render() {
        return (

          <div id="overlay" className="overlay" style={{"position" : "fixed", "width" : "100%", "height" : "100%", "top" : "0px", "left" : "0px","right" : "0px","bottom" : "0px", "backgroundColor" : "rgba(0,0,0,0.9)"}}>
            <img src={this.state.selection[this.state.imageIndex]} className="img-responsive" style={{"height" : "92%", "width" : "387px", "position" : "relative", "align" : "center"}}/>
              {/*<input id="switchEvery" type="text" defaultValue={this.switchEvery} onBlur={this.changeSwitch.bind(this)}/>*/}
              <div className="btn-group">
                 <button type="button" className="btn btn-default btn-lg button3" onClick={this.previous.bind(this)}>Previous</button>
                 <button type="button" className="btn btn-default btn-lg button3" onClick={this.props.close}>STOP</button>
                 <button type="button" className="btn btn-default btn-lg button3" onClick={this.next.bind(this)}>Next</button>
              </div>
          </div>
        );
      }
}


class App extends React.Component{

   render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <NavButton />
              <Header/>
              <Content/>
              <Expressions />
              <Gender />
              <ButtonClicked />
            </div>
          </div>
         </div>
       );
    }
}
export default App;
