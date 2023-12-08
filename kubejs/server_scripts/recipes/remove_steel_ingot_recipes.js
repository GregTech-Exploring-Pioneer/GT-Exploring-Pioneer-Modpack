ServerEvents.recipes(event => {
    event.remove({id: 'mekanism:processing/steel/ingot/from_dust_blasting'})
    event.remove({id: 'mekanism:processing/steel/ingot/from_dust_smelting'})
    event.remove({id: 'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot'})

    event.remove({id: 'ad_astra:recipes/steel_ingot_from_nuggets'})
    event.remove({id: 'ad_astra:recipes/steel_ingot'})

    event.remove({id: 'ad_astra:recipes/steel_nugget'})
    event.remove({id: 'ad_astra:recipes/steel_block'})

    event.remove({id: 'mekanism:storage_blocks/steel'})
})