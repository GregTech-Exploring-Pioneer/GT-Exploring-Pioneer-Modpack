ServerEvents.recipes(event => {

    // remove enderio 2 log => 16 stick
    event.remove({id: 'enderio:stick'})
    event.recipes.minecraft.crafting_shaped('4x minecraft:stick', [
        'X',
        'X'
    ], 
    {
        'X': '#minecraft:logs'
    })
    
})