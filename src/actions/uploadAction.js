export const UPLOAD_IMAGE = "UPLOAD_IMAGE";

export function uploadImage(image){
  return {
    type: UPLOAD_IMAGE,
    image
  }
}

const UNDO_IMAGE = "UNDO_IMAGE";

export function undoImage(){
  return {
    type: UNDO_IMAGE,
  }
};
