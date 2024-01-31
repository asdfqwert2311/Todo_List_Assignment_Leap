import React from 'react'
import { IMAGE_URL } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { addDisplayMovie } from '../../utils/store/moviesSlice';

const MovieCard = ({ data }) => {
    const dispatch = useDispatch();
    const handleMovieCardClick = () => {
        dispatch(addDisplayMovie(data));
        console.log(data);


    }
    return (
















        <div className=' rounded-md transition-transform hover:scale-110 sm:w-48 w-36 mr-3 cursor-pointer  ' onClick={handleMovieCardClick}>

            <img className ="rounded-md" src={IMAGE_URL + data?.poster_path} alt={data?.original_title} />
            <div className='text-white tracking-tight font-semibold text-lg relative py-2 '>{data?.title}</div>
           
            <div className='sm:hidden Details flex justify-items-start p-1'>
           
            < div className=' text-white text-sm font-normal  '>{data?.release_date.substring(0, 4)}</div>
            < div className=" text-white text-1xl font-bold  border-solid border-10 border-red-500 px-4">{data?.vote_average.toFixed(1)}</div>
            </div>
            

        </div>

     
    )
}

export default MovieCard