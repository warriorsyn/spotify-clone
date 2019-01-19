import React from "react";
import Slider from "rc-slider";

import { Container, Current, Volume, Progress, Controls, Time, ProgressSlider } from "./style";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
    <Container>
        <Current>
            <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930"   alt="current song" />

            <div>
                <span>Times like this</span>
                <small>Foo Fighters</small>
            </div>
        </Current>

        <Progress>
            <Controls>
                <button>
                    <img src={ShuffleIcon} alt="btn"/>
                </button>
                <button>
                    <img src={BackwardIcon} alt="btn"/>
                </button>
                <button>
                    <img src={PlayIcon} alt="btn"/>
                </button>
                <button>
                    <img src={ForwardIcon} alt="btn"/>
                </button>
                <button>
                    <img src={RepeatIcon} alt="btn"/>
                </button>
            </Controls>

            <Time>
            <span>1:40</span>

            <ProgressSlider>
                <Slider 
                    railStyle={{ background: '#404040', borderRadius: 10 }}
                    trackStyle={{background: '#1ED760'}}
                    handleStyle={{border: 0}}
                />
            </ProgressSlider>

            <span>4:00</span>
        </Time>
        
        </Progress>

        

        <Volume>
            <img src={VolumeIcon} alt="volume"/>
            <Slider
                railStyle={{ background: '#404040', borderRadius: 10 }}
                trackStyle={{background: '#FFF'}}
                handleStyle={{display: 'none'}}
                value={100}
            />
        </Volume>
    </Container>
)

export default Player;