ItemEvents.tooltip(event => {
    event.add('gtceu:basic_electronic_circuit', Text.of(GTValues.VNF[GTValues.LV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:basic_integrated_circuit', Text.of(GTValues.VNF[GTValues.LV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:microchip_processor', Text.of(GTValues.VNF[GTValues.LV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))

    event.add('gtceu:good_electronic_circuit', Text.of(GTValues.VNF[GTValues.MV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:good_integrated_circuit', Text.of(GTValues.VNF[GTValues.MV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:micro_processor', Text.of(GTValues.VNF[GTValues.MV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))

    event.add('gtceu:advanced_integrated_circuit', Text.of(GTValues.VNF[GTValues.HV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:micro_processor_assembly', Text.of(GTValues.VNF[GTValues.HV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:nano_processor', Text.of(GTValues.VNF[GTValues.HV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))

    event.add('gtceu:micro_processor_computer', Text.of(GTValues.VNF[GTValues.EV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:nano_processor_assembly', Text.of(GTValues.VNF[GTValues.EV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:quantum_processor', Text.of(GTValues.VNF[GTValues.EV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))

    event.add('gtceu:micro_processor_mainframe', Text.of(GTValues.VNF[GTValues.IV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:nano_processor_computer', Text.of(GTValues.VNF[GTValues.IV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:quantum_processor_assembly', Text.of(GTValues.VNF[GTValues.IV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:crystal_processor', Text.of(GTValues.VNF[GTValues.IV] + ' - Tier '))

    event.add('gtceu:nano_processor_mainframe', Text.of(GTValues.VNF[GTValues.LuV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:quantum_processor_computer', Text.of(GTValues.VNF[GTValues.LuV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:crystal_processor_assembly', Text.of(GTValues.VNF[GTValues.LuV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:wetware_processor', Text.of(GTValues.VNF[GTValues.LuV] + ' - Tier '))

    event.add('gtceu:quantum_processor_mainframe', Text.of(GTValues.VNF[GTValues.ZPM] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:crystal_processor_computer', Text.of(GTValues.VNF[GTValues.ZPM] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:wetware_processor_assembly', Text.of(GTValues.VNF[GTValues.ZPM] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))

    event.add('gtceu:crystal_processor_mainframe', Text.of(GTValues.VNF[GTValues.UV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
    event.add('gtceu:wetware_processor_computer', Text.of(GTValues.VNF[GTValues.UV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))

    event.add('gtceu:wetware_processor_mainframe', Text.of(GTValues.VNF[GTValues.UHV] + ' - Tier ').append(Text.translate('tooltip.kubejs.circuit')))
})