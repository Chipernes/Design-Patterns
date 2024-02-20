import Subscription from "../templates/Subscription.js";
import DomesticSubscription from "../subscriptionTypes/DomesticSubscription.js";

export default class WebSite {
    static purchaseSubscription(): Subscription {
        return new DomesticSubscription();
    }
}