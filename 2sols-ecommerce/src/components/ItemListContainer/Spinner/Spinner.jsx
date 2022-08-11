import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function Spinners() {
  return (
    <>
      <Button variant="dark" disabled>
        <Spinner
          as="span"
          animation="border"
          size="m"
          role="status"
          aria-hidden="true"
          time="5s"
        />
        <span className="visually-hidden">Loading...</span>
      </Button>{' '}
      <Button variant="dark" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="m"
          role="status"
          aria-hidden="true"
          time="5s"
        />
        Loading...
      </Button>
    </>
  );
}

export default Spinners;