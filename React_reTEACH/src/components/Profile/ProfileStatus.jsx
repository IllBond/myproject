import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        toggleStatusState: false,
        status: this.props.status
    };


    toggleStatusState = (boolean) => {
        this.setState({toggleStatusState: boolean})
        if (!boolean) {
            this.props.updateStatusThunk(this.state.status)
        }
    };

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value

        })
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return <div>
            <b>Статус</b> (<i>двойной клик что бы изменить</i>):

            {!this.state.toggleStatusState && <div onDoubleClick={() => { //
                this.toggleStatusState(true)
            }}>{this.props.status || 'нет статуса'}</div>}

            {this.state.toggleStatusState && <div><input onChange={this.onChangeStatus} autoFocus={true} onBlur={() => {
                this.toggleStatusState(false)
            }} type="text" value={this.state.status}/></div>}
        </div>
    }
}

export default ProfileStatus