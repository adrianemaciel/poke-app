import {Container, ImageHome, Title} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import SGVHOME from '../../../assets/svg/image-home.svg';

const Home = () => {
  return (
    <>
      <Container>
        <LinearGradient
          colors={['#00d4ff', '#020024']}
          start={{x: 1, y: 0}}
          end={{x: 0, y: 1}}
          style={{flex: 1}}>
          <Title>Pokedex</Title>
          <SGVHOME width={236} height={307} />
        </LinearGradient>
      </Container>
    </>
  );
};
export default Home;
