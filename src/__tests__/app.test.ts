const calculateTaxAmount = (salePrice: number, taxRate: number): number => {
  return salePrice * (1 + taxRate);
};

describe('TaxCalculator', () => {
  describe('test calculateTaxAmount(salesPrice, taxRate)', () => {
    it('should calculate the tax for an item', () => {
      expect(calculateTaxAmount(25, 0.05)).toEqual(26.25);
    });
  });
});
