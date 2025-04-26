import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ListItems from "./ListItems";

const Accordion = ({ menuData, open, setShowIndex }) => {
  const toggleAccordion = () => {
    setShowIndex();
  };
  return (
    <div className="w-full my-4 p-3 rounded-lg mx-auto bg-pink-200 text-black shadow-lg">
      {/* header  */}
      <div
        className="flex items-center justify-between font-medium cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <div>{menuData?.title}</div>
          <div className="ml-2">({menuData?.itemCards.length})</div>
        </div>
        <div>
          <ChevronDownIcon className={`w-5 h-5 ${open && "rotate-180"}`} />
        </div>
      </div>
      <div>
        {menuData?.itemCards.map((menu, index) => {
          return open && <ListItems key={index} listData={menu?.card?.info} />;
        })}
      </div>
    </div>
  );
};

export default Accordion;
