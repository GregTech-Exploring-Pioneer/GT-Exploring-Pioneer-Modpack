WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = ['occultism:silver_ore', 'occultism:silver_ore_deepslate']
    })
})