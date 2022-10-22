import PropTypes from 'prop-types';
import { ContactListStyle, ContactText, ContactButton, ContactItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ContactListStyle>
    {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
        <ContactText >
            {name}: {number}
        </ContactText>
        <ContactButton
            type="button"
            onClick={() => onDeleteContact(id)}
        >Delete</ContactButton>
        </ContactItem>
    ))}
    </ContactListStyle>
    )
}

ContactList.propTypes = {contacts: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    }),
),
onDeleteContact: PropTypes.func.isRequired,
};