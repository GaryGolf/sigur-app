import React from 'react';
import { observer } from 'mobx-react-lite';
import MobxReactForm from 'mobx-react-form';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

import styles from "./personal.module.css"

const plugins = {
  dvr: dvr(validatorjs),
};

const fields = [
    {
        name: 'firstName',
        label: 'Имя',
        placeholder: 'Ваше имя',
        rules: 'required|string|between:2,25',
    },{
        name: 'lastName',
        label: 'Фамилия',
        placeholder: 'Введите фамилию',
        rules: 'required|string|between:2,25',
    },{
        name: 'surname',
        label: 'Отчество',
        placeholder: 'Отчество',
        rules: 'string|between:2,25',
    },{
        name: 'city',
        label: 'Город',
        placeholder: 'Город проживания',
        rules: 'required|string|between:2,25',
    },{
        name: 'birthDate',
        label: 'Дата рождения',
        placeholder: 'Дата рождения',
        rules: 'required|date',
        
    },{
        name: 'sex',
        label: 'пол',
        placeholder: 'Мы гордимся с Вами',
        rules: 'required|string|between:1,25',
    },{
        name: 'position',
        label: 'Должность',
        placeholder: 'Жклаемая должность',
        rules: 'required|string|between:3,25',
    },{
        name: 'salary',
        label: 'Зарплата',
        placeholder: 'Желаемая зарплата',
        rules: 'required|integer',
    },{
        name: 'currency',
        label: '$',
        placeholder: 'Валюта зарплаты',
        value: "BTC",
        rules: 'required|string|between:1,25',
    },{
        name: 'about',
        label: 'О себе',
        placeholder: 'Расскажите о себе',
        rules: 'required|string|between:1,12025',
  }];

  const hooks = {
    onSuccess(form: any) {
      console.log('Form Values!', form.values());
    },
    onError(form: any) {
      console.log('All form errors', form.errors());
    }
  }

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
  


const personalForm = new MobxReactForm({ fields }, { plugins, hooks });

interface PersonalFormProps {
    form: MobxReactForm
}

const PersonalForm = observer(({ form }: PersonalFormProps ) => {

    const buildFieldProps = (name: string) => {
    const field = form.$(name) 
        return ({
            name: field.name,
            label: field.label,
            helperText: field.error,
            error: !!field.error,
            required: field.rules.split('|').includes("required"),

            variant: "standard" ,
            size: "small",
            autoFocus: true,
            fullWidth: true,
            ...form.$(name).bind(),
            onBlur: (e:any) => {
                e.preventDefault()
                form.validate(name, { showErrors: true })
                    .then(({ isValid }) => {
                        if(!isValid && !!e.target) e.target.focus()
                    }) 
                    .catch(error => console.error("Something has happend ", error))
            },
        
        })
    }
    
    return (
        <form className={styles.container}>
            <h3>Персональные данные</h3>
            <TextField {...buildFieldProps('firstName')} />

            <TextField {...buildFieldProps('lastName')} />

            <TextField {...buildFieldProps('surname')} />

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

            <TextField  {...buildFieldProps('city')} />

            <TextField  {...buildFieldProps('sex')} />

            <TextField {...buildFieldProps('position')} />

            <div className={styles.formRow}>

                <TextField type="numberic" {...buildFieldProps('salary')} />

                <TextField
                    select
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

            <TextField {...buildFieldProps('about')} multiline />

            <Button variant="contained" onClick={form.onSubmit} endIcon={<SendIcon />} >Отправить</Button>

            <p>{form.error}</p>

        </form>
    )
})


export { personalForm, PersonalForm }