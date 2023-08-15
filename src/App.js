import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from 'react-bootstrap';
import { useForm }  from "react-hook-form";
import { useState }  from "react-hook-form";


function App() {
  const {regester,handleSubmit } = useForm();
  const [ data, setData] = useState();
  return (
    <Container>
      <h4>React Hook Form</h4>
      <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <Form.Group className="mb-3"> 
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          {...regester("email")}
           type="email" 
           placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3"> 
          <Form.Label>Password</Form.Label>
          <Form.Control 
          {...regester("password")} 
          type="password" 
          placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mb-3"> 
          <Form.Label>ประเภทสมาชิก</Form.Label>
          <Form.Select {...regester("userType")}>
            <option value="1" selected>
            ทั่วไป
            </option>
            <option value="2">VIP</option>
            <option value="3">ผู้ดูแลระบบ</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check 
          {...regester("Remember")} 
          type="checkbox" 
          label="Remember me" />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default App;
 