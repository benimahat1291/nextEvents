import EventItem from "./EventItem"
import styles from "./Events.module.css"

const EventList = (props) => {
    const { items } = props;
    return (
        <ul className={styles.list}>
            {items.map((event) => (
                <EventItem
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image} />
            ))}
        </ul>
    )
}

export default EventList