import { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/api/profile/", {
      headers: { Authorization: `Token ${localStorage.getItem("token")}` }
    }).then(res => setUser(res.data));
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
        <p><b>Email:</b> {user.email}</p>
        <button className="mt-4 w-full bg-red-500 text-white py-3 rounded hover:bg-red-600"
          onClick={() => { localStorage.removeItem("token"); window.location.href="/login"; }}>
          Logout
        </button>
      </div>
    </div>
  );
}
