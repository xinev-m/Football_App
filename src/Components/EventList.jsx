import EventItem from "./EventItem";
import React from "react";

const EventList = ({ events }) => {
    return (
        <div>
            {events.map((event) => (
                <EventItem key={event.id} event={event} />
            ))}
        </div>
    );
};

export default EventList;
