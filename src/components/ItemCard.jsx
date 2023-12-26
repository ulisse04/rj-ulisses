import { Link } from "react-router-dom";
import Boton from "./Boton";

const ItemCard = ({ item }) => {

    return (
        <article className="productos__tarjeta">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Precio: ${item.price}</p>

            <Boton>
                <Link to={`/item/${item.id}`}>Detalles</Link>
            </Boton>
        </article>
    );
};

export default ItemCard;
