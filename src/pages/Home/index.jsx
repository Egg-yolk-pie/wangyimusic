import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import NavTopBar from '../../components/NavTopBar'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import {reqGetBannerList,reqGetPersonalized,reqTopList} from '../../api/home'

import './css/index.css'
export default class Home extends Component {
  state = {
    bannerList: [],
    bersonalizedList: [],
    topList: []
  }     
     async componentDidMount() {
       const res = await reqGetBannerList()
       this.setState({
          bannerList: res.banners
       })
       const result = await reqGetPersonalized()
       this.setState({
         bersonalizedList: result.result
       })
       let topList = []
       let idxarr = [0,1,2,3,4]
       let len = idxarr.length
       while(len--){
        const {playlist} = await reqTopList({idx:idxarr[len]})
         topList.push({
           id: playlist.id,
           // 排行榜名字
           name: playlist.name,
           // 存放的是排行榜的音乐信息
           list: playlist.tracks.slice(0,3)
         })
         this.setState({
           topList
         })
      }
      //  console.log(this.state.topList)
        new Swiper('.bannner-swiper', {
          loop: true,//无缝轮播
          pagination: {//小圆点分页
              el: '.swiper-pagination',
          },
          autoplay: {
            delay: 2000,//1秒切换一次
          },
        }) 

        new Swiper('.swiper-container', {
          slidesPerView: 3,
          spaceBetween: 30,
          // loop: true,//无缝轮播
          pagination: {//小圆点分页
              el: '.swiper-pagination',
          }
        })   

        new Swiper('.topList-swiper', {
          // loop: true,//无缝轮播
          pagination: {//小圆点分页
              el: '.swiper-pagination',
          }
        }) 
      }
    render() {
        return (
         <>
             <div className="homeWrap">
                {/* 轮播图 */}
                <div className="bannner-swiper banner">
                    <div className="swiper-wrapper">
                          {this.state.bannerList.map(item => 
                              (<div style={{width: '100%',height: '150px'}}  key={item.bannerId} className="swiper-slide">                           
                                  <img style={{width:'100%',height: '100%'}} src={item.pic} alt=""/>
                              </div>)
                          )}
                    </div>
                </div>
                {/* 导航区域 */}
                <div className="navContainer">
                      <Link  to="/recommendSong" className="navItem">
                        <span className="iconfont icon-meirituijian-"></span>
                        <span>每日推荐</span>
                      </Link>
                      <div className="navItem">
                        <span className="iconfont icon-gedan1"></span>
                        <span>歌单</span>
                      </div>
                      <div className="navItem">
                        <span className="iconfont icon-icon-ranking"></span>
                        <span>排行榜</span>
                      </div>
                      <div className="navItem">
                        <span className="iconfont icon-diantai"></span>
                        <span>电台</span>
                      </div>
                      <div className="navItem">
                        <span className="iconfont icon-zhiboguankanliangbofangsheyingshexiangjixianxing"></span>
                        <span>直播</span>
                      </div>
                    </div>
                {/* 推荐歌曲 */}
                <div className="recommendContainer">
                    <div className="header">
                    <span className="title">推荐-歌曲</span>
                    <div className="navContent">
                      <span className="nav">为你精心推荐</span>
                      <span className="more">查看更多</span>
                    </div>
                  </div>
                    {/* 轮播图 */}
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                          {this.state.bersonalizedList.map(item => (
                              <div className="swiper-slide" key={item.id}>
                                  <img src={item.picUrl} alt=""/>
                          <span>{item.name}</span>
                          </div>
                          ))}
                            
                        </div>                
                    </div>
                </div>
                {/* 排行榜 */}
                <div className="topList">
              {/* 头部 */}
              <div className="header">
                  <span className="title">排行榜</span>
                  <div className="navContent">
                    <span className="nav">热歌风向标</span>
                    <span className="more">查看更多</span>
                  </div>
              </div>
              {/* 内容区 */}          
                <div className="topList-swiper">
                  <div className="swiper-wrapper">
                      {this.state.topList.map(item => (
                            <div className="swiper-slide" key={item.id}>
                              <div className="swiperContent">
                                <span className="title">{item.name}</span>
                                {item.list.map((item,index) => (
                                    <div className="musicContent" key={item.al.id}>
                                      <img className="musicImg" src={item.al.picUrl}></img>
                                      <span className="count">{index++}</span>
                                      <span className="musicName">{item.al.name}</span>
                                    </div> 
                                ))}              
                              </div>
                          </div>
                      ))}
                  </div>              
              </div>
            </div>       
             </div>
             <NavTopBar />
         </>
      )
    }
}
