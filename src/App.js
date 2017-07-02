import React, { Component } from 'react'
import Layout from './layout'
import CategoryList from './category-list'

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Layout>
        <CategoryList />
      </Layout>
    )
  }

}

export default App
