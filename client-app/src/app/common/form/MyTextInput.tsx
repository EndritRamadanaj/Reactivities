import { Form, useField } from 'formik';
import React from 'react';
import { FormField, Input, Label } from 'semantic-ui-react';

interface Props {
    placeholder: string;
    name: string;
    type?:string;
    label?: string;
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name);
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Input {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ): null}
        </FormField>
    )
}