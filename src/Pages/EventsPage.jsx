import EventList from "../Components/EventList";
import React, { useEffect, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { fetchEvents } from "../services/eventsData";

// EventsPage.js

const EventsPage = () => {
    const [events, setEvents] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredEvents, setFilteredEvents] = useState([]);
    const toast = useToast();

    useEffect(() => {
        const getEvents = async () => {
            const data = await fetchEvents();
            setEvents(data);
            setFilteredEvents(data);
        };

        getEvents();
    }, []);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleFilter = (category) => {
        if (category === "all") {
            setFilteredEvents(events);
        } else {
            const filtered = events.filter((event) =>
                event.categories.includes(category)
            );
            setFilteredEvents(filtered);
        }
    };

    useEffect(() => {
        const search = searchQuery.toLowerCase();
        const filtered = events.filter(
            (event) =>
                event.title.toLowerCase().includes(search) ||
                event.description.toLowerCase().includes(search)
        );
        setFilteredEvents(filtered);
    }, [searchQuery, events]);

    return (
        <Box>
            <Button as={Link} to="/events/add" variant="solid">
                Add Event
            </Button>
            <input
                type="text"
                placeholder="Search events"
                value={searchQuery}
                onChange={handleSearch}
            />
            <Button variant="outline" onClick={() => handleFilter("all")}>
                All
            </Button>
            <Button variant="outline" onClick={() => handleFilter("category1")}>
                Category 1
            </Button>
            <Button variant="outline" onClick={() => handleFilter("category2")}>
                Category 2
            </Button>

            <EventList events={filteredEvents} />
        </Box>
    );
};

export default EventsPage;
