import Home from "../container/home";
import Type from "../container/type";
import Input from "../container/home/input";
import Detail from "../container/home/detail";
import Mine from "../container/mine"
export default {
    routers:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/type',
            component:Type
        },
        {
            path:'/input',
            component:Input
        },{
            path:'/detail/:id',
            component:Detail
        },{
            path:'/mine',
            component:Mine
        }
    ]
}