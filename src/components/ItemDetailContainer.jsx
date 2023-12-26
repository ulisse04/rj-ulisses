import { useEffect, useState } from "react";
import { loadingTimer } from "../js/loading"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState(null);

  const { itemId } = useParams()

  useEffect(() => {
    setLoading(true);

    loadingTimer()
      .then((data) => {
        setItem( data.find(prod => prod.id === Number(itemId)) )
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <h2 className="text-xl">Espere un momento...</h2>
      ) : (
        <ItemDetail item={item}/>
      )}
    </>
  );
};

export default ItemDetailContainer;
