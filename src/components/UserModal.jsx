import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";

let initialState = {
  name: "",
  email: "",
  department: "",
};

const UserModal = ({ isOpen, onClose, onSubmit, user = {} }) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        department: user.department || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
    setFormData(initialState);
  };

  const handleCancle = () => {
    setFormData(initialState);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{user?.id ? "Edit User" : "Add New User"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired mt={4}>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </FormControl>

            <FormControl id="email" isRequired mt={4}>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </FormControl>

            <FormControl id="department" isRequired mt={4}>
              <FormLabel>Department</FormLabel>
              <Select
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="Development">Development</option>
                <option value="Management">Management</option>
                <option value="Operations">Operations</option>
                <option value="Recruitment">Recruitment</option>
              </Select>
            </FormControl>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                {user?.id ? "Save Changes" : "Add User"}
              </Button>
              <Button variant="ghost" onClick={handleCancle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default UserModal;
