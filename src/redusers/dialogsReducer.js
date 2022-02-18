
let initialState = {
    dialog: [
        {name: "Stepan", id: 0},
        {name: "Vadim", id: 1},
        {name: "Misha", id: 2}
    ],
    massages: [
        {massage: "dknnfk", id: 1},
        {massage: "dknnfk", id: 2},
        {massage: "dknnfk", id: 2}
    ],
    newMassageText: " "
}
export const dialogsReducer = (state = initialState, action) =>{
    switch (action.type){
        case "UPDATE_MASSAGE":
            console.log(state)
            state.newMassageText = action.text
            return state
        case "ADD_MASSAGE":
            const newMassage = {
                massage: state.newMassageText,
                id: state.massages.length + 1
            }
            state.massages.push(newMassage)
            state.newMassageText = ``
            return state
        default:
            return state
    }
}
