ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('twilight_crystal')
        .itemInputs('minecraft:diamond', '4x #forge:circuits/lv')
        .itemOutputs('kubejs:twilight_crystal')
        .duration(600)
        .EUt(GTValues.VA[GTValues.LV])
})