ServerEvents.recipes(event => {
    event.remove({output: 'eccentrictome:tome'})
    event.recipes.minecraft.crafting_shapeless(
        'eccentrictome:tome',
        ['minecraft:book', 'minecraft:book']
    )
    event.recipes.minecraft.crafting_shapeless(
        Item.of('eccentrictome:tome', '{"eccentrictome:mods":{ae2:{0:{Count:1b,id:"ae2:guide"}},aether:{0:{Count:1b,id:"aether:book_of_lore"}},ars_nouveau:{0:{Count:1b,id:"ars_nouveau:worn_notebook"}},botania:{0:{Count:1b,id:"botania:lexicon"}},ftbquests:{0:{Count:1b,id:"ftbquests:book"}},integrateddynamics:{0:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration"}},naturesaura:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"naturesaura:book"}}},occultism:{0:{Count:1b,id:"occultism:dictionary_of_spirits",tag:{"modonomicon:book_id":"occultism:dictionary_of_spirits"}}},solcarrot:{0:{Count:1b,id:"solcarrot:food_book"}},tetra:{0:{Count:1b,id:"tetra:holo",tag:{"holo/core":"holo/core","holo/core_material":"frame/dim","holo/frame":"holo/frame","holo/frame_material":"core/ancient","holo/repo":"holo/repo","holo/repo_material":"repo/default","holo/scanner":"holo/scanner","holo/scanner_material":"scanner/default"}}}},"eccentrictome:version":1}'),
        ['eccentrictome:tome']
    )
})