import { Component } from "react";
import css from './Contacts.module.css';

class Contacts extends Component{
    render() {
        const { options } = this.props;
        return (
            <ul className={css.listContact}>
                {options.map(contact => <li key={contact.id} className={css.contact}>{contact.name}: {contact.number }</li>)}  
            </ul>
        )
    }
}

export default Contacts;