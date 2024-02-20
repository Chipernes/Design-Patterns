import Subscription from "../templates/Subscription.js";
import EducationalSubscription from "../subscriptionTypes/EducationalSubscription.js";

export default class MobileApp {
    static purchaseSubscription(): Subscription {
        return new EducationalSubscription();
    }
}