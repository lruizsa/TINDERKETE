import React, { useEffect, useState } from "react";
import Nav from "./Navbar.js";
import Footer from "./Footer.js";
import { useNavigate } from "react-router-dom";

const ErabiltzaileakAdmin = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/getUser");
                if (!response.ok) {
                    throw new Error("Errorea");
                }
                const result = await response.json();
                setUsers(result.data || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleEdit = (id) => {
        navigate(`/erabiltzaileakEditatu/${id}`);
    };

    if (loading) {
        return <p>Loading users...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <Nav />
            <h1>Erabiltzaileak</h1>
            <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th></th>
                        <th>ID</th>
                        <th>Izena</th>
                        <th>Abizena</th>
                        <th>Email</th>
                        <th>Argazkia</th>
                        <th>Herria</th>
                        <th>Telefonoa</th>
                        <th>Jaiotze data</th>
                        <th>Admin</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr>
                            <td colSpan="11" style={{ textAlign: "center" }}>
                                No users found.
                            </td>
                        </tr>
                    ) : (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <button onClick={() => handleEdit(user.id)}>
                                        Edit
                                    </button>
                                </td>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.surname}</td>
                                <td>{user.email}</td>
                                <td>{user.image}</td>
                                <td>{user.hometown}</td>
                                <td>{user.telephone}</td>
                                <td>{user.birth_date}</td>
                                <td>{user.admin}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
            <Footer />
        </div>
    );
};

export default ErabiltzaileakAdmin;
