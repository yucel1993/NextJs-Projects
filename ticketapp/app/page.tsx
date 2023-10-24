import React from "react";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch tickets - HTTP status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error loading tickets: ", error);
    throw error; // Re-throw the error to handle it elsewhere if needed
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();
  console.log(tickets);
  return (
    <div className="p-5">
      <div className="lg:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
