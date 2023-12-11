GTCEuServerEvents.oreVeins(event => {
    event.add('monazite_vein_n', vein => {
        vein.clusterSize(24)
        vein.weight(30)
        vein.layer('ad')
        vein.density(0.2)
        vein.addSpawnDimension('ad_astra:moon')
        vein.addSpawnDimension('ad_astra:venus')
        vein.addSpawnDimension('ad_astra:glacio')
        vein.heightRange({
          height: {
            type: 'uniform',
            min_inclusive: {
              absolute: 20
            },
            max_inclusive: {
              absolute: 40
            }
          }
        })
        vein.discardChanceOnAirExposure(0)
        vein.generator(vein.generatorBuilder('gtceu:layer')
          .withLayerPattern(() => GTLayerPattern.builder(GTOres.OVERWORLD_RULES)
            .layer(l => l.weight(3).mat(GTMaterials.Bastnasite).size(2, 4))
            .layer(l => l.weight(1).mat(GTMaterials.Monazite).size(1, 1))
            .layer(l => l.weight(1).mat(GTMaterials.Neodymium).size(1, 1))
            .build()))
      })
})