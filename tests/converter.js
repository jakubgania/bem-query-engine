/* global chai */

'use strict';

// import defaultConverterConfig from '';
// import selector from '';
import Converter from '../src/converter/converter';

const expect = chai.expect;

describe( 'Converter', () => {
  it( 'is a class', () => {
    expect(Converter).to.be.a('function');
  })
});