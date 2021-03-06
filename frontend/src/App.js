import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';
import {BrowserRouter as Router,  Route } from 'react-router-dom';
import Footer from './Component/Footer';
import Header from './Component/Header';
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen';
import CartScreen from './Screen/CartScreen';
// import Student from './Component/Student';

function App() {
  return (
    <div>
    <Header/>
      <main className = 'py-3'>
      <Container>
        <Router>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/product/:id' component={ProductScreen} />
            <Route exact path='/cart/:id?' component={CartScreen} />
        </Router>
      </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
