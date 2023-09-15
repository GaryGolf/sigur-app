import React from 'react';
import { observer } from 'mobx-react-lite';
import MobxReactForm from 'mobx-react-form';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { buildFieldProps } from './helpers';

import WorkData from './work'

import styles from "./personal.module.css"

const formTitle = 'Персональные данные'

const currencies = [
    {
        value: 'RUB',
        label: '₽',
    },
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
];

const sex = [
    {
        value: 'male',
        label: 'муж'
    },
    {
        value: 'female',
        label: 'жен'
    },
]
  

interface PersonalFormProps {
    form: MobxReactForm;
}

export const PersonalForm = observer(({ form }: PersonalFormProps ) => {

    
    return (
        <div className={styles.container}>
            <h3>{formTitle}</h3>
            <TextField {...buildFieldProps(form, 'firstName', 'lastName')} />

            <TextField {...buildFieldProps(form, 'lastName', 'surname')} />

            <TextField {...buildFieldProps(form, 'surname','city')} />

            <TextField  {...buildFieldProps(form, 'city', 'birthDate')} />

            <div className={styles.formRow}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker 
                        className={styles.datePicker}
                        name={form.$('birthDate').name}
                        label={form.$('birthDate').label} 
                        h
                        {...form.$('birthDate').bind()}
                        slotProps={{
                            textField: {
                            helperText: form.$('birthDate').error,
                            error: !!form.$('birthDate').error,
                            required: form.$('birthDate').rules.split('|').includes("required"),
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

                <TextField
                        select
                        className={styles.select}
                        name={form.$('sex').name}
                        label={form.$('sex').label} 
                        helperText={form.$('sex').error}
                        error={!!form.$('sex').error} 
                        required={form.$('sex').rules.split('|').includes("required")}
                        {...form.$('sex').bind()}
                    >
                        {sex.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                </TextField>
            </div>


            <TextField {...buildFieldProps(form, 'position', 'salary')} />

            <div className={styles.formRow}>

                <TextField {...buildFieldProps(form, 'salary', 'about')} type="number"  />

                <TextField
                    select
                    className={styles.select}
                    name={form.$('currency').name}
                    label={form.$('currency').label} 
                    helperText={form.$('currency').error}
                    error={!!form.$('currency').error} 
                    required={form.$('currency').rules.split('|').includes("required")}
                    {...form.$('currency').bind()}
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>

            <TextField {...buildFieldProps(form, 'about')} multiline />
        </div>
    )
})
