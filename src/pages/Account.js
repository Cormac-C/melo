import { React, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Account() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    try {
      if (localStorage.getItem("currentUser")) {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        setName(user.name);
        setSurname(user.surname);
        setEmail(user.email);
        setDob(user.dob);
        setProfilePic(user.profilePic);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const navigate = useNavigate();

  function encodeImage(userCookie, file) {
    var reader = new FileReader();
    reader.onloadend = function () {
      userCookie["profilePic"] = reader.result.length > 5 ? reader.result : "";
      localStorage.setItem(userCookie.username, JSON.stringify(userCookie));
      localStorage.setItem("currentUser", JSON.stringify(userCookie));
    };
    reader.readAsDataURL(file);
  }

  const editAccount = (e) => {
    e.preventDefault();
    const userCookie = {};
    const formData = new FormData(e.target);
    for (var [key, value] of formData.entries()) {
      if (key === "profilePic") {
        userCookie[key] = encodeImage(userCookie, value);
      } else {
        userCookie[key] = value;
      }
    }
    localStorage.setItem(userCookie.username, JSON.stringify(userCookie));
    localStorage.setItem("currentUser", JSON.stringify(userCookie));
    navigate("/");
  };

  return (
    <main className="App bg-neutral-800 w-screen h-screen flex items-center justify-center md:p-8">
      <Form
        onSubmit={editAccount}
        className="bg-white w-full h-full md:w-4/5 lg:w-2/5 md:h-fit py-4 px-8 rounded-lg flex flex-col max-h-full overflow-scroll space-y-2"
      >
        <div className="flex h-fit justify-center">
          <h1 className="text-3xl">Account</h1>
          <img className="w-12 mx-3" src="/logo.svg" alt="logo" />
          <h1 className="text-3xl">melo</h1>
        </div>

        <h1 className="text-xl text-left text-purple font-semibold pt-2">
          Personal Information
        </h1>
        <div className="flex flex-col md:flex-row justify-between">
          <Form.Group className="text-left">
            <Form.Label>
              Name
              <span className="text-red-600">*</span>
            </Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              defaultValue={name}
              required
            />
          </Form.Group>

          <Form.Group className="text-left">
            <Form.Label>
              Surname
              <span className="text-red-600">*</span>
            </Form.Label>
            <Form.Control
              name="surname"
              type="text"
              placeholder="Surname"
              defaultValue={surname}
              required
            />
          </Form.Group>
        </div>

        <Form.Group className="text-left">
          <Form.Label>
            Email
            <span className="text-red-600">*</span>
          </Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Email"
            defaultValue={email}
            required
          />
        </Form.Group>

        <div className="flex flex-col md:flex-row justify-between">
          <Form.Group className="text-left">
            <Form.Label>
              Date of Birth
              <span className="text-red-600">*</span>
            </Form.Label>
            <Form.Control name="dob" type="date" defaultValue={dob} required />
          </Form.Group>

          <Form.Group className="text-left">
            <Form.Label>
              Profile Image
              <span className="text-gray-600">(optional)</span>
            </Form.Label>
            <Form.Control
              name="profilePic"
              type="file"
              size="sm"
              accept="image/png, image/jpeg, image/jpg"
              defaultValue={profilePic}
            />
          </Form.Group>
        </div>

        <div className="flex flex-col md:flex-row justify-between pt-4">
          <Button
            className="my-2 md:w-2/5"
            variant="outline-danger"
            onClick={() => navigate(-1)}
            type="reset"
          >
            Cancel
          </Button>
          <Button
            className="my-2 !text-lg text-white !bg-purple hover:!bg-purple-dark !border-none md:w-2/5"
            type="submit"
          >
            Save
          </Button>
        </div>
      </Form>
    </main>
  );
}
