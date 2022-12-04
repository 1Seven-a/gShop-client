/* 利用mockjd 提供 mock 接口*/
import Mock from 'mockjs'
import floors from './floors.json'
require ('./searchList')
Mock.mock('/mock/floors',{code:200,data:floors})
console.log('MockServe');
