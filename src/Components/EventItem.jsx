import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
    return (
        <Box borderWidth="1px" borderRadius="md" padding="4">
            <Link to={`/events/${event.id}`}>
                <Text>{event.title}</Text>
                <Text>{event.description}</Text>
                <Text>{event.startTime}</Text>
                <Text>{event.endTime}</Text>
                <Text>{event.categories.join(', ')}</Text>
            </Link>
        </Box>
    );
};

export default EventItem;
