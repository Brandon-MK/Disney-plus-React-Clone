import React from "react";
import styled from "styled-components";

function Series() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/5BB1FBFA805ACA487CA62FFB3617BE172535636042E25D21D7E274F6E6F580B6/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://cdn.vox-cdn.com/thumbor/KMFfvIEjOIwHSvpTbCXqIXwNJjk=/0x227:1688x1688/1400x933/filters:focal(731x663:1001x933):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/60222205/InfinityWar5aabd55fed5fa.0.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://m.media-amazon.com/images/M/MV5BYWRhZjUyZTktZjcyMi00MjRhLWI0ZjQtNjkxYjlmYjg4N2M0XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UX500_CR0,0,500,281_.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://primicia.com.ve/wp-content/uploads/2021/01/soul-2.jpg" />
        </Wrap>
      </Content>
      <h4>Enjoy a movie</h4>
      <Content>
        <Wrap>
          <img src="https://43d897265kne3ed0qv2ecjw2-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/web1_MoanaHero.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://lumiere-a.akamaihd.net/v1/images/pp_findingnemo_herobannermobile_19752_7810e507.jpeg?region=0,0,640,480" />
        </Wrap>
        <Wrap>
          <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d1455be34a5c4000849a5a5%2F0x0.jpg%3FcropX1%3D155%26cropX2%3D1400%26cropY1%3D0%26cropY2%3D700" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D45B93D9E93272115B4044D387C347E5B3826FBFE93D7A1E911F320561A8B689/scale?width=2880&aspectRatio=1.78&format=jpeg" />
        </Wrap>
      </Content>
    </Container>
  );
}
//i1.wp.com/www.piratesandprincesses.net/wp-content/uploads/2020/04/walt-disney-studios.png?fit=1024%2C575&ssl=1
export default Series;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("https://i1.wp.com/www.piratesandprincesses.net/wp-content/uploads/2020/04/walt-disney-studios.png?fit=1024%2C575&ssl=1")
      center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 88%) 0px 48px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
