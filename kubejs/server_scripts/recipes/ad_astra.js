ServerEvents.recipes(event => {
    event.remove({id: /ad_astra:hammering\/\w+/})
    event.remove({output: 'ad_astra:hammer'})
})