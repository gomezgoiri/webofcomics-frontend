import React from 'react'

import Header from './components/Header'
import Footer from './components/Footer'

import { Layout } from 'antd'

const SimplePage = ({ children }) => (
  <Layout>
    <Header />
    <Layout>
      <Layout.Content style={{ margin: '0 16px' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          { children }
        </div>
      </Layout.Content>
    </Layout>
    <Footer />
  </Layout>
)


export default SimplePage
