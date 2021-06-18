import store from '../store/index'


const proMap: Array<any> = new Array<any>();

proMap.push(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('test1');
    }, 5000);
}));

proMap.push(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('test2');
    }, 4000);
}));

proMap.push(new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('test3');
    }, 6000);
}));


export async function getData() {
    const reqMap = store.state.reqMap;
    console.time('test1')
    const res = await reqMap[0];
    console.timeEnd('test1');
    console.log(res);
    proMap.forEach(async (pro, index) => {
        const res = await pro;
        console.log(res);
    })
}