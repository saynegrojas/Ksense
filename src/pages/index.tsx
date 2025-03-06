import { useState } from 'react';
import Form from '../components/Form';
import Header from '../components/ui/Header';
import fetchRequest from '../../utils/fetech_request';
import Container from '../components/ui/Container';

const URL = `${process.env.NEXT_PUBLIC_WEBHOOK_URL}/api/webhook`;

export default function Home() {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    try {
      const response = await fetchRequest({ url: URL, payload: { name }, method: 'POST' });
      const data = response?.data;
      setError(null);
      setResponse(data.name);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setName('');
      setLoading(false);
    }
  };

  if (loading)
    return (
      <Container>
        <Header>
          <h2>Posting Submission...</h2>
        </Header>
      </Container>
    );

  return (
    <Container>
      <Header size='text-3xl' margin='m-[2rem]'>
        <h1>Ksense Code Challenge</h1>
      </Header>
      <Form name={name} setName={setName} error={error} handleSubmit={handleSubmit} />
      {response && <p>{response}</p>}
    </Container>
  );
}
