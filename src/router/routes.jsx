import Home from '../pages/Home'


// 常量路由


// 默认路由
export const defaultRoutes = [
    // 首页
    {
        path: "/",
        component: Home
    },
    {
        path: "/",
        redirect: "/"
    }
]