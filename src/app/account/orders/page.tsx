import WorkSpace from "../components/workspace";
import OrdersListView from "./OrdersListView";

function page() {
  return (
    <WorkSpace>
      <div className="">
        <OrdersListView />
      </div>
    </WorkSpace>
  );
}

export default page;
