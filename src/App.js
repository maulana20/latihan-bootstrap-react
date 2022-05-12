import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './content/css/style.css';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import './components/i18n';
import AppNavbar from "./components/navbar";
import AppHeader from "./components/header";
import AppRoutes from "./components/routes";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggle: false
    }
    this.parentHandleToggle = this.parentHandleToggle.bind(this);
  }
  
  parentHandleToggle(event) {
    this.setState({ isToggle: !this.state.isToggle });
  };
  
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className={ this.state.isToggle ? 'sidebar--toggled' : '' }>
            <AppNavbar handleToggle={this.parentHandleToggle} />
            <main className="main-content">
                <AppHeader />
                <AppRoutes />
            </main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
