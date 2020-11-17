import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Navigation, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import "./main.scss"

SwiperCore.use([Navigation, Pagination, Thumbs]);

const Index = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const slides = [];

    for (let i = 0; i < 5; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <img src={`https://picsum.photos/id/${i + 1}/460/420`}
                    /*src="../../assets/img/img_1.png"*/
                     style={{listStyle: 'none'}}
                     alt={`Slide ${i}`}/>
            </SwiperSlide>
        )
    }

    const thumbs = [];
    for (let i = 0; i < 5; i += 1) {
        thumbs.push(
            <SwiperSlide key={`thumb-${i}`} tag="li" style={{listStyle: 'none',width:96,marginRight:6}}>
                <img
                    src={`https://picsum.photos/id/${i}/96/96`}
                    alt={`Thumbnail ${i}`}
                />
            </SwiperSlide>
        );
    }
    return (
        <div>
            <div className="row">
                <div className="col_slide_1">
                    <React.Fragment>
                        <Swiper id="main" thumbs={{swiper: thumbsSwiper}} tag="section" wrapperTag="ul" navigation
                                pagination spaceBetween={0}
                                slidesPerView={1}
                                onInit={(swiper) => console.log('Slide index changed to: ', swiper)}
                                onSlideChange={(swiper) => {
                                    console.log('Slide index changed to: ', swiper.activeIndex);
                                }}
                                onReachEnd={() => console.log('Swiper end reached')}>{slides}
                        </Swiper>
                        <Swiper id="thumbs" spaceBetween={5} slidesPerView={3} onSwiper={setThumbsSwiper}>
                            {thumbs}
                        </Swiper>
                    </React.Fragment>
                </div>
                <div className="col_title">

                </div>
                <div className="col_button">
                    <button type="submit" className="btn">Забронировать</button>
                </div>
            </div>
            <div className="row">
                <div className="services">

                </div>
            </div>
            <div className="row">
                <div className="col_slide_2">

                </div>
            </div>
            <div className="row_fluid">

            </div>
        </div>
    )
}

export default Index;