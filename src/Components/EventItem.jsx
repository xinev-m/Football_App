import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EventItem = ({ event }) => {
    return (
        <Link to={`/events/${event.id}`}>
            <Box
                borderWidth="1px"
                borderRadius="md"
                p="4"
                mb="4"
                _hover={{ shadow: "md" }}
            >
                <Flex alignItems="center" mb="4">
                    {event.creator && (
                        <Image
                            src={event.creator.image}
                            alt={event.title}
                            boxSize="50px"
                            borderRadius="full"
                            mr="4"
                        />
                    )}
                    <Box>
                        <Text fontSize="xl" fontWeight="bold" mb="2">
                            {event.title}
                        </Text>
                        <Text fontSize="sm" color="gray.500">
                            {event.creator && `Created by ${event.creator.name}`}
                        </Text>
                    </Box>
                </Flex>
                <Text mb="4">{event.description}</Text>
                <Flex justifyContent="space-between">
                    <Text fontSize="sm" color="gray.500">
                        Upcomming match: {event.startTime}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                        End Time: {event.endTime}
                    </Text>
                </Flex>
            </Box>
        </Link>
    );
};

export default EventItem;
