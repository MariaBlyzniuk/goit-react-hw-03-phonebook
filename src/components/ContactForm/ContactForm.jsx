import { Component } from 'react';
import PropTypes from 'prop-types';
import { FormStyle, Label, Input, Button } from './ContactForm.styled';

export class ContactForm extends Component {
state = {
    name: '',
    number: '',
};

handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
};

handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    };
    
    reset = () => {
        this.setState({ name: '', number: '' })
}

render() {
    const { name, number } = this.state;
    return (
    <FormStyle  onSubmit={this.handleSubmit}>
        <Label >
        Name
        <Input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
            placeholder="Ivan Ivanov"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
        />
        </Label>
        <Label >
        Number
        <Input
            
            type="tel"
            name="number"
            value={number}
            onChange={this.handleInputChange}
            placeholder="+380(11)-111-11-11"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
        />
        </Label>
        <Button type="submit">
        Add contact
        </Button>
    </FormStyle>
    );
}
}

ContactForm.propTypes = {
onSubmit: PropTypes.func.isRequired,
};