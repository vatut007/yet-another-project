import {Component} from 'react'
import dogImage from "../dog-image/dog-image.module.css";

class DogImage extends Component {
  render() {
    return (
      <div className={dogImage.card}>
        <img
          className={dogImage.image}
          src={this.props.image}
          alt="Грустная собачка"
        />
        <h2 className={dogImage.title}>{this.props.name}</h2>
        <span className={dogImage.description}>{this.props.description}</span>
      </div>
    );
  }
}
  
export default DogImage