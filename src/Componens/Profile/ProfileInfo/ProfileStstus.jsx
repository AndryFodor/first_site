import React from 'react';
import s from './ProfileInfo.module.css';

// хоча класові компоненти вже майже не використовують, але я йду по ютубу, тому спочатку вивчаю локалльний стейт в класових компонентах, а поітм візьмуся за гуки
class ProfileStstus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status?this.props.status:'don`t set status'
    }

    componentDidUpdate(){
        
    }

    changeMode = e => {
        if(this.state.editMode) this.props.updateStatus(e.currentTarget.value)
        
        // цей метод є асинхронний
        this.setState({
            editMode: !this.state.editMode
        })

    }

    statusChanged = e => {
        this.setState({
            status: e.currentTarget.value
        })
    }


// тут важливо, що в спані буде відображатися статус, що прийшов у пропсах, а в полі вводу інпут буде відображатися локальний стейт. Це призводить в такому випадку до помилок, а в основному до того, що значення не синхронізуються як треба
    render () {
        
        return (
            <div className={s.main1}>
                {!this.state.editMode && 
                    <div>
                        <span onDoubleClick={ this.changeMode }>{ this.props.status?this.props.status:'don`t set status' }</span>
                    </div>
                }
                {this.state.editMode && 
                    <div>
                        <input value={this.state.status}
                               onBlur={this.changeMode }
                               autoFocus = {true}
                               onChange={this.statusChanged}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStstus;