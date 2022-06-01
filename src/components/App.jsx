import { Suspense, lazy, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Loader } from './Loader/Loader';
import AppBar from './AppBar/AppBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import authSelectors from 'redux/auth/authSelectors';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const ContactPage = lazy(() => import('../pages/ContacPage'));
const Form = lazy(() => import('../pages/Form'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export default function APP() {
  const isRefreshing = useSelector(authSelectors.getIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getRefreshUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />

      <Suspense fallback={<Loader />}>
        {!isRefreshing && (
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
                <PublicRoute restricted redirectTo="/list">
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
              path="list"
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />
            <Route
              path="create"
              element={
                <PrivateRoute>
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
        )}
      </Suspense>

      <Toaster />
    </>
  );
}
