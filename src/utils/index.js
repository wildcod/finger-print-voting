export const capitalizeText = (s) => {
    return s.split(' ').map(e => e[0].toUpperCase() + e.slice(1)).join(' ')
}