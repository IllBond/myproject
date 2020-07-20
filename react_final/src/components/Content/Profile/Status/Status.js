import React, {Component} from 'react';
import style from './Status.module.css'

class Status extends Component {
    state = {
        isEdit: false
    }

    onEditMode = () => {
        this.setState({
            isEdit : true
        })
    }

    offEditMode = () => {
        this.setState({
            isEdit : false
        })
    }

    render() {
        debugger
        return (
           !this.state.isEdit ?  <span onDoubleClick={()=>{
               this.onEditMode()
           }}>{
               this.props.status
           }</span> :  <input autoFocus={true}
               onBlur={this.offEditMode} value={this.props.status} />
        );
    }
}

export default Status;
