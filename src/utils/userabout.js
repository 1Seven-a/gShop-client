//这个函数是让用户获取到唯一的表示
import { v4 as uuidv4 } from 'uuid';

 function getUserTempId(){
    let userTempId = localStorage.getItem('USERTEMPID_KEY')

    if (!userTempId){
        userTempId =  uuidv4();
        localStorage.setItem('USERTEMPID_KEY',userTempId)
    }
    return userTempId
}
export {
     getUserTempId
 }
