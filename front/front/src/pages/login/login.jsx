import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div className="card shadow p-4 bg-light">
				<div className="card-body">
					<h1 className="text-center mb-4">
						<span className="text-primary">Login</span> ChatApp
					</h1>
					<form onSubmit={handleSubmit}>
						<div className="mb-3">
							<label htmlFor="username" className="form-label">
								Username
							</label>
							<input
								type="text"
								id="username"
								className="form-control"
								placeholder="Enter username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>

						<div className="mb-3">
							<label htmlFor="password" className="form-label">
								Password
							</label>
							<input
								type="password"
								id="password"
								className="form-control"
								placeholder="Enter password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div className="mb-3">
							<Link to="/signup" className="text-decoration-none text-primary">
								{"Don't"} have an account?
							</Link>
						</div>

						<div className="d-grid">
							<button
								type="submit"
								className="btn btn-primary btn-block"
								disabled={loading}
							>
								{loading ? (
									<span
										className="spinner-border spinner-border-sm"
										role="status"
										aria-hidden="true"
									></span>
								) : (
									"Login"
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;

//STARTER CODE FOR THIS FILE
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Col, Row, Form, Button } from 'react-bootstrap';

// function Login() {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
//         <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
//           Login to <span className="text-blue-500">ChatApp</span>
//         </h1>

//         <Form>
//           {/* Username Field */}
//           <Form.Group as={Row} className="mb-4" controlId="formUsername">
//             <Form.Label column sm="4" className="text-base font-medium text-gray-600">
//               Username
//             </Form.Label>
//             <Col sm="8">
//               <Form.Control
//                 type="text"
//                 placeholder="Enter username"
//                 className="input input-bordered h-10 mt-2 px-3 text-gray-700"
//               />
//             </Col>
//           </Form.Group>

//           {/* Password Field */}
//           <Form.Group as={Row} className="mb-4" controlId="formPassword">
//             <Form.Label column sm="4" className="text-base font-medium text-gray-600">
//               Password
//             </Form.Label>
//             <Col sm="8">
//               <Form.Control
//                 type="password"
//                 placeholder="Enter Password"
//                 className="input input-bordered h-10 mt-2 px-3 text-gray-700"
//               />
//             </Col>
//           </Form.Group>

//           {/* Forgot Password Link */}
//           <div className="text-center mb-4">
//   <Link to="/signup" className="text-sm text-blue-600 hover:underline">
//     {"Don't"} have an account?
//   </Link>
// </div>

//           {/* Login Button */}
//           <div className="text-center">
//             <Button type="submit" className="btn btn-primary btn-block w-full">
//               Login
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default Login;
