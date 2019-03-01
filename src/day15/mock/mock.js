import Mock from 'mockjs';
let data=[{
    name: "徐福记沙琪玛",
    num: 0,
    isCheck: false,
    money: "15"
},
{
    name: "徐福记酥心糖",
    num: 0,
    isCheck: false,
    money: "24"
}, {
    name: "徐福记牛轧糖",
    num: 0,
    isCheck: false,
    money: "51"
}, {
    name: "徐福记爆汁糖",
    num: 0,
    isCheck: false,
    money: "21"
}]

Mock.mock('/shopCar',()=>{
    return {
        code:1,
        data
    }
})