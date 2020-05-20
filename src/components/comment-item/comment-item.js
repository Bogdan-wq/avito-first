import React from 'react'
import './comment-item.scss';

const CommentItem = ({itemComment}) => {
    const { text, date } = itemComment

    const d = new Date(date)

    const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()

    const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1

    return (
        <div className="outerlayer-right__comment-item comment-item" key={Math.random()}>
            <span className="comment-item__date">{`${day}.${month}.${d.getFullYear()}`}</span>
            <span className="comment-item__comment">{text}</span>
        </div>
    )
}

export default CommentItem;