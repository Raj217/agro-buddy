import React from 'react'
import CropDetailsQuery from '../../api/models/cropDetailsQuery'
import SearchCrops from './components/SearchCrops';
import SearchCard from './components/SearchCard';
import { CropContext } from '../../context/crops';


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
            {cropList.map((crop) => (
                <SearchCard key={crop.data.name} query={query} crop={crop} />
            ))}
        </div>
    )
}

export default Search