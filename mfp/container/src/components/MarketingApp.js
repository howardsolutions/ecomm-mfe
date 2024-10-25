import React, { useEffect, useRef } from 'react';
import { marketingMount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

export default function MarketingApp() {
  const ref = useRef(null);

  const history = useHistory();

  useEffect(() => {
    marketingMount(ref.current, {
      onNavigate: (location) => {
        const { pathName } = history.location;

        const { pathname: nextPathName } = location;

        if (pathName !== nextPathName) {
          history.push(nextPathName);
        }
      },
    });
  }, []);

  return <div ref={ref}></div>;
}
