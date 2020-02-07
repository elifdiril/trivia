import React, {Component} from 'react';
import Lottie from 'react-lottie';
import * as animationData from './game-icon.json'

export default class LottieControl extends Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData.default,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            }
        };

        return (
            <div>
                <Lottie options={defaultOptions}
                        height={200}
                        marginTop={20}
                        width={200}/>
            </div>
        )
    }
}