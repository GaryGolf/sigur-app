import MobxReactForm, { Field } from 'mobx-react-form';

export function buildFieldProps(form: MobxReactForm, name: string, next?: string) {
    const field: Field = form.$(name) 
    return ({
            helperText: field.error,
            error: !!field.error,
            required: field.rules?.split('|')?.includes("required"),

            variant: "standard" ,
            size: "small",
            fullWidth: true,
            ...form.$(name).bind(),
            onBlur: (e: React.FocusEvent<HTMLInputElement>) => {
                e.preventDefault()
                form.validate(name, { showErrors: true })
                    .then(({ isValid }) => {
                        if(!isValid && !!e.target) e.target.focus()
                    }) 
                    .catch(error => console.error("Something has happend ", error))
            },

            onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {
                if (!next || e.key != 'Enter') return;
                form.validate(name, { showErrors: true })
                    .then(({ isValid }) => {
                        if (!isValid) return
                        // form.$(next).focus();
                        const input = form.$(next).ref.querySelector('input')
                        if(!!input) input.focus()
                    }) 
                    .catch(error => console.error("Something has happend ", error))
            },
        })
    }