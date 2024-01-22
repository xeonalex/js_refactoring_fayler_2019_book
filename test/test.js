import {expect} from 'chai'
import {Province, sampleProvinceData} from "../index.js";

describe('province', function () {
    let asia;
    beforeEach(function () {
        asia = new Province(sampleProvinceData())
    })

    it('shortfall', function () {
        expect(asia.shortfall).equal(5)
    });

    it('profit', function () {
        expect(asia.profit).equal(230)
    });
});
