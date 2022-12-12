import { React } from "react";
import { Form, Button, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import facebook from "../assets/facebook.png";
import google from "../assets/googleIcon.svg";

export function Login() {
  const navigate = useNavigate();

  const checkLogin = (e) => {
    e.preventDefault();
    console.log("checking cookie");
    const loginInfo = {};
    const formData = new FormData(e.target);
    for (var [key, value] of formData.entries()) {
      loginInfo[key] = value;
    }
    const matchUser = localStorage.getItem(loginInfo.username);
    if (matchUser !== null) {
      try {
        const parsed = JSON.parse(matchUser);
        if (parsed.password === loginInfo.password) {
          localStorage.setItem("currentUser", matchUser);
          navigate("/");
        } else {
          window.alert("Incorrect Password");
          e.target.reset();
        }
      } catch (error) {
        console.log(error, "e");
      }
    } else {
      window.alert("No User Found with this Name");
      e.target.reset();
    }

    return false;
  };
  return (
    <main className="App bg-neutral-800 w-screen h-screen flex items-center justify-center">
      <Form
        onSubmit={checkLogin}
        className="bg-white w-full h-full md:w-4/5 lg:w-2/5 md:h-fit py-4 px-8 rounded-lg flex align-center flex-col space-y-6"
      >
        <div className="flex h-fit justify-center">
          <img className="w-16 mx-3" src="/logo.svg" alt="logo" />
          <h1 className="text-3xl">melo</h1>
        </div>
        <h1 className="text-3xl font-bold text-purple text-center">Sign In</h1>
        <Form.Group className="text-left">
          <Form.Label>Username</Form.Label>
          <Form.Control name="username" type="text" placeholder="Username" />
        </Form.Group>

        <Form.Group className="text-left">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <div>
          <Button
            className="!text-lg text-white !bg-purple hover:!bg-purple-dark !border-none mt-8 w-full"
            type="submit"
          >
            Log In
          </Button>
          <Link to="/signup">Create Account</Link>
        </div>

        <h4 className="text-gray-600 text-center">or</h4>

        <div className="flex flex-col md:flex-row justify-between">
          <Button
            className="!border-purple hover:!bg-purple !text-gray-600 hover:!text-white my-2 md:w-2/5 !flex flex-row"
            variant="outline-primary"
          >
            <Image src={facebook} className="w-5 h-auto mr-1" />
            Log In with Facebook
          </Button>
          <Button
            className="!border-purple hover:!bg-purple !text-gray-600 hover:!text-white my-2 md:w-2/5 !flex flex-row"
            variant="outline-primary"
          >
            <Image src={google} className="w-5 h-auto mr-1" />
            Log In with Google
          </Button>
        </div>
      </Form>
    </main>
  );
}
