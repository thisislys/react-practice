import App from '../container/taopiaopiao/index.jsx';
import Hot from '../container/taopiaopiao/hot.jsx';
import Cinema from '../container/taopiaopiao/cinema.jsx';
import Mine from '../container/taopiaopiao/mine.jsx';
import HotChild1 from '../container/taopiaopiao/hotChild1.jsx';
import HotChild2 from '../container/taopiaopiao/hotChild2.jsx';
import Detail from '../container/taopiaopiao/detail.jsx';
const routes = [{
    path: '/app',
    component: App,
    children: [{
        path: '/app/hot',
        component: Hot,
       
        children: [{
            path: '/app/hot/hotChild1',
            component: HotChild1

        }, {
            path: '/app/hot/hotChild2',
            component: HotChild2
        }]
    },
    {
        path: '/app/cinema',
        component: Cinema
    },
    {
        path: '/app/mine',
        component: Mine
    }],

    // }, {
    //     path: '/shopCar',
    //     component: ShopCar
    // }, {
    //     path: '/meituan',
    //     component: Meituan
    // }, {
    //     path: '/goodsList',
    //     component: GoodsList
    // }, {
    //     path: '/mtdetail:id',
    //     component: Mtdetail
}, {
    path: "/detail/:id",
    component: Detail
}];
export default routes;