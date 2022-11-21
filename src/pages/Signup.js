import { React } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Signup() {
  return (
    <main className="App bg-neutral-800 w-screen h-screen flex items-center justify-center md:p-8">
      <Form className="bg-white w-full h-full md:w-4/5 lg:w-2/5 md:h-fit py-4 px-8 rounded-lg flex flex-col max-h-full overflow-scroll space-y-2">
        <div className="flex h-fit justify-center">
          <img className="w-12 mx-3" src="/logo.svg" alt="logo" />
          <h1 className="text-3xl">melo</h1>
        </div>

        <h1 className="text-xl text-left text-purple font-semibold pt-2">
          Account Information
        </h1>
        <Form.Group className="text-left">
          <Form.Label>
            Username
            <span className="text-red-600">*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="text-left">
          <Form.Label>
            Password
            <span className="text-red-600">*</span>
          </Form.Label>
          <Form.Control type="text" placeholder="Password" />
        </Form.Group>

        <h1 className="text-xl text-left text-purple font-semibold pt-2">
          Personal Information
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <Form.Group className="text-left">
            <Form.Label>
              Name
              <span className="text-red-600">*</span>
            </Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group className="text-left">
            <Form.Label>
              Surname
              <span className="text-red-600">*</span>
            </Form.Label>
            <Form.Control type="text" placeholder="Surname" />
          </Form.Group>
        </div>

        <Form.Group className="text-left">
          <Form.Label>
            Email
            <span className="text-red-600">*</span>
          </Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <div className="flex flex-col md:flex-row justify-between">
          <Form.Group className="text-left">
            <Form.Label>
              Date of Birth
              <span className="text-red-600">*</span>
            </Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group className="text-left">
            <Form.Label>
              Profile Image
              <span className="text-gray-600">(optional)</span>
            </Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>
        </div>

        <Form.Check className="text-left" type={"checkbox"}>
          <Form.Check.Input type={"checkbox"} />
          <Form.Check.Label>
            {"I have read the "}
            <Link className="text-gray-600" to="/">
              Terms & Conditions
            </Link>
          </Form.Check.Label>
        </Form.Check>

        <div className="flex flex-col md:flex-row justify-between pt-4">
          <Button
            className="my-2 md:w-2/5"
            variant="outline-danger"
            type="reset"
          >
            Delete
          </Button>
          <Button
            className="my-2 !text-lg text-white !bg-purple hover:!bg-purple-dark !border-none md:w-2/5"
            type="submit"
          >
            Save
          </Button>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          {/* TODO add logos */}
          <Link className="text-gray-600">Register with Facebook</Link>
          <Link className="text-gray-600">Register with Google</Link>
        </div>
      </Form>
    </main>
  );
}
