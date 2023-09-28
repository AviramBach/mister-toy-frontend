// import logoUrl from '../assets/img/logo.png'

import { useDispatch, useSelector } from "react-redux"


export function HomePage() {
    // const dispatch = useDispatch()
    // const count = useSelector(storeState => storeState.userModule.count)


    return (
        <section className="welcome-messege">
           <h1>Welcome to Mister Toy</h1> 
           <h2>The place where toys R' U!</h2>
        </section >
    )
}