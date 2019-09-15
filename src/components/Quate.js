import React, { Component } from 'react'
import twitter from '../images/twitter.png'
import Loader from './Loader'
export default class Quate extends Component {
    constructor(props) {
        super(props)
        this.state = { text: 'weweewrr dasdasd asd' }
    }
    componentDidMount() {
        this.getQuate()
    }
    getQuate = async () => {
        this.setState({ loading: true })
        let res = await fetch('https://api.quotable.io/random')
        res = await res.json()
        console.log('resp', res)
        this.setState({ text: res.content, author: res.author, loading: false })
    }
    twitterShare = () => {
        const { text } = this.state
        window.location = `https://twitter.com/intent/tweet?text=${text}`
    }
    render() {
        const { logoClass, author, text, loading } = this.state
        return (
            <div className='quate' >

                <div className='quate-head'> RANDOM QUATE MACHINE</div>
                {
                    loading ? <Loader /> : <div className='quate-box'>
                        <div className='quate-text'>{text}</div>
                        <div className='quate-author'>{author}</div>
                    </div>}
                <div onClick={this.twitterShare} className={`${logoClass}`}><img src={twitter} style={{ width: '64px' }} /></div>
                <button onClick={this.getQuate}> Get Another</button>
            </div>
        )
    }
}