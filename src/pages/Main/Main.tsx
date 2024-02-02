import { FC, ReactElement } from 'react';
import s from './main.module.sass';
import { useGetStarhips } from 'shared/hooks/useQuery';
import { NavLink } from 'react-router-dom';

/**
 * React component for rendering a list of spacecrafts.
 *
 * @return {ReactElement} The rendered component
 */
export const Main: FC = (): ReactElement => {
    const { starships, isLoading: shipLoad, isError: shipError } = useGetStarhips();

    if (shipLoad) {
        return <div>Загрузка</div>;
    }
    if (shipError) {
        return <div>Загрузка</div>;
    }
    console.log(starships);
    return (
        <div className={s.root}>
            <h1 className={s.ships_head}>Spacecrafts</h1>
            {/* Нормальный интерфейс сюды */}
            <div className={s.spacecrafts}>
                {starships?.results.map((starship: any) => {
                    return (
                        <NavLink to={`/${starship.url.match(/\d+/)}`} className={s.spacecraft} key={starship.name}>
                            <img className={s.spacecraft__kitty} src={'http://placekitten.com/100/100'}/>
                            <p className={s.spacecraft__name}>{starship.name}</p>
                        </NavLink>
                    );
                })}
            </div>
        </div>
    );
};