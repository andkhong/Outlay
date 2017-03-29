export const UPLOAD_IMAGE = "UPLOAD_IMAGE";

export function uploadImage(image){
  return {
    type: UPLOAD_IMAGE,
    image
  }
}
