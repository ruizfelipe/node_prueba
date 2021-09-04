const assert = require('chai').assert;
const index = require('../index');

const helloWorldText = index.helloWord();

describe('Pruebas index', function(){
    it('Se espera el texto hola mundo', function(){
        assert.equal(helloWorldText, 'hola mundo');
})
});