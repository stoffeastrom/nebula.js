import { useEffect, useState } from './hooks';

const usePrev = value => {
  const ref = useState(() => ({
    current: [],
  }));
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useEffectDebug = (cb, deps, prefixLog = '') => {
  const prevDeps = usePrev(deps);

  const depsChanged = deps.reduce((acc, dep, ix) => {
    if (dep !== ((prevDeps && prevDeps[ix]) || ix)) {
      return {
        ...acc,
        [ix]: {
          prev: prevDeps && prevDeps[ix],
          next: dep,
        },
      };
    }
    return acc;
  }, {});

  if (Object.keys(depsChanged).length) {
    console.info(`${prefixLog}[sn-use-effect-debug]`, depsChanged); // eslint-disable-line
  }

  useEffect(cb, deps);
};

// useMemo etz

// eslint-disable-next-line import/prefer-default-export
export { useEffectDebug };
