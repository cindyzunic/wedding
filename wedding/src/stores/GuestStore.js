import { EventEmitter } from "events";

class GuestStore extends EventEmitter {

    getGroup(guest) {
        if (!guest.firstName) {
            return;
        }

        if (!guest.lastName) {
            return;
        }

        if (!guest.postalCode) {
            return;
        }

        let group = {
            id: 1,
            maxGuests: 4,
            guests: [
                {
                    id: 1,
                    fname: "Cindy",
                    lname: "Xie"
                },
                {
                    id: 2,
                    fname: "John",
                    lname: "Zunic"
                },
                {
                    id: 3,
                    fname: "Eesha",
                    lname: "Zunic"
                },
                {
                    id: 4,
                    fname: "Kip",
                    lname: "Zunic"
                }
            ]
        };

        return group;
    }

    updateAccept(guestIds) { 
        //takes array of guest Ids
    }

    updateDecline(groupId) {
        //decline all for group
    }

    createNotes(notes) {
        //takes array of note objects {guestId, noteId, desc?}
    }

    declineAll(groupId) {
        console.log("declined all for group " + groupId);
    }
}

const guestStore = new GuestStore();

export default guestStore;