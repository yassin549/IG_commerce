import { getConfig } from '../../getConfig.js';

describe('Test until getConfig', () => {
  it('It should return the default value if path is invalid', () => {
    expect(getConfig('a.b', 1)).toEqual(1);
    expect(getConfig('a.b')).toEqual(undefined);
  });
});
