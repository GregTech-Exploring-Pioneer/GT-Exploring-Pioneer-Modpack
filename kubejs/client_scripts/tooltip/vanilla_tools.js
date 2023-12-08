const vanillaTools = Ingredient.of(/minecraft:(wooden|stone|iron|golden|diamond|netherite)_(hoe|sword|shovel|(pick)?axe)/)

ItemEvents.tooltip(event => {
    event.add(vanillaTools, Color.RED + "该工具已被禁用，仅用于合成")
})