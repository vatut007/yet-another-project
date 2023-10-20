import {Component} from 'react'
import dogImagePath from '../images/dog-image.jpeg'

class DogImage extends Component {
    render() {
      return (
        <img src={dogImagePath} alt='Грустная собачка Василий' />
      );
    }
  }
  
export default DogImage