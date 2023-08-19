// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getById } from "@/service/blogs";

export default function handler(req, res) {
    if(req.method==="GET"){
        const {blogId}=req.query;
        console.log(blogId)
        const bloger=getById(blogId)
        res.status(200).json(bloger)

    }
  }
  