import { ResetWindowScroll } from '~/ui/ResetWindowScroll';
import { Spinner } from '~/ui/Spinner';

export default function loading() {
  return (
    <>
      <ResetWindowScroll />
      <Spinner isShow={true} />
      <div>Идет загрузка данных по астероиду...</div>
    </>
  );
}
