import assert from 'node:assert';
import { describe, it } from 'node:test';
import { upperName } from '../utils/format';

describe('Testing the utils', () => {
  it('upperName()', () => {
    const text = upperName('testandu');

    assert.equal(text, 'TESTANDU');
  });
});