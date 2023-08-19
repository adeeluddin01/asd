import { getData } from "@/service"

export default function handler(req, res) {
    if(req.method === "GET"){
       const product = getData()
        res.status(200).json(product)
    }
  }