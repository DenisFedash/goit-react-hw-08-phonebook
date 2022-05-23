import { ContainerLoader } from 'components/Loader/Loader.styled';
import { Load } from './Loader.styled';

export function Loader() {
  return (
    <ContainerLoader>
      <Load>Loading...</Load>
    </ContainerLoader>
  );
}
