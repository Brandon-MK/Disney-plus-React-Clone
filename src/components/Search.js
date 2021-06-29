import React from "react";
import styled from "styled-components";

function Search() {
  return (
    <Container>
      <SearchBar placeholder="Search by title, character or genre" />
      <Content>
        <h1>Explore</h1>
        <Grid>
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
            <img src="https://whatsondisneyplus.com/wp-content/uploads/2021/04/spiderman.jpg" />
          </Wrap>
          <Wrap>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A1B6A3B47FBB4CCA1AEC201B730EDBA5491E404C37C32419C055002AFA38ABB9/scale?width=1200&aspectRatio=1.78&format=jpeg" />
          </Wrap>
          <Wrap>
            <img src="https://i.pinimg.com/originals/8e/e0/66/8ee06671993e7cef3f45e1b6957d79e3.jpg" />
          </Wrap>
          <Wrap>
            <img src="http://wboc-digital.s3.amazonaws.com/production/sites/wboc/wp-content/uploads/2016/12/07172713/moana.jpg" />
          </Wrap>
        </Grid>
      </Content>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    position: absolute;
    background: url("images/home-background.png") center center / cover
      no-repeat fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    content: "";
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 70px;
  font-size: 30px;
  border: none;
  background: #616369;
  padding: 0 10px;
`;

const Content = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1em;
`;

const Wrap = styled.div`
  border-radius: 4px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
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
