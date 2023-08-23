import { Spinner } from '~/ui/Spinner';

export default function loading() {
  return (
    <>
      <Spinner isShow={true} />
      <div>Идет загрузка данных по астероиду...</div>
    </>
  );
}
