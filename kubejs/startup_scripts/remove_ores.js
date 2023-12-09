WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            'occultism:silver_ore', 
            'occultism:silver_ore_deepslate', 
            'ad_astra:mars_iron_ore', 
            'ad_astra:mars_diamond_ore', 
            'ad_astra:moon_iron_ore',
            'ad_astra:glacio_coal_ore',
            'ad_astra:glacio_copper_ore',
            'ad_astra:glacio_iron_ore',
            'ad_astra:glacio_lapis_ore',
            'ad_astra:mercury_iron_ore',
            'ad_astra:venus_coal_ore',
            'ad_astra:venus_gold_ore',
            'ad_astra:venus_diamond_ore'
        ]
    })
})