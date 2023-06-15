/**
 * 参考文章:
 * https://juejin.cn/post/6952402605154762782
 * https://juejin.cn/post/6844903662519599111
 */

/**
 * 防抖和节流出现的起因和现象
 * 在前端开发中，需要给元素绑定一些事件，如resize，scroll，mouseover等。如果频繁执行这些函数的话，会造成浏览器的负担过重，影响用户体验。一般来讲，防抖和节流是比较好的解决方案。
 */

// 所谓防抖，就是指当事件持续触发事件时，debounce会等待 n 秒才会执行函数，如果在此时间内又触发了事件，则会重新计算函数执行时间。
// 防抖函数分为非立即执行版和立即执行版

/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate) {
  let timeout
  return function () {
    const context = this
    const args = [...arguments]
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(context, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait)
    }
  }
}

// 所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。 节流会稀释函数的执行频率。
// 对于节流，一般有两种方式可以实现，分别是时间戳版和定时器版。

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait, type) {
  if (type === 1) {
    let previous = 0
  } else if (type === 2) {
    let timeout
  }
  return function () {
    let context = this
    let args = arguments
    if (type === 1) {
      let now = Date.now()

      if (now - previous > wait) {
        func.apply(context, args)
        previous = now
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null
          func.apply(context, args)
        }, wait)
      }
    }
  }
}

// 应用场景
// 防抖的应用场景
// ( 1 ) 用户在输入框中连续输入一串字符，只会在输入完成后取最终输入的内容。然后发送ajax请求，这样可以有效地减少请求次数，节约请求资源。
// ( 2 ) window的resize、scroll事件，不断地调整浏览器的窗口大小、或者滚动时会触发对应事件，防抖函数让其只触发一次。
// 节流的应用场景
// ( 1 ) 鼠标连续不断地触发某事件（如点击），在单位时间内只触发一次。
// ( 2 ) 在页面的无限加载场景下，需要用户在滚动页面时，每隔一段时间发一次 ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。
// ( 3 ) 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断。
// 小结
// 防抖和节流的区别：

// 效果：

// 函数防抖是某一段时间内只执行一次；而函数节流是间隔时间执行，不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数。

// 原理：

// 防抖是维护一个计时器，规定在delay时间后触发函数，但是在delay时间内再次触发的话，都会清除当前的 timer 然后重新设置超时调用，即重新计时。这样一来，只有最后一次操作能被触发。
// 节流是通过判断是否到达一定时间来触发函数，若没到规定时间则使用计时器延后，而下一次事件则会重新设定计时器。
