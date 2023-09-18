import React, { useState } from 'react';
import MobxReactForm from 'mobx-react-form';
import { observer } from 'mobx-react-lite';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import WorkForm from './work';

import styles from "./personal.module.css"

interface ExperienceFormProps {
    form: MobxReactForm;
}

const title = 'Опыт работы'

export const ExperienceForm = observer(({form }: ExperienceFormProps) => {


    const [experienceCounter, setExperienceCounter] = useState(0)

    const handleToggle = () => { 
        setExperienceCounter(s => !s ? 1 : 0)
    }

    const handleAddWork = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setExperienceCounter(s => s + 1)
    }

    const workExperience = !!experienceCounter && 
        new Array(experienceCounter).fill(null)
        .map((_, i) => (<WorkForm key={i} form={form} idx={i} />));
    
    const addButton = experienceCounter > 0 && experienceCounter < 3 && 
        <button onClick={handleAddWork}>Добавить место работы</button>

    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <FormLabel >Есть опыт</FormLabel>
                <RadioGroup 
                    onChange={handleToggle}
                    value={!!experienceCounter}
                    row
                >
                <FormControlLabel value={true}  control={<Radio  />} label="Да" labelPlacement="end" />
                <FormControlLabel value={false} control={<Radio />} label="Нет" labelPlacement="end" />
            </RadioGroup>
       
            {workExperience}
            {addButton}
        </div>
    )
})
