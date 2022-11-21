import { React } from "react";
import { Form, Button } from "react-bootstrap";

export function Login() {
  return (
    <main className="App bg-neutral-800 w-screen h-screen flex items-center justify-center">
      <Form className="bg-white w-full h-full md:w-4/5 lg:w-2/5 md:h-fit px-8 rounded-lg flex align-center flex-col">
        <div className="flex h-fit justify-center py-4">
          <img className="w-16 mx-3" src="/logo.svg" alt="logo" />
          <h1 className="text-3xl">melo</h1>
        </div>
        <h1 className="text-3xl text font-bold text-purple">Sign In</h1>
        <Form.Group className="text-left pt-2 pb-4">
          <Form.Label>Username</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="text-left pt-2 pb-4">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button
          className="!text-lg text-white !bg-purple hover:!bg-purple-dark !border-none"
          type="submit"
        >
          Log In
        </Button>

        <h4 className="text-gray-600 py-3">or</h4>

        <div className="flex flex-col md:flex-row justify-around pb-8">
          {/* TODO add logos */}
          <Button
            className="!border-purple hover:!bg-purple !text-gray-600 hover:!text-white"
            variant="outline-primary"
          >
            Log In with Facebook
          </Button>
          <Button
            className="!border-purple hover:!bg-purple !text-gray-600 hover:!text-white"
            variant="outline-primary"
          >
            Log In with Google
          </Button>
        </div>
      </Form>
    </main>
  );
}
