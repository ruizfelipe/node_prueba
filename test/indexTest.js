const assert = require('chai').assert;
const {app, server, helloWord} = require('../src/index');

const helloWorldText = helloWord();

describe('Pruebas index', function(){
    it('Se espera el texto hola mundo', function(){
        assert.equal(helloWorldText, 'hola mundo');
})
});

afterEach(() => {
    server.close()
} )