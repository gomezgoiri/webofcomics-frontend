import React from 'react'

import Sider from './components/Sider'
import Header from './components/Header'
import Footer from './components/Footer'

import { Layout } from 'antd'

const Page = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <Sider />
      <Layout>
        <Layout.Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            { children }
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    </Layout>
  </Layout>
)


export default Page
