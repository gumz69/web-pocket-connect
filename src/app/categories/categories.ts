export interface TypePocket{
  pocketType: string;
  count: number;
}

export interface CategoryPocket{
  pocketName: string;
  pocketType: string;
  count: number;
  saldoPocket: number;
}

export interface GetTypePocketResponse {
  data: Array<TypePocket>;
}

export interface GetCategoryPocketResponse {
  data: Array<CategoryPocket>;
}
