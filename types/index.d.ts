import { ReactNode } from 'react';
import { AppMetadata, FrameworkConfiguration } from 'qiankun';
declare type QKMicroAppRenderProps = {
    app: AppMetadata & {
        [p: string]: unknown;
    };
    configuration?: FrameworkConfiguration;
};
declare const QKMicroAppRender: ({ app, configuration }: QKMicroAppRenderProps) => ReactNode;
export default QKMicroAppRender;
