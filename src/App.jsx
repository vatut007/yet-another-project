import {Component} from 'react'
import DogImage from './dog-image/dog-image'
import Header from './header/header'

class App extends Component {
  render() {
    return (
      <div className='App'>
                <Header/>
        <DogImage/>
      </div>
    )
  }
}

export default App;
