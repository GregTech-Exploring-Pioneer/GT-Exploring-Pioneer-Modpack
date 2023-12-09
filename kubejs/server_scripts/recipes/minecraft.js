const colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']

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
    
    event.remove({input: 'farmersdelight:canvas', output: 'minecraft:book'})

    function add_bed(color) {
        event.remove({output: color + '_bed'})
        event.recipes.minecraft.crafting_shaped(color + '_bed', [
            'AAA',
            'BBB',
            'CHC'
        ],
        {
            'A': color + '_carpet',
            'B': '#minecraft:planks',
            'C': '#minecraft:wooden_fences',
            'H': '#forge:tools/mallets'
        })
    }

    colors.forEach(c => add_bed(c))

    event.remove({id: 'aether:skyroot_chest'})
    event.remove({id: 'ars_nouveau:archwood_to_chest'})

})