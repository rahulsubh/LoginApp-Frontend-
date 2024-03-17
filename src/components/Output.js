import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";

function Output() {
  // const [message,setMessage] = useState("");
  // const { token } = useParams();

  //   try {
  //     const response = axios.post('http://localhost:8080/api/verify', {
  //       token:token
  //     });
  //     setMessage(response.data);
  //     // toast.success(response.data);
  //   } catch (error) {
  //     setMessage(error.response.data);
  //     // toast.error(error.response.data);
  //   };
  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <h1>Registration Successful!</h1>
            <p>Your account has been successfully created.</p>
            <p>Welcome aboard!</p>
            <Button href="/" variant="primary">
              Go to Login Page
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Output;
