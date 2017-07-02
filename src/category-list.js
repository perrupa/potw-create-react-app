import React, { Component } from 'react'
import { database } from './firebase'

class CategoryList extends Component {

  state = { 
    categories: []
  }

  componentDidMount() {
    const categories = database.ref('/categories')
                               .limitToLast(20)
    categories.on('value', snapshot => {
      this.setState({
        categories: snapshot.val()
      })
    })
  }

  renderListItems(categories) {
    return categories.map((category, index) => (
      <li key={index}>
        {category}
      </li>
    ))
  }

  render() {
    const { categories } = this.state

    return (
      <ul>
        {this.renderListItems(categories)}
      </ul>
    )
  }

}

export default CategoryList
