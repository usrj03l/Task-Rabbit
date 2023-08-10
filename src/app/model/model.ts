export interface user {
    fname: string,
    lname: string,
    email: string,
    phone: Number,
    street: string,
    street2: string,
    city: string,
    state: string,
    zip: Number,
    socketId: string
}

export interface currentUser {
    _id: string,
    uid: string,
    fname: string,
    lname: string,
    email: string,
    phone: Number,
    street: string,
    street2: string,
    city: string,
    state: string,
    zip: Number,
    socketId: string
    profilePic: string

}

export interface message {
    message: string,
    date: string,
    time: string,
    messageType: string,
}

export interface appointment {
    uid: string,
    providerName: string,
    userDetails: [
        {
            userUid: string,
            name: string,
            profilePic: string,
            booked: Boolean,
            date?: string,
            time?: string,
            address: string,
            completed: Boolean,
            cancelled: Boolean
        }
    ]
}

export interface payment {
    providerUid: string,
    orgName: string,
    bill: [
        {
            userUid: string,
            name: string,
            address: string,
            date: string,
            mode: string,
            totalCost: Number,
            itemList: [
                {
                    desc: string,
                    qty: Number,
                    price: Number
                }
            ]
        }
    ]
}