import React, { useState } from 'react'
import Slider from 'react-slick';


function HomeSlider() {
    const slideDetail = [
        { imgUrl: "https://www.forevernew.com.au/media/wysiwyg/Blog-Hero-Footer-Banner-1440x350-DT_9.jpg" },
        { imgUrl: "https://ik.imagekit.io/thestylist/an/pub/media_astha/HOMEPAGE_IMAGES/03_Jun_22/Mobile-Thin-Banner.jpg" },
        { imgUrl: "https://www.evernew.ca/media/wysiwyg/Blog-Hero-Footer-Banner-1440x350-DT_16.jpg" },
        { imgUrl: "https://za.puma.com/media/contentmanager/content/June-Ambrose_Collection_Banner_1440x350px.jpg" },
    ];

    // eslint-disable-next-line
    const [slideData, setSlideData] = useState(slideDetail);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className="slider-section">
            <Slider {...settings} className='slider-container'>
                {
                    slideData.map((slide, index) => {
                        return <div className="slide-container" key={index}>
                            <img src={slide.imgUrl} alt="Slide Text" />
                        </div>
                    })
                }
            </Slider>
        </div>
    )
}

export default HomeSlider