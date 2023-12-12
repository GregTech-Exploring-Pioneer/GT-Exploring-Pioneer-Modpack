const add_ores = ['uranium']



GTCEuStartupEvents.registry('gtceu:material', event => {
    const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
    const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
    const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
    const $OreProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty')

    add_ores.forEach(element => {
        GTMaterials.get(element).setProperty($PropertyKey.ORE, new $OreProperty())
    })

    function AddFluidExistMaterials (material) {
        material.setProperty($PropertyKey.FLUID, new $FluidProperty())
        material.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())
    }
    AddFluidExistMaterials(GTMaterials.RutheniumTetroxide)
    AddFluidExistMaterials(GTMaterials.OsmiumTetroxide)
    AddFluidExistMaterials(GTMaterials.AmmoniumChloride)
    AddFluidExistMaterials(GTMaterials.CalciumChloride)
})