import { formatSchema, toAttributesArray } from '../formatSchemas';

describe('CONTENT TYPE BUILDER | components | DataManagerProvider | utils ', () => {
  describe('toAttributesArray', () => {
    it('should return an array of attributes', () => {
      const attributes = {
        name: { type: 'string', pluginOptions: { i18n: { enabled: false } } },
        price: { type: 'integer' },
      };

      const expected = [
        { type: 'string', name: 'name', pluginOptions: { i18n: { enabled: false } } },
        { type: 'integer', name: 'price' },
      ];

      expect(toAttributesArray(attributes)).toEqual(expected);
    });
  });

  describe('formatSchema', () => {
    it('should format all the attributes to an array', () => {
      const schema = {
        uid: 'address',
        pluginOptions: { i18n: { enabled: false } },
        attributes: {
          name: { type: 'string', pluginOptions: { i18n: { enabled: false } } },
          price: { type: 'integer' },
        },
      };

      const expected = {
        uid: 'address',
        pluginOptions: { i18n: { enabled: false } },
        attributes: [
          { type: 'string', pluginOptions: { i18n: { enabled: false } }, name: 'name' },
          { type: 'integer', name: 'price' },
        ],
        status: 'UNCHANGED',
      };

      expect(formatSchema(schema)).toEqual(expected);
    });
  });
});
