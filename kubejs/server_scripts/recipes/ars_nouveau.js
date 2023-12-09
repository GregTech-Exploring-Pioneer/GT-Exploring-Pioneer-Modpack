ServerEvents.recipes(event => {
    event.remove({id: 'ars_nouveau:archwood_chest'})
    event.recipes.minecraft.crafting_shaped('ars_nouveau:archwood_chest', [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        'A': '#forge:logs/archwood',
        'B': 'ars_nouveau:archwood_planks',
        'C': 'minecraft:gold_ingot'
    })
})