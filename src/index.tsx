import React, { ReactElement, useEffect, useRef } from 'react';
import { AppMetadata, FrameworkConfiguration, loadMicroApp } from 'qiankun';
import { nanoid } from 'nanoid';

type QKMicroAppRenderProps = {
  app: AppMetadata & { name?: string; [p: string]: unknown };
  configuration?: FrameworkConfiguration;
};

const QKMicroAppRender = ({ app, configuration }: QKMicroAppRenderProps): ReactElement => {
  const containerRef = useRef();
  const appRef = useRef(null);

  useEffect(() => {
    const { name = nanoid() } = app;
    appRef.current = loadMicroApp(
      {
        name,
        ...app,
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
