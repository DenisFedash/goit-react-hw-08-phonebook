import { ContactForm } from './ContactForm/ContactForm';
import { Title } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { Section } from './Section/Section';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { ContactPage } from './pages/ContacPage';
export default function APP() {
  return (
    <Section>
      <Title>Phonebook</Title>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/list" />} />
          <Route path="list/*" element={<ContactPage />} />
          <Route path="create" element={<ContactForm />} />
        </Route>
      </Routes>

      <Toaster />
    </Section>
  );
}
