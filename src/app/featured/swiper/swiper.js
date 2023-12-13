import "./swiper.css";
const Swiper = ({ video }) => {
  return (
    <div className="BODY mt-10" style={{ borderRadius: "10px" }}>
      <swiper-container
        class="mySwiper"
        pagination="true"
        pagination-type="progressbar"
        navigation="true"
      >
        <swiper-slide>
          <img src={video.image1} alt="" style={{ borderRadius: "10px" }} />
        </swiper-slide>
        <swiper-slide>
          <img src={video.image2} alt="" style={{ borderRadius: "10px" }} />
        </swiper-slide>
        <swiper-slide>
          <img src={video.image3} alt="" style={{ borderRadius: "10px" }} />
        </swiper-slide>
      </swiper-container>

      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    </div>
  );
};

export default Swiper;
