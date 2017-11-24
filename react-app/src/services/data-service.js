import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notification-service'

let ns = new NotificationService()

let instance = null
var wishList = []

class DataService {
	
	constructor() {
		if(!instance) {
		   instance = this
		}
		
		return instance
	}
	
	addWishList = item => {
		wishList.push(item)
		ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList)
	}
	
	removeWishList = item => {
		for(var x = 0; x < wishList.length; x++) {
			if(wishList[x]._id === item._id) {
				wishList.splice(x, 1)
				break
			}
		}
	}
}

export default DataService