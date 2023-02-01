import { AppStore } from './appContext'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Welcome, About, Home } from './pages'
import { PrivateLayout } from './routes/Layout'

import React from 'react'
import { ErrorBoundary } from './components'
import { AppThemeProvider } from './theme'
import { Provider } from 'react-redux'
import { store } from './interactions/store'

/**
 * Root Application Component
 * @class App
 */
const App = () => {
  return (
    <ErrorBoundary name="App">
      <AppStore>
        <Provider store={store}>
          <AppThemeProvider>
            <BrowserRouter>
              <PrivateLayout>
                <Switch>
                  <Route path="/welcome" component={Welcome}/>
                  <Route path="/about" component={About}/>,
                  <Route exact path="/" component={Home}/>
                </Switch>
              </PrivateLayout>
            </BrowserRouter>
          </AppThemeProvider>
        </Provider>
      </AppStore>
    </ErrorBoundary>
  )
}

export default App
