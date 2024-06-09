import React, { Component } from "react";
import css from './Section.module.css'

class Section extends Component{
    render() {
        const {children, title} = this.props;
        return (
            <div className={css.section}>
                <h2 className={css.section__title}>{title}</h2> 
                {children}
            </div>
        )
    }

}

export default Section;