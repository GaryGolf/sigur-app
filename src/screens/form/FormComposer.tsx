import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import MobxReactForm from 'mobx-react-form';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

import { fields } from './fields'
import { PersonalForm, ExperienceForm } from '../../forms'
const plugins = { dvr: dvr(validatorjs) };
  

const hooks = {
    onSuccess(form: any) {
      console.log('Form Values!', form.values());
    },
    onError(form: any) {
      console.log('All form errors', form.errors());
    }
}
const form = new MobxReactForm({ fields }, { plugins, hooks });


function FormComposer() {

    return (
        <div>
            <form>
                <PersonalForm form={form} />
                <ExperienceForm form={form} />
                <Button variant="contained" onClick={form.onSubmit} endIcon={<SendIcon />} >
                    Отправить
                </Button>
                <p>{form.error}</p>
            </form>
        </div>
    )
}

export default observer(FormComposer)
