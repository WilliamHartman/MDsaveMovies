import './Autocomplete.css'
import { Autocomplete as MUIAutocomplete, TextField } from '@mui/material';

export default function Autocomplete(props) {
    return (
        <div className='Autocomplete'>
            <MUIAutocomplete 
                disableClearable
                id='movie-title'
                options={props.movieList ? props.movieList : [] }
                sx={{width: 350, margin: '15px 0 0 0'}}
                value={props.selectedMovie}
                onChange={(event, newValue) => props.setSelectedMovie(newValue)} 
                inputValue={props.searchTerm}
                onInputChange={(event, newSearchTerm) => props.setSearchTerm(newSearchTerm)}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            /> 
        </div>
    )
}