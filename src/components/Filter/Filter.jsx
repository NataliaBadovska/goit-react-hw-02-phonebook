import React, { Component } from "react";
import css from '../Phonebook/Phonebook.module.css';
import { nanoid } from 'nanoid';

class Filter extends Component{

    filterInputId = nanoid();

    onChangeFilterInput = (evt) => {
        const { value } = evt.currentTarget;
        this.props.filtering(value);
    }

    render() {
        const {filter} = this.props;
        return (
            <>
                <label id={this.filterInputId} className={css.labelName}>Find contacts by name</label>
                <input type="text" name="filter" value={filter} id={this.filterInputId} className={css.inputForm} onChange={this.onChangeFilterInput} />
            </>
            
        )
    }
}

export default Filter;