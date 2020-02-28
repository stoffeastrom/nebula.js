import { useEffect, useRef } from 'react';

const usePrev = value => {
  const ref = useRef([]);
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
    console.info(`${prefixLog}[use-effect-debug]`, depsChanged); // eslint-disable-line
  }

  useEffect(cb, deps);
};

// useMemo etz

export default useEffectDebug;
