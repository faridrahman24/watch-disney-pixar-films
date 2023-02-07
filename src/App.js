import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import "./style/landingPage.css"
import Favorite from './components/Favorite';
import Others from './components/Others';


function App() {
  return (
    <div>
      {/*intro section*/}
      <div className = "myBG"> 
        <NavigationBar />
        <Intro />
      </div>
      {/*end of intro*/}
      
      {/*favorite section*/}
      <div className='favorite'>
      <Favorite />
      </div>
      {/*end of favorite section*/}

      {/*others section*/}
      <div className='others'>
      <Others />
      </div>
      {/*others section*/}
    </div>  
  );
}

export default App;