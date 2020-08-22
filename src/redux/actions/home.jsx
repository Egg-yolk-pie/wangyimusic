import {reqGetBannerList} from '../../api/home'

import {GET_BANNERLIST} from '../constants/home'

// 首页banner轮播图
export const getBannerListSync = data => ({
    type: GET_BANNERLIST,
    data
})

export const getBannerList = () => {
    return dispatch => {
        return reqGetBannerList().then(res => {
            dispatch(getBannerListSync(res))
            return res
        })
    }
}
