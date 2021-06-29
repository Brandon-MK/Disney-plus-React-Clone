import React from "react";
import styled from "styled-components";

function ViewMovies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <a href="/Detail">
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
          </a>
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
    </Container>
  );
}
//i1.wp.com/www.piratesandprincesses.net/wp-content/uploads/2020/04/walt-disney-studios.png?fit=1024%2C575&ssl=1
export default ViewMovies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  padding-bottom: 10px;
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
