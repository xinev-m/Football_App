import React, { useEffect, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { deleteEvent, fetchEvent, updateEvent } from "../services/eventsData";

// EventPage.js

const EventPage = () => {
    const { id } = useParams();
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
            // Perform any necessary actions after deleting the event
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
                    <p>{event.description}</p>
                    {/* Display other event details */}
                    <Button>Edit</Button>
                    <Button onClick={handleDelete}>Delete</Button>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
};

export default EventPage;
