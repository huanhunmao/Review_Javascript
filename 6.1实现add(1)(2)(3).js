// 专家版

function add(){
    // 有几个参数
    const args = Array.from(arguments)
    let allArgs
    console.log('args', args);
    // args [ 1 ]
    // args [ 1, 2 ]
    // args [ 1, 2, 3 ]
    // 将args数组和x作为参数传递给add函数
    // ...，我们可以将args数组中的元素展开并作为单独的参数传递给add函数
    const adder = (...newArgs) => {
         allArgs = [...args, ...newArgs];
        return adder.valueOf ? adder.valueOf() : adder;
      };
    // 当尝试将对象转换为原始值时，会自动调用该 valueOf 方法 使其返回args数组中所有元素的和
    adder.valueOf = () => allArgs.reduce((a,b) => a + b)
    return adder
}

console.log(+add(1)(2, 3)); // 输出 6 一元加号操作符（+）对adder函数进行求值时，就会触发valueOf方法，从而计算出所有参数的和