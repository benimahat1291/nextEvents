import {getAllEvents} from "../../dummydata"
import EventList from "../../components/events/EventList"
import EventsSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";
const AllEvents = () => {
    const events = getAllEvents();
    return (
        <Fragment>
            <EventsSearch/>
            <EventList items={events}/>
        </Fragment>
    )
}

export default AllEvents
