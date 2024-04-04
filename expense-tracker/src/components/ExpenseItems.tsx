// interface ItemsProps{
//     id: Number,
//     name: String,
//     cost: Number
// }
import { TiDelete } from "react-icons/ti";

const ExpenseItems = (props: any) => {
  return (
    <div className=" pt-6">
      <div className="flex items-center justify-between px-40 py-5 font-bold">
        <p>{props.name} </p>
        <div className="flex items-center justify-evenly gap-6 col-span-2">
          <span className="flex bg-blue-600 py-2 px-2 rounded-full">
            $ {props.cost}
          </span>
          <TiDelete></TiDelete>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItems;
