import React, { useEffect, useRef } from 'react';
import { marketingMount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default function MarketingApp() {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = marketingMount(ref.current, {
      onNavigate: (location) => {
        const { pathname } = history.location;

        const { pathname: nextPathName } = location;

        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      initialPath: history.location.pathname,
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
}
