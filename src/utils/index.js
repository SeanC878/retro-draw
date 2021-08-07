
export const COLORS = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'purple',
  'white',
  'black',
  'grey'
];

export function buildCellList() {
  const cellList = [];

  for (let i = 0; i < 64; i++) {
    cellList.push({
      color: null
    });
  }

  return cellList;
}