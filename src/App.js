import Header from './components/Header';
import Body from './components/Body';
import './App.css';
import { Provider } from 'react-redux';
import store from './utility/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <Maincontainer/>,
      },
      {
        path: "watch",
        element: <WatchPage/>,
      },
    ],
  },
])

function App() {
  return (
    <Provider store={store}>
    <div>
      
      <Header/>
      <RouterProvider router={appRouter}/>
      
      {/**
       * Head
       * Body-> side bar, Menu bar
       * Main container-. button list, video container, video card container
       */}

    </div>
    </Provider>
  );
}

export default App;
