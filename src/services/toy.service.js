
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
// import { userService } from './user.service.js'
// import { httpService } from './http.service.js'

const BASE_URL = 'toy/'
const STORAGE_KEY = 'toyDB'

const labels = ['On wheels', 'Box game', 'Art', 'Baby',
    'Doll', 'Puzzle', 'Outdoor', 'Battery Powered']

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter,
    getDefaultSort
}

function query(filterBy = {}, sortBy) {
    return storageService.query(STORAGE_KEY)
    .then(toys => {
        if (filterBy.txt) {
                const regExp = new RegExp(filterBy.txt, 'i')
                toys = toys.filter(toy => regExp.test(toy.name))
            }

            toys = getSortedToys(toys, sortBy)
            return toys
    })
    // return httpService.get(BASE_URL, filterBy)
    // .then(toys => {
    //     return toys.filter(toy =>
    //         regExp.test(toy.vendor) &&
    //         toy.price <= filterBy.maxPrice
    //     )
    // })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
    // return httpService.get(BASE_URL + toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
    // return httpService.delete(BASE_URL + toyId)
}

function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
        // return httpService.put(BASE_URL, toy)

    } else {
        return storageService.post(STORAGE_KEY, toy)
        // return httpService.post(BASE_URL, toy)
    }
}

function getEmptyToy() {
    return {
        name: '',
        price: utilService.getRandomIntInclusive(10, 150),
        labels: _getLabels(),
        createdAt: Date.now(),
        inStock: true
    }
}


function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}

function getSortedToys(toysToDisplay, sortBy) {
    if (sortBy.type === 'txt') {
        toysToDisplay.sort((b1, b2) => {
            const title1 = b1.name.toLowerCase()
            const title2 = b2.name.toLowerCase()
            return sortBy.desc * title2.localeCompare(title1)
        })
    } else {
        toysToDisplay.sort(
            (b1, b2) => sortBy.desc * (b2[sortBy.type] - b1[sortBy.type])
        )
    }
    return toysToDisplay
}

function getDefaultSort() {
    return { type: '', desc: -1 }
}

function _getLabels(){
    let startNum 
    let endNum 

    do {
        startNum = utilService.getRandomIntInclusive(0, 7);
        endNum = utilService.getRandomIntInclusive(0, 7);
    } while (startNum >= endNum);

    const toyLabels = labels.slice(startNum,endNum)
    return toyLabels
}

// TEST DATA
// storageService.post(STORAGE_KEY, {vendor: 'Subali Rahok 6', price: 980}).then(x => console.log(x))


