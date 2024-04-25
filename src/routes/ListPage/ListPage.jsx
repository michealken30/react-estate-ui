import { listData } from "/src/lib/dummydata.jsx";
import "./listpage.scss";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";

const ListPage = () => {
  const data = listData;
  return (
    <div className="listpage">
      <div className="listcontainer">
        <div className="wrapper">
          <Filter />
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="mapcontainer">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
