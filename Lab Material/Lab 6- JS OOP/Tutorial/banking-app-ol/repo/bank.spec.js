import { expect } from 'chai';
import * as repo from './bank.js'

describe('Bank Application', () => {
    describe('Convert From US To QAR Method', () => {
        it('expect 1 USD to be 3.65 QAR', () => {
            expect(repo.convertFromUSToQAR(1)).to.equal(3.65)
        })
        it('expect 100 USD to be 365 QAR', () => {
            expect(repo.convertFromUSToQAR(100)).to.equal(365)
        })
    })
})
