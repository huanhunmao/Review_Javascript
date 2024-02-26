function advancedGet(obj, path, defaultValue) {
    return path
        .split('.')
        // 根据当前路径部分key来获取对象的属性值
        // 当前属性值存在且不为undefined，则将其作为下一次迭代的累积值（acc）；否则返回默认值defaultValue
        .reduce((acc, key) => (acc && acc[key] !== 'undefined' ? acc[key] : defaultValue), obj);
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

// 用法示例与上面类似
const userNameAdv = advancedGet(data, 'user.name', 'Unknown');
console.log(userNameAdv); // 输出: John

const userCityAdv = advancedGet(data, 'user.address.city', 'Unknown');
console.log(userCityAdv); // 输出: New York

const invalidPathAdv = advancedGet(data, 'user.age', 'Not Found');
console.log(invalidPathAdv); // 输出: Not Found
