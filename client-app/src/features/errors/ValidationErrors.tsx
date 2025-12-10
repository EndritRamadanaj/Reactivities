import { Message } from "semantic-ui-react";

interface Props {
    errors: any;
}

export default function ValidationError({ errors }: Props) {
    if (!Array.isArray(errors)) return null;

    return (
        <Message error>
            <Message.List>
                {errors.map((err, i) => (
                    <Message.Item key={i}>{err}</Message.Item>
                ))}
            </Message.List>
        </Message>
    );
}