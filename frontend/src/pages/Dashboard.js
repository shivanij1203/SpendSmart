import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/expenses/", {
      headers: { Authorization: `Token ${localStorage.getItem("token")}` }
    }).then(res => setExpenses(res.data));
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Expense Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Expenses List</h2>
          <ul>
            {expenses.map((e, i) => (
              <li key={i} className="border-b py-2 flex justify-between">
                <span>{e.category}</span>
                <span>₹{e.amount}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Expense Breakdown</h2>
          <PieChart width={300} height={300}>
            <Pie data={expenses} dataKey="amount" nameKey="category" outerRadius={100} fill="#8884d8" label>
              {expenses.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>
    </div>
  );
}
