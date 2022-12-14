import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  MdOutlineChevronRight,
  MdOutlineChevronLeft,
  MdSearch,
} from "react-icons/md";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Image } from "react-bootstrap";
import sampleUser from "../assets/sampleUser.png";

export function Topbar() {
  // eslint-disable-next-line
  let [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();

  const onSearch = (event) => {
    const searchQuery = event.target.value;
    setSearchParams({ q: searchQuery });
  };

  const logout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("currentUser");
      navigate("/login");
    }
  };

  const [user, setUser] = useState();

  useEffect(() => {
    try {
      if (localStorage.getItem("currentUser")) {
        const memoryUser = JSON.parse(localStorage.getItem("currentUser"));
        setUser(memoryUser);
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="bg-zinc-900 !text-white"
      expand="md"
    >
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Button
            onClick={() => navigate(-1)}
            className="!hidden md:inline-block !bg-zinc-800 !rounded-full !border-white !p-1.5 mx-2"
          >
            <MdOutlineChevronLeft />
          </Button>
          <Button
            onClick={() => navigate(1)}
            className="!hidden md:inline-block !bg-zinc-800 !rounded-full !border-white !p-1.5 mx-2"
          >
            <MdOutlineChevronRight />
          </Button>
          <Form className="flex !text-gray-500 md:1/3 lg:w-3/4 py-2 md:py-0">
            <MdSearch className="absolute text-xl m-2" />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 !px-9 !rounded-full !bg-zinc-800 !border-purple-light !text-white"
              aria-label="Search"
              onKeyUp={onSearch}
            />
          </Form>
          <div className="!bg-zinc-800 !rounded-full flex flex-row">
            <Image
              src={user && user.profilePic ? user.profilePic : sampleUser}
              className="h-8 m-1"
              roundedCircle={true}
            />
            <NavDropdown
              title={user && `${user.name} ${user.surname}`}
              id="navbarScrollingDropdown"
              className="!text-white flex items-center"
            >
              <NavDropdown.Item onClick={() => navigate("/profile")}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate("/account")}>
                Account
              </NavDropdown.Item>
              <NavDropdown.Item href="#privacy">Privacy</NavDropdown.Item>
              <NavDropdown.Item href="#policies">Policies</NavDropdown.Item>
              <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
