'use strict';

var expect = require('expect.js');
var relative = require('../lib/helpers/relative.js');

describe('Relative', function() {

  it('should get correct relative path', function() {
    expect(relative('/the/root', '/the/root/one.js')).to.be('one.js');
    expect(relative('/the/root', '/the/rootone.js')).to.be('../rootone.js');
    expect(relative('/the/root', '/therootone.js')).to.be('/therootone.js');

    expect(relative('', '/the/root/one.js')).to.be('/the/root/one.js');
    expect(relative('.', '/the/root/one.js')).to.be('/the/root/one.js');
    expect(relative('', 'the/root/one.js')).to.be('the/root/one.js');
    expect(relative('.', 'the/root/one.js')).to.be('the/root/one.js');

    expect(relative('/', '/the/root/one.js')).to.be('the/root/one.js');
    expect(relative('/', 'the/root/one.js')).to.be('the/root/one.js');
  });

});
