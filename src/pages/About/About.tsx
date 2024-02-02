import { FC, ReactElement } from 'react';
import s from './about.module.sass';
import { useParams } from 'react-router-dom';
import { useGetStarhipById } from 'shared/hooks/useQuery';

/**
 * Renders the details of a starship based on the provided ID.
 *
 * @return {ReactElement} JSX element containing the details of the starship
 */
export const About: FC = (): ReactElement => {
    const { id } = useParams();

    const { ship, isLoading: shipLoad, isError: shipError } = useGetStarhipById(Number(id));

    if (shipLoad) {
        return <div>Загрузка</div>;
    }
    if (shipError) {
        return <div>Загрузка</div>;
    }
    console.log(ship);
    // ! Не закончены стили во время лайфкодинга
    return (
        <div className={s.root}>
            <p className={s.ship__label}>Class</p>
            {/* Uppercase css */}
            <p>{ship.starship_class}</p>

            <p className={s.ship__label}>Manufacturer</p>
            <p>{ship.manufacturer}</p>

            <p className={s.ship__label}>Cost</p>
            <p>{ship.cost_in_credits}</p>

            <div className={s.characteristics}>
                <div>
                    <p className={s.ship__label}>Length</p>
                    <p>{ship.length}</p>
                </div>
                <div>
                    <p className={s.ship__label}>Crew</p>
                    <p>{ship.crew}</p>
                </div>
                <div>
                    <p className={s.ship__label}>Passengers</p>
                    <p>{ship.passengers}</p>
                </div>
            </div>

            <p className={s.ship__label}>Films</p>
            <div className={s.films}>
                {ship.films.map((film: any) => {
                    return (
                        <div className={s.film} key={film.match(/\d+/)}>
                            <img className={s.spacecraft__kitty} src={'http://placekitten.com/100/100'} />
                            <p>{film}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};