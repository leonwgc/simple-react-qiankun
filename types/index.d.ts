import { ReactElement } from 'react';
import { Entry, FrameworkConfiguration } from 'qiankun';
declare type QKMicroAppRenderProps = {
    app: {
        name?: string;
        entry: Entry;
        props: Record<string, unknown>;
    };
    configuration?: FrameworkConfiguration;
};
declare const QKMicroAppRender: ({ app, configuration }: QKMicroAppRenderProps) => ReactElement;
export default QKMicroAppRender;
