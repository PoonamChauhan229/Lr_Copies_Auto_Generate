import { createContext } from "react";

const lrDataContext=createContext(
    {
        "lrDate": "",
        "lrVehicleNo": "",
        "startPoint": "",
        "destination": "",
        "consigneeName": "",
        "consigneeAddress": "",
        "description": "",
        "weight": "",
        "pinkLrCopyUrl": "",
        "whiteLrCopyUrl": "",
        "blueLrCopyUrl": "",
        "lrNo": "",
      },
)
export default lrDataContext