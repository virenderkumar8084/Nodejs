// Event Modules

// 	Nodejs has built-in module called Events. Where you can create-, fire-, and listen- for your events.

// Example1: Registring for event to be fired only one time using once.
// Example2: Create an event emitter instance and register a couple of callbacks
// Example3: Registring for events with callback parameters

const EventEmitter = require("events")    // return the class 
const event = new EventEmitter() // object of class

event.on('sayMyName', () => {   
    console.log('Your Eg1')
})
event.on('sayMyName', () => {   
    console.log('Your Eg2')
})
event.on('sayMyName', () => {   
    console.log('Your Eg3')
})

event.on('checkpage', (sc, msg) => {
    console.log(`Status code is ${sc} and the page is ${msg}`)
})

event.emit('sayMyName')   // emit the event

event.emit("checkpage", 200, "ok")

// The concept is quite simple -> emitter objects emit named events that cause previously registered listners to be called.
// So, an emitter object basically has two features: 
// 1. Emitting name events 2. Regsitering and unregistering event



