class EventEmitter {
  subscribes: Map<string, Function[]>

  constructor() {
    this.subscribes = new Map<string, Function[]>()
  }

  /**
   *
   * 事件订阅
   *
   * @param type
   * @param callback
   */
  on(type: string, callback: Function) {
    const sub = this.subscribes.get(type) || []

    sub.push(callback)

    this.subscribes.set(type, sub)
  }

  /**
   * 事件发布、派发
   *
   * @param type
   * @param args
   */
  emit(type: string, ...args: any[]) {
    const sub = this.subscribes.get(type)

    sub?.forEach(fn => fn.call(this, ...args))
  }

  /**
   *
   * 事件取消
   *
   * @param type
   * @param callback
   */
  off(type: string, callback: Function) {
    const sub = this.subscribes.get(type)

    if (sub) {
      const newSub = sub.filter(fn => fn !== callback)

      this.subscribes.set(type, newSub)
    }
  }
}

const emiter = new EventEmitter()

// 订阅事件
emiter.on('on-message', () => {
  console.log('事件订阅')
})

// 事件发布
emiter.emit('om-message')
