ItemEvents.tooltip(event => {
    event.add('gtceu:basic_electronic_circuit', GTValues.VNF[GTValues.LV] + ' - Tier 电路板')
    event.add('gtceu:basic_integrated_circuit', GTValues.VNF[GTValues.LV] + ' - Tier 电路板')
    event.add('gtceu:microchip_processor', GTValues.VNF[GTValues.LV] + ' - Tier 电路板')

    event.add('gtceu:good_electronic_circuit', GTValues.VNF[GTValues.MV] + ' - Tier 电路板')
    event.add('gtceu:good_integrated_circuit', GTValues.VNF[GTValues.MV] + ' - Tier 电路板')
    event.add('gtceu:micro_processor', GTValues.VNF[GTValues.MV] + ' - Tier 电路板')

    event.add('gtceu:advanced_integrated_circuit', GTValues.VNF[GTValues.HV] + ' - Tier 电路板')
    event.add('gtceu:micro_processor_assembly', GTValues.VNF[GTValues.HV] + ' - Tier 电路板')
    event.add('gtceu:nano_processor', GTValues.VNF[GTValues.HV] + ' - Tier 电路板')

    event.add('gtceu:micro_processor_computer', GTValues.VNF[GTValues.EV] + ' - Tier 电路板')
    event.add('gtceu:nano_processor_assembly', GTValues.VNF[GTValues.EV] + ' - Tier 电路板')
    event.add('gtceu:quantum_processor', GTValues.VNF[GTValues.EV] + ' - Tier 电路板')

    event.add('gtceu:micro_processor_mainframe', GTValues.VNF[GTValues.IV] + ' - Tier 电路板')
    event.add('gtceu:nano_processor_computer', GTValues.VNF[GTValues.IV] + ' - Tier 电路板')
    event.add('gtceu:quantum_processor_assembly', GTValues.VNF[GTValues.IV] + ' - Tier 电路板')
    event.add('gtceu:crystal_processor', GTValues.VNF[GTValues.IV] + ' - Tier 电路板')

    event.add('gtceu:nano_processor_mainframe', GTValues.VNF[GTValues.LuV] + ' - Tier 电路板')
    event.add('gtceu:quantum_processor_computer', GTValues.VNF[GTValues.LuV] + ' - Tier 电路板')
    event.add('gtceu:crystal_processor_assembly', GTValues.VNF[GTValues.LuV] + ' - Tier 电路板')
    event.add('gtceu:wetware_processor', GTValues.VNF[GTValues.LuV] + ' - Tier 电路板')

    event.add('gtceu:quantum_processor_mainframe', GTValues.VNF[GTValues.ZPM] + ' - Tier 电路板')
    event.add('gtceu:crystal_processor_computer', GTValues.VNF[GTValues.ZPM] + ' - Tier 电路板')
    event.add('gtceu:wetware_processor_assembly', GTValues.VNF[GTValues.ZPM] + ' - Tier 电路板')

    event.add('gtceu:crystal_processor_mainframe', GTValues.VNF[GTValues.UV] + ' - Tier 电路板')
    event.add('gtceu:wetware_processor_computer', GTValues.VNF[GTValues.UV] + ' - Tier 电路板')

    event.add('gtceu:wetware_processor_mainframe', GTValues.VNF[GTValues.UHV] + ' - Tier 电路板')
})