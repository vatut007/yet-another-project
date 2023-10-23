import {Component} from 'react'
import styles from './app.module.css'
import DogImage from './dog-image/dog-image'
import dogImagePath from './images/dog-image.jpeg'
import Header from './header/header'

class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
                <Header/>
        <DogImage image = {dogImagePath} />
      </div>
    )
  }
}

export default App;
