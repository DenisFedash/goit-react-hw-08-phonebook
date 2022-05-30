import { Suspense, lazy, useEffect } from 'react';
// import { Title } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { Section } from './Section/Section';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
// import UserMenu from './UserMenu/UserMenu';
import AppBar from './AppBar/AppBar';
import Footer from './Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from 'redux/auth/authSelectors';

const Layout = lazy(() => import('../pages/Layout'));
const ContactPage = lazy(() => import('../pages/ContacPage'));
const Form = lazy(() => import('../pages/Form'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export default function APP() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  useEffect(() => {
    dispatch(authOperations.getRefreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <AppBar />
      <Section>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/login" />} />
              <Route
                path="login/*"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="register/"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="list/*"
                element={
                  <PrivateRoute redirectTo="/list">
                    <ContactPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="create"
                element={
                  <PrivateRoute redirectTo="/create">
                    <Form />
                  </PrivateRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PublicRoute>
                    <PageNotFound />
                  </PublicRoute>
                }
              />
            </Route>
          </Routes>
        </Suspense>
        <Toaster />
      </Section>
      <Footer />
    </>
  );
}
