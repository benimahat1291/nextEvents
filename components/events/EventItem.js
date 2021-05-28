
import styles from "./Events.module.css"
import Button from "../ui/button";
import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right";

const EventItem = (props) => {
    const {title, image, date, location, id} = props;

    const formattedDate = new Date(date).toLocaleString('en-US',{
        day: 'numeric',
        month: "long",
        year:"numeric",
    })

    const formattedAdress = location.replace(',', "\n")
    const detailsLink = `/events/${id}`

    return (
        <li className={styles.item}>
            <img src={`/${image}`} alt={title}/>
            <div className={styles.content}>
                <div classname={styles.summary}>
                    <h2>{title}</h2>
                    <div className={styles.date}>
                        <DateIcon/>
                        <time>{formattedDate}</time>
                    </div>
                    <div className={styles.address}>
                        <AddressIcon/>
                        <adress>{formattedAdress}</adress>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button link={detailsLink}>
                        <span>Explore Event</span>
                        <span className={styles.icon}><ArrowRightIcon/></span>
                    </Button>
                </div>
            </div>
        </li>
    )
}

export default EventItem;
