import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import RecoveryPassword from '../pages/RecoveryPassword';
import MyAccount from '../pages/MyAccount';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';
import NewPassword from '../pages/NewPassword'
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import CreateAccount from '../pages/CreateAccount';
import SendEmail from '../pages/SendEmail';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/Store" element={<Home />}/>
						<Route path="/login" element={<Login />} />
						<Route path="/recovery-password" element={<RecoveryPassword />} />
						<Route path='/send-email' element={<SendEmail />}/>
						<Route path='/new-password' element={<NewPassword />}/>
						<Route path='/account' element={<MyAccount />}/>
						<Route path='/signup' element={<CreateAccount />}/>
						<Route path='/checkout' element={<Checkout />}/>
						<Route path='/orders' element={<Orders />}/>
						<Route path='*' element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;