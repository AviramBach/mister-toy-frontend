import React from 'react'

export function ToySort({ sortBy, onSetSort }) {

    function handleSortChange(by) {
        const updatedSort = { ...sortBy, by }
        console.log("sort by:",by)
        console.log("updated sort by:",updatedSort)
        onSetSort(updatedSort)
    }

    function handleToggleDirection() {
        const updatedSort = { ...sortBy, asc: !sortBy.asc }
        console.log("🚀 ~ file: ToySort.jsx:12 ~ handleToggleDirection ~ updatedSort:", updatedSort)
        onSetSort(updatedSort)
    }

    return <section className="toy-sort">
        <h3>Sort toys:</h3>
        <button onClick={() => handleSortChange('name')}>By name</button>
        <button onClick={() => handleSortChange('price')}>By price</button>
        <button onClick={handleToggleDirection}>Change direction {sortBy.asc ? '^' : 'v'}</button>
    </section>
}




// import { useState, useEffect } from "react"

// export function ToySort({ sortBy, onSetSort }) {

//     const [sortByToEdit, setSortByToEdit] = useState({ ...sortBy })

//     useEffect(() => {
//         onSetSort(sortByToEdit)
//     }, [sortByToEdit])

//     function handleChange({ target }) {
//         const field = target.name
//         const value = target.type === 'number' ? +target.value : target.value
//         if (field === 'desc') setSortByToEdit(prevSort => ({
//             ...prevSort,
//             desc: -(prevSort.desc)
//         }))
//         else setSortByToEdit((prevSort) => ({
//             ...prevSort,
//             [field]: value,
//         }))
//     }

//     return (
//         <form className="toy-sort">
//             < select name="type" value={sortByToEdit.type} onChange={handleChange}>
//                 <option value="default">Sort by</option>
//                 <option value="name">name</option>
//                 <option value="price">price</option>
//             </select >
//             <label>
//                 <input
//                     type="checkbox"
//                     name="desc"
//                     checked={sortByToEdit.desc > 0}
//                     onChange={handleChange}
//                 />
//                 Descending
//             </label>
//         </form >
//     )
// }