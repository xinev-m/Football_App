import React, { useEffect, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteEvent, fetchEvent, updateEvent } from "../services/eventsData";

// EventPage.js

const EventPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [event, setEvent] = useState(null);
    const toast = useToast();

    useEffect(() => {
        const getEvent = async () => {
            try {
                const data = await fetchEvent(id);
                setEvent(data);
            } catch (error) {
                console.error(error);
                // Show error message
            }
        };

        getEvent();
    }, [id]);

    const handleDelete = async () => {
        try {
            const confirmed = window.confirm("Are you sure you want to delete this event?");
            if (!confirmed) return;

            await deleteEvent(id);
            toast({
                title: "Event deleted",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            navigate("/");
        } catch (error) {
            console.error(error);
            // Show error message
        }
    };

    return (
        <Box>
            {event ? (
                <>
                    <h2>{event.title}</h2>
                    <p>{event.description}</p>                    <p>{event.startTime}</p>
                    <p>{event.endTime}</p>                <img src={event.creator.image} alt={event.title} />

                    {/* Display other event details */}
                    <Button onClick={handleDelete}>Delete</Button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
};

export default EventPage;
