export interface IBackProduct {
    mainId: string;
    displayName: string;
    displayDescription: string;
    displayAssets: [
        {
            background: string;
        },
        {
            background: string;
        }
    ];
    price: {
        finalPrice: number;
    };
}

export interface IProduct {
  id: string,
  name: string,
  description: string,
  price: number,
  image: string,
}
