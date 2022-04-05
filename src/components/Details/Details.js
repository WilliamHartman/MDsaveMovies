import './Details.css'
import {CircularProgress, Box, Typography} from '@mui/material';

export default function Details(props) {
    return (
        <div className='Details'>
            <div className='details-background-img' style={{backgroundImage: `url("https://image.tmdb.org/t/p/w500${props.movieDetails.backdrop_path}")`}}>
                <div className='details-top-cont'>
                    <img src={`https://image.tmdb.org/t/p/w500${props.movieDetails.poster_path}`} className='details-poster'/>
                    <div className='details-top-right'>
                        <h1 className='details-title'>{props.movieDetails.title}</h1>
                        <div className='details-below-title'>
                            <p>{props.movieDetails.release_date}  ({props.movieDetails.production_countries[0].iso_3166_1})</p>
                            <p style={{margin: '0 10px 0 10px'}}>•</p>
                            {props.movieDetails.genres.map((genre, index)=><p key={genre.id}>{index !== 0 ? ', ': ''}{genre.name}</p>)}
                            <p style={{margin: '0 10px 0 10px'}}>•</p>
                            <p>{props.movieDetails.runtime} minutes</p>
                        </div>
                        <div className='details-user-score-row'>
                            <Box sx={{ height: '50px', width: '50px', position: 'relative', display: 'inline-flex', background: 'black', borderRadius: '25px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                                <CircularProgress variant="determinate" value={props.movieDetails.vote_average * 10} color='success'/>
                                <Box
                                    sx={{
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
                                    position: 'absolute',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    }}
                                >
                                    <Typography variant="caption" component="div" color="white" sx={{lineHeight: '50px'}}>
                                    {`${Math.round(props.movieDetails.vote_average * 10)}%`}
                                    </Typography>
                                </Box>
                            </Box>
                            <h5 className='details-user-score-text'>User Score</h5>
                        </div>
                        <h4 style={{color: 'lightGray', fontWeight: '200', fontStyle: 'italic', margin: '15px 0 5px 0'}}>{props.movieDetails.tagline}</h4>
                        <h3 style={{color: 'white', margin: '10px 0 10px 0'}}>Overview</h3>
                        <h5 className='details-overview-text'>{props.movieDetails.overview}</h5>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}