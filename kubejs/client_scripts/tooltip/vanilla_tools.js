const vanillaTools = Ingredient.of(/minecraft:(wooden|stone|iron|golden|diamond|netherite)_(hoe|sword|shovel|(pick)?axe)/)

ItemEvents.tooltip(event => {
    event.add(vanillaTools, Text.translate('tooltip.kubejs.tool_disabled').color(Color.RED))
})