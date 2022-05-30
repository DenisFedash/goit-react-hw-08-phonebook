import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Section } from './Section/Section';
import { Loader } from './Loader/Loader';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import AppBar from './AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from 'redux/auth/authSelectors';
import HomePage from 'pages/HomePage/HomePage';
import { Route, Routes } from 'react-router-dom';

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
            <Route
              path="/"
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />

            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
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
                <PrivateRoute redirectTo="contacts/create">
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
          </Routes>
        </Suspense>
        <Toaster />
      </Section>
      {/* <Footer /> */}
    </>
  );
}
