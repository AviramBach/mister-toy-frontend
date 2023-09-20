// import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

import { ToyPreview } from "./ToyPreview.jsx"

export function ToyList({ toys, onRemoveToy, onEditToy }) {

    return (
        <ul className="toy-list">
            {toys.map(toy =>
                <li className="toy-preview" key={toy._id}>
                    <ToyPreview toy={toy} />
                    <div>
                        <button onClick={() => onRemoveToy(toy._id)}>x</button>
                        {/* <button onClick={() => onEditToy(toy)}>Edit</button> */}
                        <button><Link to={`/toy/edit/${toy._id}`}>Edit</Link></button>
                    </div>
                </li>
            )}
        </ul>
    )
}


// ToyList.propTypes = {
//     txt(props, propName, cmpName) {
//         // console.log('props:', props)
//         // console.log('propName:', propName)
//         // console.log('cmpName:', cmpName)
//         if (typeof props.txt !== 'string') {
//             return new Error('Not a string')
//         }
//     },
//     nums: PropTypes.arrayOf(PropTypes.number),
//     toys: PropTypes.arrayOf(PropTypes.shape({
//         vendor: PropTypes.string,
//         price: PropTypes.number,
//         speed: PropTypes.number,
//     })),
// }