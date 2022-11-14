const EventEmitter = require('events');

const customerEmmitter = new EventEmitter();

// Listener created with 'on' - order matters. Always listen before emit. Obvious but could be missed. VSCode lint doesnt catch this.
customerEmmitter.on('response', (data, otherstuff) => {
    console.log(`data received: ${data} ${otherstuff}`)
})

customerEmmitter.on('response', (data) => {
    console.log(`something else also listened: ${data}`)
})

// Dispatch performed with 'emit'
customerEmmitter.emit('response', 'something', 'otherstuff');