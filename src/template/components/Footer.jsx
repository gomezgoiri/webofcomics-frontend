import React from 'react'
import { Layout, Row, Col } from 'antd'

// Header image source: https://unsplash.com/collections/388096/books?photo=rNNmnC67h7g
const CustomFooter = () => (
  <Layout.Footer>
    <Row type='flex' justify='space-around' align='middle'>
      <Col span={3}><a href='https://github.com/gomezgoiri/webofcomics-frontend'>Github</a></Col>
      <Col span={3}><a href='link2'>Questions and answers</a></Col>
      <Col span={3}>Footer placeholder</Col>
      <Col span={3}><a href='http://gomezgoiri.net'>About the author</a></Col>
    </Row>
  </Layout.Footer>
)

export default CustomFooter
