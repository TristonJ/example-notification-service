
declare const com: any;

@JavaProxy('com.tns.services.CustomFCMService')
class CustomFCMService extends (com.google as any).firebase.messaging.FirebaseMessagingService {
  constructor() {
    super();
    return global.__native(this);
  }

  public init() {
    /* Do nothing */
  }

  public onMessageReceived(message: any) {
    super.onMessageReceived(message);
    /* Handle message receipt */
  }
}
