import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import './iconfont/iconfont.css'
import './css/index.css'
export default class NavTopBar extends Component {
  
    render() {
        return (   
            <div>
                <div className="topBarWraper">
                    <ul className="topBarList">
                        <Link to="/"  className="item">
                            <div className="iconfont icon-home img active" ></div>
                            <span>主页</span>
                        </Link>
                        <Link to="/video" className="item">
                            <div className="iconfont icon-duihao img"></div>
                            <span>视频</span>
                        </Link>
                        <Link to="/personal" className="item">
                            <div className="iconfont icon-gerenzhongxin img"></div>
                            <span>个人中心</span>
                        </Link>                      
                    </ul>
                </div>
            </div>
      
        )
    }
}
