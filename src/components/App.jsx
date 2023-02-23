import React from 'react';
import Layout from '../containers/Layout';
import login from '../containers/Login';
import '../styles/global.css';

const App = () => {
    return(
        <Layout>
            <login />
        </Layout>
    );
}

export default App;