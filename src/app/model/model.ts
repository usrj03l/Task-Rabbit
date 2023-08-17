export interface user {
    fname: string,
    lname: string,
    email: string,
    phone: number | string,
    street: string,
    street2: string,
    city: string,
    state: string,
    zip: number | string,
    socketId: string,
    userType: string
}

export interface currentUser {
    _id: string,
    uid: string,
    fname: string,
    lname: string,
    email: string,
    phone: number,
    street: string,
    street2: string,
    city: string,
    state: string,
    zip: number,
    socketId: string
    profilePic: string,
    userType: string

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
            totalCost: number,
            itemList: [
                {
                    desc: string,
                    qty: number,
                    price: number
                }
            ]
        }
    ]
}

export interface review {
    totalRating: number,
    totalRatingCount: number,
    uid: string,
    reviewList: [
        {
            name: string,
            reviewerId: string,
            profilePic: string,
            reviewDate: string,
            userRating: number,
            review: string
        }
    ]
}