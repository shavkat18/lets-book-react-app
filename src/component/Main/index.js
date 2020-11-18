import React, {useState} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Pagination, Navigation, Thumbs} from 'swiper';
import 'swiper/swiper-bundle.css';
import "./main.scss"
import img_1 from './img/img_1.png';
import img_2 from './img/img_2.png';
import oval_1 from './img/Oval_1.png';
import oval_2 from './img/Oval_2.png';
import oval_3 from './img/Oval_3.png';
import oval_4 from './img/Oval_4.png';
import oval_5 from './img/Oval_5.png';
import oval_6 from './img/Oval_6.png';
import oval_7 from './img/Oval_7.png';
import ins_logo from './img/instagram_logo.png';
import call_logo from './img/Path.png';
import rectangle from './img/Rectangle.png';


SwiperCore.use([Navigation, Pagination, Thumbs]);

const Index = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen_1, setIsOpen_1] = useState(false);


    const slideImg_1 = [
        {
            "id": 1,
            "img": img_1
        },
        {
            "id": 2,
            "img": img_2
        },
        {
            "id": 3,
            "img": img_1
        },
        {
            "id": 4,
            "img": img_2
        }
    ];

    const workersList = [
        {
            "id": 1,
            "img": oval_1,
            "fullName": "Жасмин Сидоренко",
            "profession": "Косметолог"
        },
        {
            "id": 2,
            "img": oval_2,
            "fullName": "Жасмин Сидоренко",
            "profession": "Косметолог"
        },
        {
            "id": 3,
            "img": oval_3,
            "fullName": "Жасмин Сидоренко",
            "profession": "Косметолог"
        },
        {
            "id": 4,
            "img": oval_4,
            "fullName": "Жасмин Сидоренко",
            "profession": "Косметолог"
        },
        {
            "id": 5,
            "img": oval_5,
            "fullName": "Жасмин Сидоренко",
            "profession": "Косметолог"
        },
        {
            "id": 6,
            "img": oval_6,
            "fullName": "Жасмин Сидоренко",
            "profession": "Косметолог"
        },
        {
            "id": 7,
            "img": oval_7,
            "fullName": "Жасмин Сидоренко",
            "profession": "Косметолог"
        },
    ];
    const slides_job = [];
    workersList.forEach(item =>
        slides_job.push(
            <SwiperSlide key={item.id} tag="li" style={{listStyle: 'none', textAlign: 'center'}}>
                <img src={item.img} alt={item.id}/>
                <h5>{item.fullName}</h5>
                <p>{item.profession}</p>
            </SwiperSlide>
        )
    );

    const slides = [];
    slideImg_1.forEach(im =>
        slides.push(
            <SwiperSlide key={im.id} tag="li">
                <img src={im.img}
                     style={{listStyle: 'none', width: 460, height: 420}}
                     alt={im.id}/>
            </SwiperSlide>
        )
    );

    const thumbs = [];
    slideImg_1.forEach(im =>
        thumbs.push(
            <SwiperSlide key={im.id} tag="li"
                         style={{listStyle: 'none'}}>
                < img
                    src={im.img}
                    alt={im.id}
                    style={{width: 96, height: 96}}
                />
            </SwiperSlide>
        )
    );

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    const handleClick_1 = () => {
        setIsOpen_1(!isOpen_1);
    };


    return (
        <div>
            <div className="row">
                <div className="col_slide_1">
                    <Swiper id="main" thumbs={{swiper: thumbsSwiper}} tag="section" wrapperTag="ul" navigation
                            pagination spaceBetween={0}
                            slidesPerView={1}
                            onInit={(swiper) => console.log('Slide index changed to: ', swiper)}
                            onSlideChange={(swiper) => {
                                console.log('Slide index changed to: ', swiper.activeIndex);
                            }}
                            onReachEnd={() => console.log('Swiper end reached')}>{slides}
                    </Swiper>
                    <Swiper id="thumbs" slidesPerView={thumbs.length} spaceBetween={slideImg_1.length}
                            onSwiper={setThumbsSwiper}>
                        {thumbs}
                    </Swiper>
                </div>
                <div className="col_title">
                    <p>САЛОН КРАСОТЫ</p>
                    <h2>Mona beauty</h2>
                    <div className="contact">
                        <div className="contact_bg">
                            <div className="contact-logo">
                                <a href="#">
                                    <img src={ins_logo} alt="ins_logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="contact_bg">
                            <div className="contact-logo">
                                <a href="tel:+998999749918">
                                    <img src={call_logo} alt="ins_logo"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        className={isOpen ? "dropdown active" : "dropdown"}
                        onClick={handleClick}>
                        <div className="dropdown__text">
                            О нас
                        </div>
                        <div className="dropdown__items">
                            <div
                                onClick=""
                                className="dropdown__item"
                                key="">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Accusamus, distinctio
                                dolores eaque et hic impedit itaque, labore
                                molestias quibusdam reprehenderit sit tenetur?
                                A aut blanditiis id ipsa laudantium temporibus
                                voluptate.
                            </div>
                        </div>
                    </div>
                    <div
                        className={isOpen_1 ? "dropdown active" : "dropdown"}
                        onClick={handleClick_1}>
                        <div className="dropdown__text">
                            Закрыто сейчас
                        </div>
                        <div className="dropdown__items">
                            <div
                                onClick=""
                                className="dropdown__item"
                                key="">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Accusamus, distinctio
                                dolores eaque et hic impedit itaque, labore
                                molestias quibusdam reprehenderit sit tenetur?
                                A aut blanditiis id ipsa laudantium temporibus
                                voluptate.
                            </div>
                        </div>
                    </div>
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
                    <h2>Бронь с мастером</h2>
                    <div className="slide__2">
                        <Swiper id="main" tag="section" wrapperTag="ul"
                                slidesPerView={6} navigation>
                            {slides_job}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="row_fluid">
                <div className="row">
                    <div className="card-title">
                        <h2>Похожие услуги</h2>
                    </div>
                    <div className="card">
                        <a href="#">
                            <div className="card-header">
                                <img src={rectangle} alt="error"/>
                            </div>
                            <div className="card-body">
                                <p className="full_name">Холида Косметолог</p>
                                <p className="address">17 Бешикташ,  Алмазарский р-н, Таш…</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Index;
/*for (let i = 0; i < 5; i += 1) {
    thumbs.push(
    <SwiperSlide key={`thumb-${i}`} tag="li" style={{listStyle: 'none'}}>
    <img
    src={`https://picsum.photos/id/${i}/96/96`}
    alt={`Thumbnail ${i}`}
    />
    </SwiperSlide>
    );
    }*/
/*for (let i = 0; i < 5; i += 1) {
     slides.push(
         <SwiperSlide key={`slide-${i}`} tag="li">
             <img src={`https://picsum.photos/id/${i + 1}/460/420`}
                  style={{listStyle: 'none'}}
                  alt={`Slide ${i}`}/>
         </SwiperSlide>
     )
 }*/