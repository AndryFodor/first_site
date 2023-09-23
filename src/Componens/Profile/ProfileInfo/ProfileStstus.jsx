import React from 'react';
import s from './ProfileInfo.module.css';

// хоча класові компоненти вже майже не використовують, але я йду по ютубу, тому спочатку вивчаю локалльний стейт в класових компонентах, а поітм візьмуся за гуки
class ProfileStstus extends React.Component {

    state = {
        editMode: false,
        statusValue: this.props.status
    }

    changeMode = () => {
        console.log(this.state.editMode);
        // цей метод є асинхронний
        this.setState({
            editMode: !this.state.editMode
        })
        console.log(this.state.editMode);
    }

    render () {
        return (
            <div className={s.main1}>
                {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={ () => { this.changeMode()} }>{this.props.status?this.props.status:'don`t set status'}</span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input value={this.props.status}
                               onBlur={() => { this.changeMode() } }
                               autoFocus = {true}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStstus;