const savedHomesKey = "cocos-home-saved-homes"

export function getSavedHomes() {
    try {
        const storedHomes = window.localStorage.getItem(savedHomesKey)
        return storedHomes ? JSON.parse(storedHomes) : []
    } catch {
        return []
    }
}

export function saveHome(home) {
    const savedHomes = getSavedHomes().filter((savedHome) => savedHome.id !== home.id)
    const nextSavedHomes = [...savedHomes, home]
    window.localStorage.setItem(savedHomesKey, JSON.stringify(nextSavedHomes))
    return nextSavedHomes
}

export function removeSavedHome(homeId) {
    const nextSavedHomes = getSavedHomes().filter((savedHome) => savedHome.id !== homeId)
    window.localStorage.setItem(savedHomesKey, JSON.stringify(nextSavedHomes))
    return nextSavedHomes
}
