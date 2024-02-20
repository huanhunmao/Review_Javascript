// 写一个 mySetInterVal(fn, a, b),每次间隔 a,a+b,a+2b,…,a+nb 的时间，然后写一个 myClear，停止上面的 mySetInterVal

// 初级版本 
function mySetInterVal(fn, a, b) { // 自定义的定时执行函数，允许设定初始延迟和间隔时间，并提供了清除定时器的功能
    let timeCount = 0;
    let timer
    const loop = () => {
      timer = setTimeout(() => {
        fn()
        timeCount++
        loop()
      }, a + timeCount * b)
    }
    loop()
    return () => {
      clearTimeout(timer)
    }
  }
  //测试
  const myClear = mySetInterVal(()=>{console.log('test')},1000,500);
  // 清除定时器
  myClear()


// 问题 / 优化
// 内存泄漏问题： 当调用myClear来清除定时器时，仅仅清除了当前的setTimeout，但并没有清除之前已经触发但尚未执行的setTimeout。这可能导致内存泄漏。
// 可以考虑在清除定时器时，记录当前的setTimeout的timer ID，并在下一次触发时清除之前的setTimeout
// 可读性和命名： 变量名的选择可以更具有描述性，增加代码的可读性。例如，可以将a和b改为initialDelay和interval。

// 在JavaScript中，setInterval 和 setTimeout 创建的定时器，即使调用了清除函数（clearInterval 或 clearTimeout），
// 仍然可能存在未执行的回调（即已经触发但尚未执行的回调）。这可能导致内存泄漏

function mySetInterval2(fn, initialDelay, interval) {
    let timeCount = 0
    let timerId

    const executeFunction = () => {
        fn()
        timeCount ++
    }

    const setTimer = () => {
        timerId = setTimeout(() => {
            executeFunction()
            setTimer()
        }, initialDelay + timeCount * interval)
    }

    setTimer();

    const clearTimer = () => {
        clearTimeout(timerId)
    }

    return clearTimer
}

// 测试
const myClear2 = mySetInterval2(() => { console.log('test') }, 1000, 500);

// 清除定时器
myClear2();