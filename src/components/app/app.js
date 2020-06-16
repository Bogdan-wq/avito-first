import React,{Component,Fragment} from 'react'
import ImageItem from "../image-item";
import OuterLayer from "../outer-layer";
import Spinner from "../spinner";
import './app.scss'
import FetchClient from "../../fetch-client";


class App extends Component {

    state = {
        base:null,
        error:false,
        chosenImage:null
    }

    fetchClient = new FetchClient()

    componentDidMount() {
         this.fetchClient.getAllPhotos()
            .then((body) => {
                this.setState({
                    base:body
                })
            })
    }

    onToggleOuter = (value) => {
        this.setState({
            chosenImage:value
        })
    }


    render() {

        const { base, error, chosenImage } = this.state;

        const loadingIndicator = !base && !error ? <Spinner /> : null

        const content = base
            ?  <div className="image-gallery__folder">
                {base.map((imageItem) => {
                    return <ImageItem image={imageItem}
                              key={imageItem.id}
                              onToggleOuter={this.onToggleOuter}/>})}
                </div>
            : null


        const outerLayer = chosenImage
            ? <OuterLayer onToggleOuter={this.onToggleOuter} imageId={chosenImage}/>
            : null


        return (
            <Fragment>
                <svg display="none">
                    <symbol id="close-button" viewBox="0 0 413.348 413.348">
                        <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"/>
                    </symbol>
                </svg>
                <div className="image-gallery">
                    <h1 className="image-gallery__title">Test App</h1>
                    {loadingIndicator}
                    {content}
                    {outerLayer}
                </div>
            </Fragment>
        )
    }

}

export default App;