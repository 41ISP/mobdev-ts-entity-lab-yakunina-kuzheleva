import { EntityCard } from "./components/EntityCard"
import { EntityForm } from "./components/EntityForm"
import "./App.css"
import { useEffect, useState } from "react"
import { useHorsesStore } from "./store/useHorseStore"

export default function App() {
    const { horses, getHorses } = useHorsesStore()
    const [error, setIsError] = useState<string | null>(null)
    const [loading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        const load = async () => {
            setIsLoading(true)
            setIsError(null)
            try {
                await getHorses()
            } catch (error) {
                console.error(error)
                setIsError('Что то  пошло не так')
            } finally {
                setIsLoading(false)
            }
        }
        load()
    }, [])

    useEffect(() => {
        console.log(horses)
    }, [horses])
    return (
        <div className="layout">
            <header className="top">
                <h1>Мои сущности</h1>
                <span className="pill">Количество</span>
            </header>

            <aside>
                <EntityForm />
            </aside>

            <main>
                {error && <p className="error">Ошибка: </p>}
                {loading && <p className="hint">Загружаем игры…</p>}

                 {!loading && !error && horses?.data && horses.data.length > 0 ? (
                    <div className="grid">

                        {horses.data.map((el) => (
                            <EntityCard key={el.id}{...el} />

                        ))}
                    </div> 
                 ):<p className="hint">
                        Добавьте первую информацию......
                    </p>}
            </main>

        </div>
    )
}
