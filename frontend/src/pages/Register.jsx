import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const RegisterUser = async (e) => {
    e.preventDefault();

    // Check if passwords match before sending to the backend
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post("http://localhost:8000/api/user/", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      });
      console.log(response);
      alert("Registered Successfully!!");
      navigate("/login");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message); // Shows the error message from the backend
      } else {
        alert("Failed to register");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={RegisterUser} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name:</label>
            <input
              type="text"
              placeholder="Your first name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name:</label>
            <input
              type="text"
              placeholder="Your last name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email:</label>
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password:</label>
            <input
              type="password"
              placeholder="Your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md green:bg-blue-600 transition"
          >
            Register
          </button>
          <p className="text-center text-sm text-gray-600">
            Have an account?
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;


//What’s Changed?
// Added Tailwind Classes:

// Wrapper: flex items-center justify-center min-h-screen bg-gray-100 centers the form in the middle of the screen.
// Form Container: bg-white p-8 rounded shadow-lg styles the form card with padding, rounded corners, and a shadow.
// Inputs: w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 adds consistent input styles with focus effects.
// Button: bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 gives the button a primary color with hover effects.
// Responsive Design:

// The form adjusts for different screen sizes with the max-w-md class, ensuring it doesn't grow too large on wide screens.
// Better Spacing:

// The space-y-4 class adds consistent vertical spacing between form fields.