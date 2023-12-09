// 修改原木 -> 木板配方
ServerEvents.recipes(evnet => {
    evnet.forEachRecipe({output: /\w+_planks/, type: 'minecraft:crafting_shapeless'}, r => {
        const input = r.getOriginalRecipeIngredients()
        const result = r.getOriginalRecipeResult()
        if (result.getCount() != 2 && input.length == 1) {
            // 移除原配方
            r.remove()

            // 添加无序配方 原木 -> 2木板
            evnet.recipes.minecraft.crafting_shapeless('2x ' + result.getId(), 
                [
                    input[0].asStack()
                ]
                )
            
            // 添加有序配方 原木+锯子 -> 4木板
            evnet.recipes.minecraft.crafting_shaped('4x ' + result.getId(), [
                'A',
                'B'
            ],
            {
                'A': '#forge:tools/saws',
                'B': input[0].asStack()
            })
        }
    })
})