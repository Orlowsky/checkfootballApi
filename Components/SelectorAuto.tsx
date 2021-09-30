import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface TitleProps {
    data: Array<any> ; // required
  }

const SelectorAuto = ({data} : TitleProps) => {
 console.log(data[0].name)
 console.log()
 const createNewData = data.map((el,index)=>{
  return {label: el.name, url:el.url }
 })
 console.log(createNewData)
  
    return (
      <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={createNewData}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    
  ];
  

export default SelectorAuto
