import React  from 'react';
import { observer } from 'mobx-react-lite';
import MobxReactForm from 'mobx-react-form';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { buildFieldProps } from './helpers';

import styles from './personal.module.css';

interface WorkFormProps {
  form: MobxReactForm;
  idx: number;
}

function WorkForm({form, idx }: WorkFormProps) {


const dom = (name: string) => `experience[${idx}].${name}`
  return (
    <div>
    <TextField {...buildFieldProps(form, dom('workCompany'), dom('workPosition'))} />
    <div className={styles.formRow}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker 
                className={styles.datePicker}
                name={form.$(dom('workStartDate')).name}
                label={form.$(dom('workStartDate')).label} 
                h
                {...form.$(dom('workStartDate')).bind()}
                slotProps={{
                    textField: {
                    helperText: form.$(dom('workStartDate')).error,
                    error: !!form.$(dom('workStartDate')).error,
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
                name={form.$(dom('workEndDate')).name}
                label={form.$(dom('workEndDate')).label} 
                h
                {...form.$(dom('workEndDate')).bind()}
                slotProps={{
                    textField: {
                    helperText: form.$(dom('workEndDate')).error,
                    error: !!form.$(dom('workEndDate')).error,
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
    <TextField {...buildFieldProps(form, dom('workPosition'), dom('workDuty'))} />
    <TextField {...buildFieldProps(form, dom('workDuty'))} />
    <hr/>
</div>
    )
}

export default observer(WorkForm)