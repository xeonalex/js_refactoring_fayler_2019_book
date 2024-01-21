import assert from 'assert'
import {Province, sampleProvinceData} from "../index.js";

describe('province', function () {
    it('shortfall', function () {
        const asia = new Province(sampleProvinceData())
        assert.equal(asia.shortfall, 5)
    });
});
