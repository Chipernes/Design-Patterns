import Subscription from "../templates/Subscription.js";
import PremiumSubscription from "../subscriptionTypes/PremiumSubscription.js";


export default class ManagerCall {
    static purchaseSubscription(): Subscription {
        return new PremiumSubscription();
    }
}