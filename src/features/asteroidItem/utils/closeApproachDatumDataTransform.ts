import { CloseApproachDatum } from '../types/FetchAsteroidItemResponse';
import { CloseApproachDatumTransformed } from '../types/common';
import { getUUID } from '~/utils/getUUID';

export function closeApproachDatumDataTransform(
  data: CloseApproachDatum[],
): CloseApproachDatumTransformed[] {
  return data.map((item) => ({ ...item, id: getUUID() }));
}
