import { Component } from "react";
import { nanoid } from 'nanoid';
import css from './Phonebook.module.css';
// import Contacts from "components/Contacts";

class Phonebook extends Component{
    state = {
        name: '',
        number: '',
    }

    nameInputId = nanoid();
    numberInputId = nanoid();

    handleChangeInput = (evt) => {
        const { value, name } = evt.currentTarget;
        this.setState({ [name]: value })
    }

    handleSubmit = (evt) => {
        const { onSubmit } = this.props;
        evt.preventDefault();
        
        onSubmit(this.state);
        this.resetForm();
    }

    resetForm = () => {
         this.setState({name: '', number: ''})
    }
    
    render() {
        const { name, number } = this.state;
        return(
        <>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    
                    <label id={this.nameInputId} className={css.labelName}>Name</label>
                    <input type="text" name="name" id={this.nameInputId} value={name} onChange={this.handleChangeInput} required className={css.inputForm} />
                    
                    <label id={this.numberInputId} className={css.labelName}>Number</label>
                     <input type="tel" name="number" id={this.numberInputId} value={number} required onChange={this.handleChangeInput} className={css.inputForm}/>
                    
                    <button type="submit" className={css.button}>Add contact</button>
                </form>
        </>
    )
    }
    

}

export default Phonebook;