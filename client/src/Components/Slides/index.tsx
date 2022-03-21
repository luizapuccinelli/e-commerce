// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './styles'
import { SlideContainer, SwiperStyled } from "./styles";

interface SlidesProps{
    imageList: string[]
}

export function Slides(props: SlidesProps) {
  return (
    <>
      <SwiperStyled
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {props.imageList.map((image)=>(
            <SwiperSlide key={image}>
                <SlideContainer>
                    <img src={image}/>
                </SlideContainer>
            </SwiperSlide>
        ))}
      </SwiperStyled>
    </>
  );
}
