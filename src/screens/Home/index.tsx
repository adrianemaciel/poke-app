import {Container, SvgContainer, Title} from './styles';
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
          <Title>Os Super Poderosos POKÉMONS</Title>
          <SvgContainer>
            <SGVHOME />
          </SvgContainer>
        </LinearGradient>
      </Container>
    </>
  );
};
export default Home;
