import {Container, ImageSvg, Title} from './styles';

const image = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz4aL_33v_aU9IrkODvsWxmVCmU_C604Zl2A&usqp=CAU',
};

const Home = () => {
  return (
    <>
      <Container>
        <Title>Pokedex</Title>
        <ImageSvg source={require("../../../assets/images/image-home.png")}></ImageSvg>
      </Container>
    </>
  );
};
export default Home;
