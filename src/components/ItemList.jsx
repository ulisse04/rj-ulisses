import ItemCard from "./ItemCard";


const ItemList = ({productos}) => {

  return (
    <section>

      <h2 className="text-xl">Productos</h2>
      <hr />

        <div className="productos">
            {productos.map((item) => <ItemCard key={item.id} item={item}/>)}
        </div>

    </section>
  );
};

export default ItemList;