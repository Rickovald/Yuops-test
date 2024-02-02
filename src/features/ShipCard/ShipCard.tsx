import { FC, ReactElement } from 'react';
import s from './shipCard.module.sass';

interface IShipCard {

};

export const ShipCard: FC<IShipCard> = (): ReactElement => {
    return (
        <div className = { s.shipCard }>
            shipCard
        </div>
    );
};