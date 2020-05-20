import React,{Component} from 'react'
import './outer-layer.scss'
import closeButton from  '../../images/close-button.png'
import Spinner from "../spinner";
import CommentItem from "../comment-item";
import Form from "../form";
import FetchClient from "../../fetch-client";

export default class OuterLayer extends Component {


    state = {
        imageURL:null,
        comments:null,
    }

    fetchClient = new FetchClient()

    componentDidMount() {
        const { imageId } = this.props
        this.fetchClient.getSpecialPhoto(imageId)
            .then((body) => {
                const { url,comments } = body
                this.setState({
                    imageURL:url,
                    comments,
                })
            })
    }



    onAddComment = (commentText) => {
        this.setState((state) => {

            const { comments } = state

            const newComment = {
                id:Math.floor(Math.random() * 1000) + 100,
                text:commentText,
                date:new Date(),
            }

            return {
                comments: [
                    ...comments,
                    newComment,
                ]
            }

        })
    }





    render() {

        const { imageURL, comments } = this.state;

        const image = imageURL ? <img src={imageURL}/> : <Spinner />;

        const commentsToJSX = comments ? comments.map((itemComment) => {
            return <CommentItem itemComment={itemComment} key={Math.random()}/>
        }) : <Spinner />

        return (
            <div className="image-gallery__outerlayer outerlayer">

                <div className="outerlayer__content">
                    <div className="outerlayer__background" onClick={() => this.props.onToggleOuter()}></div>
                    <div className="outerlayer__inner">
                        <img src={closeButton} className="outerlayer__close-button"
                             onClick={() => this.props.onToggleOuter()}/>
                        <div className="outerlayer__left outerlayer-left">
                            <div className="outerlayer-left__image image-item">
                                {image}
                            </div>
                            <Form onAddComment={this.onAddComment}/>
                        </div>
                        <div className="outerlayer__right outerlayer-right">
                            <div className="outerlayer-right__comments">
                                {commentsToJSX}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )

    }
}
