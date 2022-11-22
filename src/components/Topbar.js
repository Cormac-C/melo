import React from "react";
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

export function Topbar() {
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
          <Button className="!bg-zinc-800 !rounded-full !border-white !p-1.5 mx-2">
            <MdOutlineChevronLeft />
          </Button>
          <Button className="!bg-zinc-800 !rounded-full !border-white !p-1.5 mx-2">
            <MdOutlineChevronRight />
          </Button>
          <Form className="d-flex !text-gray-500">
            <MdSearch className="absolute text-xl m-2" />
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 !px-9 !rounded-full !bg-zinc-800 !border-none !text-white"
              aria-label="Search"
            />
          </Form>
          <NavDropdown
            title="Name Here"
            id="navbarScrollingDropdown"
            className="!text-white !bg-zinc-800 !rounded-full p-1"
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
