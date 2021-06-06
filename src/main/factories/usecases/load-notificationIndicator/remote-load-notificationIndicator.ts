import  hasNotification  from "@/data/notificationIndicator/notificationIndicator"


 const makeRemoteLoadNotificationIndicator = (menu:string): number => { 
    const data = hasNotification();
    var notificationNumber = 0;

    for (var i = 0; i < data.length; i++) {
        if(data[i].menu === menu){
            notificationNumber= data[i].notificationNumber
            break;
        }
      }
      return notificationNumber;
 }


 export default makeRemoteLoadNotificationIndicator;