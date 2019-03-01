import Content from '../container/content';
import Order from '../container/order';
export default {
    routers: [{
            path: '/',
            redirect: '/buyCar/content',
        },
        {
            path: '/buyCar/content',
            component: Content
        }, {
            path: '/buyCar/order',
            component: Order
        }
    ]
}