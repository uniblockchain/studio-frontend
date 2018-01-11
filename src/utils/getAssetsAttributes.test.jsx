import { invertMap, assetAPIAttributesToDatabaseAttributes, assetDatabaseAttributesToAPIAttributes, getDatabaseAttributesFromAssetAttributes, getAssetAPIAttributeFromDatabaseAttribute } from './getAssetsAttributes';

describe('Utils', () => {
  describe('getAssetsAttributes', () => {
    it('inverts maps correctly', () => {
      const testMap = new Map([
        ['a', 'A'],
        ['b', 'B'],
        ['c', 'C'],
      ]);

      const testMapInverted = new Map([
        ['A', 'a'],
        ['B', 'b'],
        ['C', 'c'],
      ]);

      expect(invertMap(testMap)).toEqual(testMapInverted);
    });
    it('getDatabaseAttributesFromAssetAttributes returns empty string on no parameter', () => {
      expect(getDatabaseAttributesFromAssetAttributes()).toEqual('');
    });
    it('getAssetAPIAttributeFromDatabaseAttribute returns empty string on no parameter', () => {
      expect(getAssetAPIAttributeFromDatabaseAttribute()).toEqual('');
    });

    assetAPIAttributesToDatabaseAttributes.forEach((attribute) => {
      it('returns database attribute from asset API attribute', () => {
        expect(getDatabaseAttributesFromAssetAttributes(attribute))
          .toEqual(assetAPIAttributesToDatabaseAttributes.get(attribute));
      });
    });
    assetDatabaseAttributesToAPIAttributes.forEach((attribute) => {
      it('returns asset API attribute from database API attribute', () => {
        expect(getAssetAPIAttributeFromDatabaseAttribute(attribute))
          .toEqual(assetDatabaseAttributesToAPIAttributes.get(attribute));
      });
    });
  });
});
