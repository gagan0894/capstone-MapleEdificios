export const filterData = [
  {
    items: [
      { name: 'For Sale', value: '2' },
      { name: 'For Rent', value: '3' },
    ],
    placeholder: 'Transaction Type',
    queryName: 'TransactionTypeId',
  },
  {
    items: [
      { name: 'Any', value: '0-0' }, 
      { name: '1+ acres', value: '1-0' },
      { name: '2+ acres', value: '2-0' },
      { name: '5+ acres', value: '5-0' },
      { name: '10+ acres', value: '10-0' },
      { name: '50+ acres', value: '50-0' },
      { name: '100+ acres', value: '100-0' },
      { name: '200+ acres', value: '200-0' },
      { name: '300+ acres', value: '300-0' },
      { name: '400+ acres', value: '400-0' },
      { name: '500+ acres', value: '500-0' },
      { name: '1000+ acres', value: '1000-0' },
    ],
    placeholder: 'Land Size',
    queryName: 'LandSizeRange',
  },
  {
    items: [
      { name: 'Any', value: '0-0' }, 
      { name: '1', value: '1-1' },
      { name: '1+', value: '1-0' },
      { name: '2', value: '2-2' },
      { name: '2+', value: '2-0' },
      { name: '3', value: '3-3' },
      { name: '3+', value: '3-0' },
      { name: '4', value: '4-4' },
      { name: '4+', value: '4-0' },
      { name: '5', value: '5-5' },
      { name: '5+', value: '5-0' },
    ],
    placeholder: 'Beds',
    queryName: 'BedRange',
  },
  {
    items: [
      { name: 'Any', value: '0-0' }, 
      { name: '1', value: '1-1' },
      { name: '1+', value: '1-0' },
      { name: '2', value: '2-2' },
      { name: '2+', value: '2-0' },
      { name: '3', value: '3-3' },
      { name: '3+', value: '3-0' },
      { name: '4', value: '4-4' },
      { name: '4+', value: '4-0' },
      { name: '5', value: '5-5' },
      { name: '5+', value: '5-0' },
    ],
    placeholder: 'Baths',
    queryName: 'BathRange',
  },
  {
    items: [
      { name: 'No Preference', value: '0' }, 
      { name: 'House', value: '1' },
      { name: 'Duplex', value: '2' },
      { name: 'Triplex', value: '3' },
      { name: 'Residential Commercial Mix', value: '5' },
      { name: 'Mobile Home', value: '6' },
      { name: 'Special Purpose', value: '12' },
      { name: 'Other', value: '14' },
      { name: 'Row / Townhouse', value: '16' },
      { name: 'Apartment', value: '17' },
      { name: 'Fourplex', value: '19' },
      { name: 'Garden Home', value: '20' },
      { name: 'Modular', value: '26' },
      { name: 'Manufactured Home/Mobile', value: '27' },
      { name: 'Commercial Apartment', value: '28' },
      { name: 'Manufactured Home', value: '29' },
    ],
    placeholder: 'Building Type',
    queryName: 'BuildingTypeId',
  },
];
  
export const getFilterValues = filterValues => {
  const { TransactionTypeId, LandSizeRange, BedRange, BathRange, BuildingTypeId } = filterValues;

  const values = [
    {
      name: 'TransactionTypeId',
      value: TransactionTypeId,
    },
    {
      name: 'LandSizeRange',
      value: LandSizeRange,
    },
    {
      name: 'BedRange',
      value: BedRange,
    },
    {
      name: 'BathRange',
      value: BathRange,
    },
    {
      name: 'BuildingTypeId',
      value: BuildingTypeId,
    },
  ];

  return values;
};