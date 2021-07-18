import React, { ReactElement, useEffect, useRef } from 'react';
import { Entry, FrameworkConfiguration, loadMicroApp } from 'qiankun';
import { nanoid } from 'nanoid';

type QKMicroAppRenderProps = {
  app: { name?: string; entry: Entry; props?: Record<string, unknown> };
  configuration?: FrameworkConfiguration;
};

const QKMicroAppRender = ({ app, configuration }: QKMicroAppRenderProps): ReactElement => {
  const containerRef = useRef();
  const appRef = useRef(null);

  useEffect(() => {
    const { name = nanoid(), ...others } = app;
    appRef.current = loadMicroApp(
      {
        name,
        ...others,
        container: containerRef.current,
      },
      configuration
    );

    const { entry = '' } = app;
    if (typeof entry === 'string') {
      const hashIndex = entry.indexOf('#');
      if (hashIndex > -1) {
        const hash = entry.slice(hashIndex + 1);
        if (location.hash != hash) {
          location.hash = hash;
        }
      }
    }

    return () => {
      appRef.current.unmount();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={containerRef}></div>;
};

export default QKMicroAppRender;
