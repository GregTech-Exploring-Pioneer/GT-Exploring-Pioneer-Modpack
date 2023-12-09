// 没有对应活版门的门
const without_trapdoor = ['enderio:dark_steel_door', 'ad_astra:steel_door', 'integrateddynamics:menril_door']

// 修改所有木门配方
ServerEvents.recipes(event => {
    event.forEachRecipe({output: /\w+_door/, type: 'minecraft:crafting_shaped'}, r => {
        const inputs = r.getOriginalRecipeIngredients()
        const result = r.getOriginalRecipeResult()

        if (!result.getId().includes('minecraft') && (result.getCount() == 3) && (inputs.length == 6)) {
            r.remove()
            if (without_trapdoor.indexOf(result.getId()) != -1) {
                return
            }
            const prefix = inputs[0].getItemIds()[0].replace('_planks', '')

            // 添加门工作台配方
            event.recipes.minecraft.crafting_shaped(result.getId(), [
                'ABC',
                'ADE',
                'AAF'
            ],
            {
                'A': prefix + '_planks',
                'B': prefix + '_trapdoor',
                'C': '#forge:tools/screwdrivers',
                'D': 'gtceu:iron_ring',
                'E': 'gtceu:iron_screw',
                'F': '#forge:tools/saws'
            })

            // 添加门组装机配方
            event.recipes.gtceu.assembler(prefix + '_door')
            .itemInputs('4x ' + prefix + '_planks', prefix + '_trapdoor')
            .inputFluids(Fluid.of('gtceu:iron', 16))
            .itemOutputs(result.getId())
            .duration(400)
            .EUt(4)

            // 删除对应活版门配方
            event.remove({output: prefix + '_trapdoor'})

            // 添加对应活版门配方
            event.recipes.minecraft.crafting_shaped(prefix + '_trapdoor', [
                'ABA',
                'BBB',
                'ABA'
            ],
            {
                'A': prefix + '_slab',
                'B': 'minecraft:stick'
            })
        }
    })
})