import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Logo extends React.Component {
   render() {
      return (
        <div>
           <img src={'LOGOEXAMPLE.png'} />
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

var Expressions = React.createClass({

  getInitialState: function () {
    return {
      selectedOption: 'option1',
      text: 'Option1'
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
     <div className="Radio container">
      <h3 className="radioLabel">Expression:</h3>
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="radio">
                <label className="biglabel">
                  <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
                  All
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                  Neutral
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
                  Happy
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option4" checked={this.state.selectedOption === 'option4'} onChange={this.handleOptionChange}/>
                Sad
                </label>
              </div>
              <div className="radio">
                  <label>
                    <input type="radio" value="option5" checked={this.state.selectedOption === 'option5'} onChange={this.handleOptionChange}/>
                    Angry
                  </label>
                </div>
                <div className="radio">
                  <label>
                    <input type="radio" value="option6" checked={this.state.selectedOption === 'option6'} onChange={this.handleOptionChange}/>
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
});

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
      <div className="Radio container">
        <div className="row">
          <div className="col-sm-12">



      {  /*  {this.state.text}


          <input type="text" value={this.state.text} onChange={this.handleTextChange} /> */}


        <h3 className="radioLabel">Female or male:</h3>
            <form onSubmit={this.handleFormSubmit}>
              <div className="radio">
                <label className="biglabel">
                  <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
                  Both
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                  Female
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
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
});



var NavButton = React.createClass({
  render: function() {
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
})

var Picture = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

         <br />
      <img src="./pic1.jpg" className="img-responsive" alt="Responsive image" />
      </div>
      </div>
      </div>
    )
  }
})

var ButtonClicked = React.createClass({
    getInitialState: function() {
        return { clickButton: false };
    },
    onClick: function() {
        this.setState({ clickButton: true });
    },

    onClose: function() {
      this.setState({ clickButton: false });
    },

    render: function() {
        return (
            <div>
            <button type="button" className="btn btn-default btn-lg button1" onClick={this.onClick}>START</button>
                { this.state.clickButton ? <ImageOverlay close={this.onClose}/> : null }
            </div>
        );
    }
});

var ImageFrame = React.createClass({
    render: function() {
        return (
            <div id="image-frame" className="show-images">
                  <img src="./pic1.jpg" className="img-responsive" alt="Responsive image" />
            </div>
        );
    }
});

var ImageOverlay = React.createClass({
  getInitialState: function () {
  return {
    counter: 0,
    imageSources: ["./pic1.jpg","./pic2.jpeg","./pic3.jpg","./pic4.jpg"],
    imageIndex: 0
  };
},

timerTick: function() {
  this.setState({
    counter: this.state.counter + 1
  });
},

componentDidMount: function() {
  setInterval(this.timerTick, 1000);
},
previous: function() {
  this.setState({imageIndex: this.state.imageIndex -1});
},

next: function() {
  this.setState({imageIndex: this.state.imageIndex +1});
},

  render: function() {
    console.log(this.state.counter)
      return (
        <div id="overlay" className="overlay" style={{"position" : "fixed", "width" : "100%", "height" : "100%", "top" : "0px", "left" : "0px","right" : "0px","bottom" : "0px", "backgroundColor" : "rgba(0,0,0,0.4)"}}>

          <img src={this.state.imageSources[this.state.imageIndex]} className="img-responsive" style={{"height" : "92%"}}/>
            <div className="btn-group">
               <button type="button" className="btn btn-default btn-lg button3" onClick={this.previous}>Previous</button>
               <button type="button" className="btn btn-default btn-lg button3" onClick={this.props.close}>STOP</button>
               <button type="button" className="btn btn-default btn-lg button3" onClick={this.next}>Next</button>
            </div>
        </div>
      );
    }
  });


  {/*  if (imageIndex <0) ({imageIndex: this.getInitialState}),
  else {
    console.log(imageIndex); */}
  

var SaveButton = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
  <button type="button" className="btn btn-default btn-lg button1">SAVE</button>
  </div>
  </div>
  </div>
  );
}
})

var App = React.createClass({

   render: function() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
            <NavButton />
            <Header/>
            <Content/>
            <Expressions />
            <Session />
            <ButtonClicked />

         </div>
         </div>
         </div>
      );
}
})
export default App;
