import React from 'react';
import Home from './pages/Home'
import Personal from './pages/Personal'
import Video from './pages/video'
import RecommendSong from './pages/recommendSong'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './static/iconfont/iconfont.css'
function App() {
  return (
          <Router>
              {/* <Route path="/" component={Home} exact></Route>
              <Route path="/home" component={Home}></Route>
              <Route path="/personal" component={Personal} ></Route>
              <Route path="/video" component={Video}></Route>
              <Route path='/recommendSong' component={RecommendSong}></Route> */}
              <RecommendSong></RecommendSong>
          </Router>

         )
}
export default App;
