react 轻松接入qiankun 微前端 

1. 安装 [npm](https://npmjs.org/) / [yarn](https://yarnpkg.com) 安装

```js
npm install simple-react-qiankun
yarn add simple-react-qiankun
```

2. 使用

```js
import React from 'react';
import QKMicroAppRender from 'simple-react-qiankun';

const App = () => {
  return (
    <div>
      <QKMicroAppRender
        app={{
          name: 'micro-pc-demo',
          entry: '//localhost:3002/pc.html#/afr',
        }}
      />
    </div>
  );
};

export default App;
```

3. 类型定义


```js
declare type QKMicroAppRenderProps = {
  app: AppMetadata & {
    [p: string]: unknown;
  };
  configuration?: FrameworkConfiguration;
};

declare const QKMicroAppRender: ({ app, configuration }: QKMicroAppRenderProps) => ReactElement;

```

4. 文档参考 [https://qiankun.umijs.org/zh/api#loadmicroappapp-configuration](https://qiankun.umijs.org/zh/api#loadmicroappapp-configuration)

5. 注意 app参数container不需要，QKMicroAppRender作为container host 资源