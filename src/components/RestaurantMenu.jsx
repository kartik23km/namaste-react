import { useParams } from "react-router";
import useRestaurantMenu from "./utils/useResautrantMenu";
import Accordion from "./Accordion";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const categoryData = useRestaurantMenu(resId);

  return categoryData === null ? (
    <div className="w-full h-20 bg-gray-300 animate-pulse m-5 rounded-lg"></div>
  ) : (
    <div className="w-6/12 mx-auto">
      {categoryData?.map((category, index) => {
        return (
          <div key={index} className=" p-3 flex flex-col justify-center">
            <div className="font-bold flex items-center gap-2">
              {category?.card?.card?.title}
              <div>({category?.card?.card?.categories.length})</div>
            </div>
            {category?.card?.card?.categories.map((menu) => {
              return <Accordion key={menu?.categoryId} menuData={menu} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
