import { Container, Card, Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div className=' py-5'>
      <Container className='d-flex justify-content-center'>
        <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
          <h1 className='text-center mb-4'>Home</h1>
          <p className='text-center mb-4'>
            Study in Germany
          </p>
          <span>See <a href='/courses'>Courses</a></span>
        </Card>
      </Container>
    </div>
  );
};

export default Home;