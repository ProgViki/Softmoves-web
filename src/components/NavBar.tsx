import Account from "./Account";
import Bell from "../assets/bell.svg"


export default function NavBar() {
    return(
        <div className="w-full flex  justify-end space-x-[32px]">
            <img src={Bell} alt="Notification"/>
            <Account user={"VS"} name={"Viki Stringz"}/>
        </div>
    )
}

