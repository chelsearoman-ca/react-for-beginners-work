import React from "react"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import StorePicker from "./StorePicker"
import App from "./App"
import NotFound from "./NotFoundnpm "

const Router = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path="/" component={StorePicker}/>
        <Route path="/store/:storeId" component={App}/>
        <Route component={NotFound}/>
    </Switch>
  </BrowserRouter>
)

//tries the first route, then the second and then
//falls back on the 404

export default Router
