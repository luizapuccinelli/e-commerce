import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const SwiperStyled = styled(Swiper)`
    height: 400px;
    width: 400px;
    background-color: white;

    .swiper-button-next { color: rgba(216,164,251,1); }
    .swiper-button-prev { color: rgba(216,164,251,1); }
    .swiper-pagination {
        color: rgba(216,164,251,1);
        font-family: 'Poppins', sans-serif;
    }
`

export const SlideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%
`