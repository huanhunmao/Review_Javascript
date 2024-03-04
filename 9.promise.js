// 最简单的Promise实现有7个主要属性, state(状态), value(成功返回值), reason(错误信息), resolve方法, reject方法, then方法
class Promise{
    constructor(executor) {
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
      let resolve = value => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
        }
      };
      let reject = reason => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
        }
      };
      try {
        // 立即执行函数
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
    then(onFulfilled, onRejected) {
      if (this.state === 'fulfilled') {
        let x = onFulfilled(this.value);
      };
      if (this.state === 'rejected') {
        let x = onRejected(this.reason);
      };
    }
  }