import {Image} from 'react-native';
import {Container, Title} from './styles';

const Details = ({route}: any) => {
  const {itemTitle, itemImage} = route.params;
  return (
    <Container>
      <Title>{itemTitle}</Title>
      <Image
        source={{
          uri: itemImage,
        }}
        style={{width: 140, height: 140}}
      />
    </Container>
  );
};

export default Details;
