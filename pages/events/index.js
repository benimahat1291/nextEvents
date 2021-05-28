import {getAllEvents} from "../../dummydata"
import EventList from "../../components/events/EventList"
import EventsSearch from "../../components/events/EventsSearch";
import { Fragment } from "react";
import {useRouter} from "next/router"

const AllEvents = () => {
    const router = useRouter();
    const events = getAllEvents();

    const findEvents = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }
    return (
        <Fragment>
            <EventsSearch onSearch={findEvents}/>
            <EventList items={events}/>
        </Fragment>
    )
}

export default AllEvents
