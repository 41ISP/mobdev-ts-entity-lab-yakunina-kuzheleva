import { api, API_URL } from "../api";
import { useHorsesStore } from "../store/useHorseStore";
import type { Horse } from "../types";
import { breed_labels, gender_labels, specialization_labels } from "../util";

interface IHorseCard extends Horse {

}
export function EntityCard({name,documentId,DOB, height, breed, training, fotochka, owner,suit, gender, specialization }: IHorseCard) {
    
     const { getHorses } = useHorsesStore()
    
    const handleDelete = async () => {
        await api.deleteHorse(documentId)
        getHorses()
    }

    return (
        <article className="card">
            <div className="card__cover">
                {fotochka && fotochka.length > 0 ? (
                    <img src={API_URL + fotochka[0].url} alt={fotochka[0].alternativeText ?? name} />
                ) : (
                    <span>{name[0]}</span>
                )}
                {height !== null && <b className="card__badge">{height} см</b>}
            </div>

            <div className="card__body">
                <h3>{name}</h3>

                {suit && <p className="card__desc">Масть: {suit}</p>}

                {breed && <p className="card__meta">Порода: {breed_labels[breed]}</p>}
                
                {gender && <p className="card__meta">Пол: {gender_labels[gender]}</p>}
                
                {DOB && <p className="card__meta">Дата рождения: {new Date(DOB).toLocaleDateString("ru-RU")}</p>}
                
                {owner && <p className="card__meta">Владелец: {owner}</p>}
                
                <p className="card__meta">Обучена: {training ? "Да" : "Нет"}</p>
                
                {specialization && <p className="card__meta">Специализация: {specialization_labels[specialization]}</p>}
            </div>

            <footer className="card__footer">
                <button onClick={handleDelete} className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
