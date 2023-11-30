import {Container, ImageHome, Title} from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <>
      <Container>
        <LinearGradient
          colors={['#001373', '#0936A9']}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 0}}
          style={{flex: 1}}>
          <Title>Pokedex</Title>
          <ImageHome
            source={require('../../../assets/images/image-home.png')}></ImageHome>
        </LinearGradient>
      </Container>
    </>
  );
};
export default Home;
