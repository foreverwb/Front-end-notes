type Cache = {
  [key: string]: Array<(data: unknown) => void>
}

class EventHub {
  private cache:Cache = {} // 事件名，事件回调

  on(eventName: string, fn: (data: unknown) => void){
    this.cache[eventName] = this.cache[eventName] || []
    this.cache[eventName].push(fn)
  }
  emit<T>(eventName: string, data?: T) {
    (this.cache[eventName] || []).forEach(fn => fn(data))
  }
  off(eventName: string, fn: (data: unknown) => void) {
    const idx = this.cache[eventName].findIndex(entry => entry === fn);
    idx !== -1 && this.cache[eventName].splice(idx, 1)
  }
}

export default EventHub;
