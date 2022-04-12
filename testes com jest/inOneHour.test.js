
const { it, expect } = require('@jest/globals');
const inOneHour = require('./inOneHour');

describe('time function',( ) => {
    it('return the timestamp for one hour ahead',() => {
        const realDateNow = Date.now.bind(global.Date)
        global.Date.now = () => 0
        expect(inOneHour()).toBe(3600000)
        global.Date.now = realDateNow
    })
})