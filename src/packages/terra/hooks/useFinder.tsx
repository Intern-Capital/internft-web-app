import { TERRA_FINDER } from '../constants';
import { useTerraWebapp } from '../context';

const useFinder = (param: string, path = 'account') => {
  const { network } = useTerraWebapp();

  return `${TERRA_FINDER}/${network.chainID}/${path}/${param}`;
};

export default useFinder;
