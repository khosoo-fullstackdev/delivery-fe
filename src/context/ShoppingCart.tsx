import { useState, createContext, Dispatch, SetStateAction } from "react";

interface shopFood {
  id: string;
  name: string;
  ingredients: string;
  category: string;
  price: number;
  count: number;
  sale: number;
}

const shopFoodFirst: shopFood[] = [];

interface FoodPropsContext {
  shopFood: shopFood[];
  setShopFood: Dispatch<SetStateAction<shopFood[]>>;
}

const FoodContext = createContext<FoodPropsContext>({
  shopFood: shopFoodFirst,
  setShopFood: () => {},
});

const FoodContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [shopFood, setShopFood] = useState(shopFoodFirst);

  return (
    <FoodContext.Provider value={{ shopFood, setShopFood }}>
      {children}
    </FoodContext.Provider>
  );
};
export { FoodContextProvider, FoodContext };
