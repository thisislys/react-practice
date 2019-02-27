import Home from '../container/home';
import Child1 from '../container/child1';
import Child2 from '../container/child2';
import One from '../container/one';
import Two from '../container/two';
import Mine from '../container/mine';
export default {
    routers: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home,
        children: [{
            path: '/home/child1',
            component: Child1,
            children: [{
                path: '/home/child1/one',
                component: One
            }, {
                path: '/home/child1/two',
                component: Two
            }, {
                path: '/home/child1',
                redirect: "/home/child1/one"
            }]
        }, {
            path: '/home/child2',
            component: Child2
        }, {
            path: '/home',
            redirect: '/home/child1'
        }]
    }, {
        path: '/mine',
        component: Mine
    }]
}