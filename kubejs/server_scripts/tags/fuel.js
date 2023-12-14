ServerEvents.tags('fluid', event => {
    event.removeAll('gtm_core:tier_1')
    event.add('gtm_core:tier_1', 'gtceu:cetane_boosted_diesel')
})