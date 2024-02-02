import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// COMPONENT IMPORTS
import { Main } from 'pages/Main';
import { Error404 } from 'pages/Error404/Error404';
import { About } from 'pages/About/';
const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <div className='App'>
                <HelmetProvider>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Page title</title>
                        <link rel="canonical" href="http://mysite.com/example" />
                    </Helmet>
                    <Router>
                        <Routes>
                            <Route
                                path='/'
                                element={<Main />}
                            />
                            <Route
                                path='/:id'
                                element={<About />}
                            />
                            {/* COMPONENT ROUTES */}
                            <Route path='*' element={<Error404 />} />
                        </Routes>
                    </Router>
                </HelmetProvider>
            </div>
        </QueryClientProvider>
    );
};

export default App;