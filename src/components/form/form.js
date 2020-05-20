import React,{Component} from 'react'
import './form.scss'

export default class Form extends Component {


    state = {
        commentText:''
    }

    onInputChange = (e) => {
        this.setState({
            commentText:e.target.value
        })
    }

    onAddComment = (e) => {
        e.preventDefault()
        const { commentText } = this.state
        this.props.onAddComment(commentText)
        this.setState({
            commentText: ''
        })
    }


    render() {

        const { commentText } = this.state

        return (
            <form className="outerlayer-left__form form" onSubmit={(e) => this.onAddComment(e)}>
                <div className="form__input">
                    <input type="text"
                           placeholder="Ваше имя"
                           className="input"/>
                </div>
                <div className="form__input">
                    <input type="text"
                           placeholder="Ваш комментарий"
                           className="input"
                           required
                           value={commentText}
                           onChange={(e) => this.onInputChange(e)}/>
                </div>
                <div className="form__input">
                    <input type="submit"
                           value="Оставить ваш комментарий"
                           className="input input_submit"/>
                </div>
            </form>
        )
    }
}


