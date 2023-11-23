import {Container, ImageHome, ImageText} from './styles';

const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4aL_33v_aU9IrkODvsWxmVCmU_C604Zl2A&usqp=CAU',
};

const Home = () => {
  return (
    <>
      <Container>
        <ImageHome source={image}>
          <ImageText>Pokedex</ImageText>
        </ImageHome>
      </Container>
    </>
  );
};
export default Home;
