import { Fragment } from "react"
import Nav from "./Nav"

const layout = (props) => {
    return (
        <Fragment>
            <Nav/>
            <main>
                {props.children}
            </main>
        </Fragment>
    )
}

export default layout
