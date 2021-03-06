import retrieveGlobalLinks from '../retrieveGlobalLinks';

describe('ADMIN | containers | SettingsPage | utils', () => {
  describe('retrieveGlobalLinks', () => {
    it('should return an empty array if there is no plugins', () => {
      expect(retrieveGlobalLinks({})).toHaveLength(0);
    });

    it('should return an array of links', () => {
      const plugins = {
        test: {
          settings: {
            global: [],
          },
        },
        noSettings: {},
        foo: {
          settings: {
            global: ['test'],
          },
        },
        bar: {
          settings: {
            global: ['test2'],
          },
        },
      };
      const expected = ['test', 'test2'];

      expect(retrieveGlobalLinks(plugins)).toEqual(expected);
    });
  });
});
