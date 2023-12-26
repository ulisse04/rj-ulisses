import Boton from "./Boton";


const ItemDetail = ({ item }) => {

    return (
        <div className="text-center">
            <h3 className="fuente text-xl">{item.name}</h3>
            <hr/>

            <img
                src={`../${item.img}`}
                alt={item.name}
                className="rounded-lg mx-auto max-w-full h-auto"
            />

            <div>
                <p>{item.description}</p>
                <p className="text-xl font-bold">Precio: ${item.price}</p>
            </div>

            <Boton>Agregar al carrito</Boton>
        </div>
    );
};

export default ItemDetail;