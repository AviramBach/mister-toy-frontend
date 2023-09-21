
import { utilService } from "../services/util.service"
import {GoogleMaps} from "../cmps/GoogleMaps.jsx"

export function AboutUs() {

    
    return (
        <section>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quo veniam velit dolor reprehenderit, laudantium consequatur neque numquam labore quae. Accusamus libero perferendis ducimus? Alias unde hic quisquam doloremque.</p>
            
            <p>We have the most amazing toys! Come to visit us!</p>
            <h4> Our flags stores:</h4>
            <GoogleMaps />
        </section>
    )
}



