import {Container, ImageHome, Title} from './styles';

const Home = () => {
  return (
    <>
      <Container>
        <Title>Pokedex</Title>
        <ImageHome
          source={require('../../../assets/images/image-home.png')}></ImageHome>
      </Container>
    </>
  );
};
export default Home;
