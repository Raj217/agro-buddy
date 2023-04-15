import React from 'react'
import CropDetailsQuery from '../../api/models/cropDetailsQuery'
import SearchCrops from './components/SearchCrops';
import SearchCard from './components/SearchCard';
import { CropContext } from '../../context/crops';
import { Grid } from '@mui/material';


function Search() {
    const [query, setQuery] = React.useState(new CropDetailsQuery());
    const { crops } = React.useContext(CropContext);
    let cropList = [];
    for (const [name, data] of crops) {
        cropList.push(data);
    }
    return (
        <div>
            <SearchCrops setQuery={setQuery} />
            <Grid container spacing={2} direction="row" justifyContent="center">
                {cropList.map((crop) => (
                    <Grid item xs={12} sm={6} md={4} >
                        <SearchCard key={crop.data.name} query={query} crop={crop} />
                    </Grid>
                ))}
            </Grid>

        </div>
    )
}

export default Search
