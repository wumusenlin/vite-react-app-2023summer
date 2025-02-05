import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { globalRouters } from '@/router';
import { ConfigProvider } from 'antd';
import { store } from '@/store';
import { Provider } from 'react-redux';
// 引入Ant Design中文语言包
import zhCN from 'antd/locale/zh_CN';
// 全局样式
import '@/common/styles/global.css';
import '@/common/styles/reset.css';
import '@/mock/mock';
import swrConfig from './config/swrConfig';
import { SWRConfig } from 'swr';
import ThemeProvider from '@/components/ConfigProvider/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <ThemeProvider>
        <SWRConfig value={swrConfig.globalRouters}>
          <RouterProvider router={globalRouters} />
        </SWRConfig>
      </ThemeProvider>
    </ConfigProvider>
  </Provider>,
);
