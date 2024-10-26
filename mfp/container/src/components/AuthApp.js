import React, { useEffect, useRef } from 'react';
import { marketingMount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

export default function AuthApp() {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = marketingMount(ref.current, {
      onNavigate: (location) => {
        const { pathName } = history.location;

        const { pathname: nextPathName } = location;

        if (pathName !== nextPathName) {
          history.push(nextPathName);
        }
      },
      initialPath: history.location.pathName,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
}
