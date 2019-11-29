import {createBrowserHistory, History} from 'history'

class HistoryService {
    history: History | null = null
    constructor() {
        this.history = createBrowserHistory()
    }
}

const historyService = new HistoryService()

export default historyService
