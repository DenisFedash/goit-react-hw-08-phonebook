import { Suspense, lazy } from 'react';
import { Title } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { Section } from './Section/Section';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from './Loader/Loader';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import UserMenu from './UserMenu/UserMenu';
import AppBar from './AppBar/AppBar';

const Layout = lazy(() => import('../pages/Layout'));
const ContactPage = lazy(() => import('../pages/ContacPage'));
const Form = lazy(() => import('../pages/Form'));
const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));

export default function APP() {
  return (
    <>
      <AppBar />
      <Section>
        <Title>Phonebook</Title>
        {/* <RegisterPage /> */}

        <LoginPage />
        <hr />
        {/* <UserMenu /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/list" />} />
              <Route path="list/*" element={<ContactPage />} />
              <Route path="create" element={<Form />} />
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </Suspense>
        <Toaster />
      </Section>
    </>
  );
}
