import { Container, Stack } from "@mui/material";
import { SalesSection } from "./SalesSection";
import { MainSection } from "./MainSection";
import { useFood } from "@/context/FoodContext";
import { CategoryData } from "@/utils/dummyCategory";

export const HomeCards = () => {
  const { allFood } = useFood();
  const saleFoods = allFood.filter((food) => food.sale > 0).slice(0, 4);
  return (
    <Stack>
      <Container maxWidth="lg">
        <Stack gap={"80px"}>
          <SalesSection title="Хямдралтай" saleFoods={saleFoods} />
          {CategoryData.map((cat, index) => {
            const fourFoods = allFood
              .filter((food) => food.category == cat.name && food.sale == 0)
              .slice(0, 4);
            return (
              <Stack key={index} gap={"80px"}>
                <MainSection title={cat.name} food={fourFoods} />
              </Stack>
            );
          })}
        </Stack>
      </Container>
    </Stack>
  );
};
