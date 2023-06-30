import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, useToast } from "@chakra-ui/react";
import { addEvent } from "../services/eventsData";

const EventForm = () => {
    const toast = useToast();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const eventData = { title, description };
            await addEvent(eventData);
            toast({
                title: 'Event added',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
            // Clear form inputs
            setTitle('');
            setDescription('');
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to add event',
                status: 'error',
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} />
                </FormControl>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </FormControl>
                {/* Other form fields */}
                <Button type="submit">Submit</Button>
            </form>
        </Box>
    );
};

export default EventForm;
