import { Component } from 'react';
import Particles from "react-tsparticles";
import Clarifai from 'clarifai'; // API For DETECT OBJECT ON FOTO AND VIDEO
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Facerecognition from './components/Facerecognition/Facerecognition';
import './App.css';

// I don't have an account =(
// const app = new Clarifai.App({
//   apikey: 'YOUR_KEY_HERE'
// }); 


const particlesParams = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
        },
      onHover: {
        enable: true,
        mode: "repulse",
        },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
        },
      repulse: {
        distance: 200,
        duration: 0.4,
        },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    // app.models
    //   .predict(
    //     Clarifai.FACE_DETECT_MODEL,
    //     // we can't use here the imageUrl and we use input
    //     this.state.input)
    //   .then(
    //   function(response) {
    //     console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
    //   },
    //   function(err) {
    //     //error
    //   }
    // );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
        options={particlesParams}
        />
        <Navigation  />
        <Logo />
        <Rank />
        <ImageLinkForm 
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
        />
        <Facerecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}

export default App;
