import { useEffect, useState } from "react"
import { loadingTimer } from "../js/loading"
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        loadingTimer()
            .then((data) => {
                const items = categoryId
                    ? data.filter(prod => prod.cat === categoryId)
                    : data

                setProductos(items)
            })
            .finally(() => setLoading(false))
    }, [categoryId])

    return (
        <main>
            <section>
                {loading ? (
                    <h2 className="text-xl">Espere un momento...</h2>
                ) : (
                    <ItemList productos={productos} />
                )}
            </section>
        </main>

    )
}

export default ItemListContainer