StartupEvents.registry('item', event => {
    event.create('twilight_crystal')
        .tooltip(Text.translate('tooltip.kubejs.twilight_crystal'))
        .rarity('uncommon')
        .texture('kubejs:item/twilight_crystal')
})

StartupEvents.registry('block', event => {
    // event.create('sterile_farm_casing')
    //     .textureAll('minecraft:block/acacia_log_top')
    //     .requiresTool()
    //     .tagBlock('minecraft:mineable/pickaxe')
})