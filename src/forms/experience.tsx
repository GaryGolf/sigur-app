import React, { useState } from 'react';
import MobxReactForm from 'mobx-react-form';
import { observer } from 'mobx-react-lite';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { buildFieldProps } from './helpers';

import styles from "./personal.module.css"

interface ExperienceFormProps {
    form: MobxReactForm;
    hasExperience: boolean;
    onToggle: (yes: boolean) => void

}

const title = 'Опыт работы'

export const ExperienceForm = observer(({form, hasExperience, onToggle}: ExperienceFormProps) => {


    const [experienceCounter, setExperienceCounter] = useState(0)

    const handleToggle = () => { 
        setExperienceCounter(hasExperience ? 0 : 1)
        onToggle(!hasExperience); 
    }

    // console.log(form.$('experience[0].workCompany'))
    // console.log(form.$('experience').fields)

    const renderForm = () => {
        return (
            <div>
                <TextField {...buildFieldProps(form, 'experience[0].workCompany', 'experience[0].workPosition')} />
                <div className={styles.formRow}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            className={styles.datePicker}
                            name={form.$('experience[0].workStartDate').name}
                            label={form.$('experience[0].workStartDate').label} 
                            h
                            {...form.$('experience[0].workStartDate').bind()}
                            slotProps={{
                                textField: {
                                helperText: form.$('experience[0].workStartDate').error,
                                error: !!form.$('experience[0].workStartDate').error,
                                // required: form.$('experience[0].workStartDate').rules.split('|').includes("required"),
                                variant: "standard" ,
                                size: "small",
                                options: {
                                    showErrorsOninit: false,
                                    validateOnChange: true,
                                },
                                },
                            }}
                            disableFuture
                        />
                    </LocalizationProvider>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker 
                            className={styles.datePicker}
                            name={form.$('experience[0].workEndDate').name}
                            label={form.$('experience[0].workEndDate').label} 
                            h
                            {...form.$('experience[0].workEndDate').bind()}
                            slotProps={{
                                textField: {
                                helperText: form.$('experience[0].workEndDate').error,
                                error: !!form.$('experience[0].workEndDate').error,
                                // required: form.$('experience[0].workEndDate').rules.split('|').includes("required"),
                                variant: "standard" ,
                                size: "small",
                                options: {
                                    showErrorsOninit: false,
                                    validateOnChange: true,
                                },
                                },
                            }}
                            disableFuture
                        />
                    </LocalizationProvider>
                </div>
                <TextField {...buildFieldProps(form, 'experience[0].workPosition', 'experience[0].workDuty')} />
                <TextField {...buildFieldProps(form, 'experience[0].workDuty')} />
                <hr/>
            </div>
        )
    }
    

    return (
        <div className={styles.container}>
            <h3>{title}</h3>

            <FormLabel >Есть опыт</FormLabel>
                <RadioGroup 
                    onChange={handleToggle}
                    defaultValue={hasExperience}
                    row
                >
                <FormControlLabel value={true}  control={<Radio  />} label="Да" labelPlacement="end" />
                <FormControlLabel value={false} control={<Radio />} label="Нет" labelPlacement="end" />
            </RadioGroup>
       
            {hasExperience && renderForm()}

        </div>
    )
})
