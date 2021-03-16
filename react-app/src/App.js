import { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu'
import ProductList from './components/ProductList/ProductList'
import routes from './routes'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          {/* <ProductList /> */}
          {this.showContentMenus(routes)}
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null
    result = routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      )
    })
    return <Switch>{result}</Switch>
  }
}

export default App;
