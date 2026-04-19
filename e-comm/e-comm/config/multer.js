import multer from "multer" 

const storage = multer.memoryStorage()


export let upload = multer({storage})