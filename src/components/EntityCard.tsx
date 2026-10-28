import type { Horse } from "../types";

interface IHorseCard extends Horse {

}
export function EntityCard({name, breed, training, fotochka, owner,suit, gender, specialization }: IHorseCard) {
    return (
        <article className="card">
            <div className="card__cover">
                <img src="x" alt="Сущность" />
                <span>{name}</span>
                <b className="card__badge">{breed}, {suit}, {gender}</b>
            </div>

            <div className="card__body">
                <h3>{name}</h3>

                <p className="card__desc">{specialization}</p>

                <p className="card__meta">{training}</p>

                <div className="chips">
                    <span className="chip">{owner}</span>
                </div>
            </div>

            <footer className="card__footer">
                <strong>100 Р</strong>
                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
