import React from 'react';
import './App.css';


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
  window.selectedExpression = 'all'
  this.state = {
    selectedExpression: 'all',
    text: 'all'
  }
}
handleOptionChange(changeEvent) {
 window.selectedExpression = changeEvent.target.value
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
                  <input type="radio" value="all" checked={this.state.selectedExpression === 'all'} onChange={this.handleOptionChange.bind(this)} />
                  All
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="neutral" checked={this.state.selectedExpression === 'neutral'} onChange={this.handleOptionChange.bind(this)}/>
                  Neutral
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="happy" checked={this.state.selectedExpression === 'happy'} onChange={this.handleOptionChange.bind(this)}/>
                  Happy
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="sad" checked={this.state.selectedExpression === 'sad'} onChange={this.handleOptionChange.bind(this)}/>
                Sad
                </label>
              </div>
              <div className="radio">
                  <label>
                    <input type="radio" value="angry" checked={this.state.selectedExpression === 'angry'} onChange={this.handleOptionChange.bind(this)}/>
                    Angry
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="surprised" checked={this.state.selectedExpression === 'surprised'} onChange={this.handleOptionChange.bind(this)}/>
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
      window.selectedGender = 'all'
      this.state = {
      selectedGender: 'all'
    };
  }
  handleOptionChange(changeEvent) {
    window.selectedGender = changeEvent.target.value
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
                  <input type="radio" value="all" checked={this.state.selectedGender === 'all'} onChange={this.handleOptionChange.bind(this)} />
                  Both
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="female" checked={this.state.selectedGender === 'female'} onChange={this.handleOptionChange.bind(this)}/>
                  Female
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="male" checked={this.state.selectedGender === 'male'} onChange={this.handleOptionChange.bind(this)}/>
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
            <img src={'logoplaceholder.png'} alt="logo" />
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
      console.log("THANK YOU!")
      console.log("YOU CAN FIND THE CODE OF THIS APP ON MY GITHUB")
      console.log("https://github.com/BonitaH/sketch-sessions")
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
    this.switchEvery = 10;

    this.state = {
      imageSourcesAll: [
        {
          gender: "female",
          expression: "neutral",
          location: "./pic1.jpg"
        },
        {
          gender: "female",
          expression: "x",
          location: "./pic2.jpeg"
        },
        {
          gender: "female",
          expression: "neutral",
          location: "./pic3.jpg"
        },
        {
          gender: "female",
          expression: "neutral",
          location: "./pic4.jpg"
        },
        {
          gender: "female",
          expression: "neutral",
          location: "./pic5.jpg"
        },
        {
          gender: "male",
          expression: "neutral",
          location: "./picm1.jpg"
        },
        {
          gender: "male",
          expression: "happy",
          location: "./picm2.jpg"
        },
        {
          gender: "male",
          expression: "sad",
          location: "./picm3.jpg"
        },
        {
          gender: "male",
          expression: "angry",
          location: "./picm4.jpg"
        },
        {
          gender: "male",
          expression: "surprised",
          location: "./picm5.jpg"
        },
        {
          gender: "female",
          expression: "neutral",
          location: "./pic6.jpg"
        },
        {
          gender: "female",
          expression: "neutral",
          location: "./pic7.jpg"
        },
        {
          gender: "female",
          expression: "happy",
          location: "./pic8.jpg"
        },
        {
          gender: "female",
          expression: "sad",
          location: "./pic9.jpg"
        },
        {
          gender: "female",
          expression: "angry",
          location: "./pic10.jpg"
        },
        {
          gender: "male",
          expression: "happy",
          location: "./picm6.jpg"
        },
        {
          gender: "male",
          expression: "sad",
          location: "./picm7.jpg"
        },
        {
          gender: "male",
          expression: "angry",
          location: "./picm8.jpg"
        },
        {
          gender: "male",
          expression: "happy",
          location: "./picm9.jpeg"
        },
        {
          gender: "male",
          expression: "angry",
          location: "./picm11.jpg"
        }],
      imageIndex: 0
    };
  }

  selection() {
    var results = this.state.imageSourcesAll.filter(function(image){
      return window.selectedExpression === image.expression && window.selectedGender === image.gender
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
            <img src={this.state.selection[this.state.imageIndex]} className="img-responsive" style={{"height" : "92%", "width" : "387px", "position" : "relative", "align" : "center"}} alt="overlay"/>
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
