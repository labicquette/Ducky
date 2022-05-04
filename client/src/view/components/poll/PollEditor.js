import React from "react";
import { Poll } from "../../../model/objects/Poll";

export class PollEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            item1: '',
            item2: '',
            item3: '',
            item4: '', 

            days: 0,
            hours: 0,
            minutes: 5,
        }

        this.titleMaxLength = 50;
        this.itemMaxLength = 30;

        this.setPoll.bind(this);
    }

    setPoll() {
        let poll = new Poll();
        poll.title = this.state.title;
        poll.creation_time = new Date();
        if (this.props.timer) {
            let closing_time = new Date();
            closing_time.setDate(closing_time.getDate() + this.state.days);
            closing_time = closing_time.getTime();
            closing_time += 1000 * 60 * this.state.minutes +
                1000 * 60 * 60 * this.state.hours;
            poll.closing_time = new Date(closing_time);
        }
        this.props.handleSetPoll(poll);
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
                            <label htmlFor='poll-editor-timer-content-item-label'>
                                Jour :
                            </label>
                            <select
                                className='poll-editor-timer-content-item-select'
                                onChange={(e) => {this.setState({days: e.target.value})}}>
                                {days.map(i => <option key={i} value={i}>{i}</option>)}
                            </select>
                        </div>
                        <div className='poll-editor-timer-content-item'>
                            <label htmlFor='poll-editor-timer-content-item-label'>
                                Heures :
                            </label>
                            <select
                                className='poll-editor-timer-content-item-select'
                                onChange={(e) => {this.setState({hours: e.target.value})}}>
                                {hours.map(i => <option key={i} value={i}>{i}</option>)}
                            </select>
                        </div>
                        <div className='poll-editor-timer-content-item'>
                            <label htmlFor='poll-editor-timer-content-item-label'>
                                Minutes :
                            </label>
                            <select
                                className='poll-editor-timer-content-item-select'
                                onChange={(e) => {this.setState({minutes: e.target.value})}}>
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