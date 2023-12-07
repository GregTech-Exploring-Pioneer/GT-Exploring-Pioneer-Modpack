// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

ItemEvents.tooltip(event => {
    event.add('minecraft:stone', [Text.ofString('测试').color(Color.AQUA)])
})
