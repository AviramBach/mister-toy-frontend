
import { useDispatch, useSelector } from 'react-redux'
import { ToyFilter } from '../cmps/ToyFilter.jsx'
import { ToyList } from '../cmps/ToyList.jsx'
import { ToySort } from '../cmps/ToySort.jsx'

import { toyService } from '../services/toy.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'
import { loadToys, removeToy, removeToyOptimistic, saveToy } from '../store/actions/toy.actions.js'
import { SET_FILTER_BY } from '../store/reducers/toy.reducer.js'
import { useEffect, useState } from 'react'

export function ToyIndex() {

    const dispatch = useDispatch()
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    // const [toyToAdd, setToyToAdd] = useState(toyService.getEmptyToy())
    const [sortBy, setSortBy] = useState(toyService.getDefaultSort())

    useEffect(() => {
        loadToys(sortBy)
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Cannot load toys')
            })
    }, [filterBy,sortBy])


    function onRemoveToy(toyId) {
        // removeToy(toyId)
        removeToy(toyId)
            .then(() => {
                showSuccessMsg('Toy removed')
            })
            .catch(err => {
                console.log('Cannot remove toy', err)
                showErrorMsg('Cannot remove toy')
            })
    }

    // function handleChange({ target }) {
    //     const value = target.value
    //     setToyToAdd(prevToy => ({ ...prevToy, name: value }))
    // }

    function onAddToy() {
        const toyToSave = toyService.getEmptyToy()
        saveToy(toyToSave)
            .then(savedToy => {
                showSuccessMsg(`Toy added (id: ${savedToy._id})`)
            })
            .catch(err => {
                console.log('Cannot add toy', err)
                showErrorMsg('Cannot add toy')
            })
    }

    // function onEditToy(toy) {
    //     const price = +prompt('New price?', toy.price)
    //     const toyToSave = { ...toy, price }
    //     saveToy(toyToSave)
    //         .then(savedToy => {
    //             showSuccessMsg(`Toy updated to price: $${savedToy.price}`)
    //         })
    //         .catch(err => {
    //             console.log('Cannot update toy', err)
    //             showErrorMsg('Cannot update toy')
    //         })
    // }


    function onSetFilter(filterBy) {
        dispatch({ type: SET_FILTER_BY, filterBy })
    }

    function onSetSort(sortBy) {
        setSortBy(sortBy)
    }

    return (
        <div>
            <h3>MisterToy market place</h3>
            <main>
                {/* <button onClick={onAddToy}>Add Toy </button> */}
                <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} />
                <ToySort sortBy={sortBy} onSetSort={setSortBy} />
                
                
                {/* <form onSubmit={onAddToy}>
                    <input
                        type="text"
                        placeholder="Name of your toy?"
                        onChange={handleChange}
                        value={toyToAdd.name}
                    />
                    <button>Add</button>
                </form> */}


                <button className="btn-add-toy" onClick={onAddToy}>add Toy 🧸</button>
                
                {!isLoading && <ToyList
                    toys={toys}
                    onRemoveToy={onRemoveToy}
                    // onEditToy={onEditToy}
                />
                }

                {isLoading && <div>Loading...</div>}
                <hr />
            </main>
        </div>
    )

}