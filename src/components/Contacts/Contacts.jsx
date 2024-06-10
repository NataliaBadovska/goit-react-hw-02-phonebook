import { Component } from "react";
import css from './Contacts.module.css';

class Contacts extends Component{

    render() {
        const { options, deleteContact } = this.props;
        return (
            <ul className={css.listContact}>
                {options.map(contact =>
                    <li key={contact.id} className={css.contact}>
                        <div className={css.info}>{contact.name}: {contact.number}</div>
                        <button type="button" className={css.button} onClick={()=>deleteContact(contact.id)}>Delete</button>
                    </li>)} 
               
            </ul>
        )
    }
}

export default Contacts;