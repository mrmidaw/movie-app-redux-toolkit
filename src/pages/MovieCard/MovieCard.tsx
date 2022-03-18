import React, { FC } from 'react';

export interface IMovie {
    Title: string,
    Year: number,
    imdbID: string,
    Type: string,
    Poster: string
}

interface IProps {
    movie: IMovie
}

export const MovieCard: FC<IProps> = ({ movie }) => {
    return (
        <div className='card-item'>
            <div className='card-inner'>
                <div className='card-top'>

                </div>
            </div>
        </div>
    );
};
