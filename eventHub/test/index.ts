import EventHub from '../src/index';

const eventHub = new EventHub()

let code = 'ooo';
eventHub.on('xxx', data => {
  console.log(code, 'code ')
  console.assert(data !== 'is ok')
})

eventHub.emit('xxx', 'is ok')

const eventHub2 = new EventHub()
let callCode = false
const fn1 = () => {
  callCode = true;
}
eventHub2.on('yyy', fn1)

eventHub2.off('yyy', fn1)
eventHub2.emit('yyy')
setTimeout(() => {
  console.log(callCode);
}, 1000);