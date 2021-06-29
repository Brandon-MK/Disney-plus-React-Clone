import React from "react";
import styled from "styled-components";

function Originals() {
  return (
    <Container>
      <LogoView>
        <Logo src="/images/logo.svg" />
        <h4>ORIGINAL</h4>
      </LogoView>
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
        <Wrap>
          <img src="https://www.denofgeek.com/wp-content/uploads/2020/09/mandalorian-pedro-pascal-episode-7-reckoning-disney.jpg?resize=768%2C432" />
        </Wrap>
        <Wrap>
          <img src="https://thedisneyblog.com/wp-content/uploads/2019/10/encore-disney-plus-kristen-bell-900.jpg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/745EAD8A0A9BEF3B514E026750FBC605CA916796298278236852FB8D29B4F4B1/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
        <Wrap>
          <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8A0F5D7C2FEB3B0D3CE7AA153016E54A2619EC12F307B1D168F022FA5B31A6F0/scale?width=1200&aspectRatio=1.78&format=jpeg" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Originals;

const Container = styled.div`
  padding-top: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoView = styled.div`
  height: 130px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 10px;
  h4 {
    letter-spacing: 10px;
  }
`;

const Logo = styled.img`
  width: 120px;
`;

const Wrap = styled.div`
  overflow: hidden;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  display: grid;
  padding-top: 130px;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  width: 90%;
`;
