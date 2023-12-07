// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler("test_recipes")
    .itemInputs('20x minecraft:stone')
    .itemOutputs('ae2:wireless_crafting_terminal')
    .duration(200)
    .EUt(GTValues.VA[GTValues.LV]);

    event.recipes.extendedcrafting.shaped_table('ae2:256k_crafting_storage', [
        "XXXXXXXXX",
        "XXXXXXXXX",
        "XXXXXXXXX",
        "XXXXXXXXX",
        "XXXXXXXXX",
        "XXXXXXXXX",
        "XXXXXXXXX",
        "XXXXXXXXX",
        "XXXXXXXXX"
    ],
    {
        "X": 'minecraft:stone'
    })
    
})
