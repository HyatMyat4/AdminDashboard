import { getStorage, ref, deleteObject } from "firebase/storage";

const storage = getStorage();


export const Delete_Img = (IMG_SRC : any) => {
    const desertRef = ref(storage, IMG_SRC);
    deleteObject(desertRef).then(() => {
        // File        
      }).catch((error) => {
        console.log(error)
      });
}