import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home';
import Plants from './components/Plants/Plants';
import ViewAllPlants from './components/Plants/ViewAllPlants/ViewAllPlants';
import Login from './components/Login/Login';
import LogOut from './components/Login/LogOut'
import ViewSpecificPlant from './components/Plants/ViewSpecificPlant/ViewSpecificOrder';
import EditSpecificPlant from './components/Plants/EditSpecificPlant/EditSpecificPlant';
import SearchPlant from './components/Plants/SearchPlant/SearchPlant';
import PlantSearchResult from './components/Plants/PlantSearchResult/PlantSearchResult';
import AddPlant from './components/Plants/AddPlant/AddPlant';
import Orders from './components/Orders/Orders';
import ViewAllOrders from './components/Orders/ViewAllOrders';
import ViewSpecificOrder from './components/Orders/ViewSpecificOrder/ViewSpecificOrder';
import EditSpecificOrder from './components/Orders/EditSpecificOrder/EditSpecificOrder';
import SearchOrder from './components/Orders/SearchOrder/SearchOrder';
import OrderSearchResult from './components/Orders/OrderSearchResult/OrderSearchResult';
import AddOrder from './components/Orders/AddOrder/AddOrder';
import AddOrderItem from './components/Orders/AddOrderItem/AddOrderItem';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route path='/plants' exact component={Plants} />
          <Route path='/plants/all' exact component={ViewAllPlants} />
          <Route path='/plants/view/:id' exact component={ViewSpecificPlant} />
          <Route path="/plants/edit/:id" exact component={EditSpecificPlant} />
          <Route path='/plants/search' exact component={SearchPlant} />
          <Route path="/plants/search/:term" exact component={PlantSearchResult} />
          <Route path="/plants/new" exact component={AddPlant} />

          <Route path='/orders' exact component={Orders} />
          <Route path='/orders/all' exact component={ViewAllOrders} />
          <Route path='/orders/view/:id' exact component={ViewSpecificOrder} />
          <Route path='/orders/edit/:id' exact component={EditSpecificOrder} />
          <Route path='/orders/search' exact component={SearchOrder} />
          <Route path="/orders/search/:term" exact component={OrderSearchResult} />
          <Route path='/orders/new' exact component={AddOrder} />
          <Route path='/orders/edit/additem/:id' exact component={AddOrderItem}/>

          <Route path='/login' exact component={Login} />
          <Route path='/logout' exact component={LogOut} />

          <Route path='/' component={Home} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
