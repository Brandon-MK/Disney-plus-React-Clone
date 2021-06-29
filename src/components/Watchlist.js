import React from "react";
import styled from "styled-components";

function Watchlist() {
  return (
    <Container>
      <Content>
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

export default Watchlist;

const Container = styled.div``;
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
  padding-top: 10px;
  gap: 10px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 0px 5px;
`;
