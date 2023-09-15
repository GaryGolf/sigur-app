import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function WorkData({form}: any) {
    const [hasExperience, setExperoience] = useState(false);
    const toggleExperience = (event:React.ChangeEvent<HTMLInputElement>) => {
        setExperoience(state => !state)
    }

    console.log(form.$('experience[0].work'))
  return (
    <div>


      <FormLabel >Есть опыт</FormLabel>
        <RadioGroup 
          onChange={toggleExperience}
          defaultValue={hasExperience}
          row
        >
        <FormControlLabel value={true}  control={<Radio  />} label="Да" labelPlacement="end" />
        <FormControlLabel value={false} control={<Radio />} label="Нет" labelPlacement="end" />
      </RadioGroup>
        { hasExperience && (
        <div>
            {/* <TextField 
              variant="standard"
              size="small"
              fullWidth
              {...form.$("experience.work").$(1).bind()}
            /> */}
            {/* <TextField 
              variant="standard"
              size="small"
              fullWidth
              {...form.$("experience[2]").bind()}
            /> */}
        </div>
        )}


        </div>
    )
}

export default observer(WorkData)