// _.get函数用于按路径获取对象的属性值
function simpleGet(obj, path, defaultValue){
    const keys = path.split('.')
    console.log('keys',keys); 
    // keys [ 'user', 'name' ]
    // keys [ 'user', 'address', 'city' ]
    // keys [ 'user', 'age' ]
    let result = obj 

    for(let key of keys){
        result = result[key]
        if(result === undefined){
            return defaultValue
        }
    }

    return result !== undefined ? result : defaultValue
}

// 用法示例
const data = {
    user: {
        name: 'John',
        address: {
            city: 'New York'
        }
    }
};

const userName = simpleGet(data, 'user.name', 'Unknown');
console.log(userName); // 输出: John

const userCity = simpleGet(data, 'user.address.city', 'Unknown');
console.log(userCity); // 输出: New York

const invalidPath = simpleGet(data, 'user.age', 'Not Found');
console.log(invalidPath); // 输出: Not Found