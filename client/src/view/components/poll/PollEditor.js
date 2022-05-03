import React from "react";

export class PollEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            item1: '',
            item2: '',
            item3: '',
            item4: '', 
        }

        this.titleMaxLength = 50;
        this.itemMaxLength = 30;
    }

    render() {
        let timerContent = null;
        if (this.props.timer) {
            let days = []; for (let i=0; i < 7; i++) days.push(i);
            let hours = []; for (let i=0; i < 24; i++) hours.push(i);
            let minutes = []; for (let i=5; i < 60; i++) minutes.push(i);

            timerContent = (
                <div className='poll-editor-timer-content'>
                    <h4>Durée du sondage</h4>
                    <div className='poll-editor-timer-content-items'>
                        <div className='poll-editor-timer-content-item'>
                            <label for='poll-editor-timer-content-item-label'>
                                Jour :
                            </label>
                            <select
                                className='poll-editor-timer-content-item-select'>
                                {days.map(i => <option key={i} value={i}>{i}</option>)}
                            </select>
                        </div>
                        <div className='poll-editor-timer-content-item'>
                            <label for='poll-editor-timer-content-item-label'>
                                Heures :
                            </label>
                            <select
                                className='poll-editor-timer-content-item-select'>
                                {hours.map(i => <option key={i} value={i}>{i}</option>)}
                            </select>
                        </div>
                        <div className='poll-editor-timer-content-item'>
                            <label for='poll-editor-timer-content-item-label'>
                                Minutes :
                            </label>
                            <select
                                className='poll-editor-timer-content-item-select'>
                                {minutes.map(i => <option key={i} value={i}>{i}</option>)}
                            </select>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className='poll-editor-container'>
                <div className='poll-editor-title-content'>
                    <input
                        className='poll-editor-title-content-input'
                        type='text'
                        placeholder='Titre. ex: Quelle est votre couleur préférée ?'
                        value={this.state.title}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value.length <= this.titleMaxLength)
                                this.setState({ title: value});
                        }} />
                    <span
                        className='poll-editor-items-content-item-info'>
                        {this.state.title.length}/{this.titleMaxLength}
                    </span>
                </div>
                <div className='poll-editor-items-content'>
                    <div className='poll-editor-items-content-item'>
                        <input
                            className='poll-editor-items-content-item-input'
                            type='text'
                            placeholder='Choix 1. ex: Rouge'
                            value={this.state.item1}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= this.itemMaxLength)
                                    this.setState({ item1: value});
                            }} />
                        <span
                            className='poll-editor-items-content-item-info'>
                            {this.state.item1.length}/{this.itemMaxLength}
                        </span>
                    </div>
                    <div className='poll-editor-items-content-item'>
                        <input
                            className='poll-editor-items-content-item-input'
                            type='text'
                            placeholder='Choix 2. ex: Vert'
                            value={this.state.item2}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= this.itemMaxLength)
                                    this.setState({ item2: value});
                            }} />
                        <span
                            className='poll-editor-items-content-item-info'>
                            {this.state.item2.length}/{this.itemMaxLength}
                        </span>
                    </div>
                    <div className='poll-editor-items-content-item'>
                        <input
                            className='poll-editor-items-content-item-input'
                            type='text'
                            placeholder='Choix 3 (facultatif)'
                            value={this.state.item3}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= this.itemMaxLength)
                                    this.setState({ item3: value});
                            }} />
                        <span
                            className='poll-editor-items-content-item-info'>
                            {this.state.item3.length}/{this.itemMaxLength}
                        </span>
                    </div>
                    <div className='poll-editor-items-content-item'>
                        <input
                            className='poll-editor-items-content-item-input'
                            type='text'
                            placeholder='Choix 4 (facultatif)' 
                            value={this.state.item4}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (value.length <= this.itemMaxLength)
                                    this.setState({ item4: value});
                            }} />
                        <span
                            className='poll-editor-items-content-item-info'>
                            {this.state.item4.length}/{this.itemMaxLength}
                        </span>
                    </div>
                </div>
                {timerContent}
                <div className='poll-editor-actions-content'>
                    <input 
                        className='poll-editor-actions-content-item'
                        type='button'
                        value='Supprimer le sondage' 
                        onClick={this.props.handleDelete} />
                </div>
            </div>
        );
    }
}