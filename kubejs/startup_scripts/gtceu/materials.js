GTCEuStartupEvents.registry('gtceu:material', evnet => {
    const $GasTier = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty$GasTier')

    evnet.create('desh')
        .ingot().fluid().ore()
        .color(0xF2A057).secondaryColor(0x2E2F04).iconSet(GTMaterialIconSet.METALLIC)
        .appendFlags(GTMaterials.EXT2_METAL, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR)

    evnet.create('space_neutronium')
        .ingot().fluid().ore().dust()
        .color(0xFFFFFF).iconSet(GTMaterialIconSet.SHINY)
        .element(GTElements.get('Space Neutronium'))
        .blastTemp(9900, $GasTier.HIGH, GTValues.VA[GTValues.ZPM], 21825)
        .appendFlags(GTMaterials.EXT2_METAL, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR)

    evnet.create('infinity')
        .ingot().fluid().ore().dust()
        .color(0xFFFFFF).iconSet(GTMaterialIconSet.getByName('infinity'))
        .element(GTElements.get('Infinity'))
        .cableProperties(GTValues.V[GTValues.MAX], 8192, 0, true)
        .blastTemp(10800, $GasTier.HIGHEST, GTValues.VA[GTValues.UHV], 54562)
        .appendFlags(GTMaterials.EXT2_METAL, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_FRAME)
        
    evnet.create('infinity_catalyst')
        .dust().ore()
        .color(0xE5E2E1).iconSet(GTMaterialIconSet.SAND)
        .element(GTElements.get('Infinity Catalyst'))
})