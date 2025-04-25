const ListItems = ({ listData }) => {
  return (
    <div className="my-2">
      <div className="flex gap-2 items-center">
        <div className="text-base">{listData?.name}</div>
        <div>- ₹{listData?.defaultPrice / 100}</div>
      </div>
      <div className="text-xs my-4 text-gray-700">{listData?.description}</div>
      <hr className="text-gray-400 my-4" />
    </div>
  );
};

export default ListItems;
