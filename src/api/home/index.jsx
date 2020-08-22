import request from '../../utils/request'

// 获取首页banner轮播图数据
export function reqGetBannerList(){
    return request({
        url: '/banner?type=1',
        method: 'GET'
    })
}

// 获取首页推荐歌曲列表数据
export function reqGetPersonalized(){
    return request({
        url: '/personalized?limit=20',
        method: 'GET'
    })
}

// 获取排行榜歌曲列表数据
export function reqTopList({idx}){
    return request({
        url: `/top/list?idx=${idx}`,
        method: 'GET'
    })
}