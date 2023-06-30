import EventForm from "./Components/EventForm";
import EventPage from "./Pages/EventPage";
import EventsPage from "./Pages/EventsPage";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const HomePage = () => {
  // Render the desired component for the root URL ("/")
  return <EventsPage />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/add" element={<EventForm />} />
        <Route path="/events/:id" element={<EventPage />} />
      </Routes>
    </Router>
  );
};

export default App;
