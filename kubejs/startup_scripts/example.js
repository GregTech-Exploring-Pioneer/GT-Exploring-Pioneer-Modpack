// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

EnderIOEvents.conduits(event => {
    event.registerEnergyConduit("test_conduit", "Test Conduit", 500000)
})

