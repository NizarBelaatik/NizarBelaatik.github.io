const VMImage = (imgTitle,folderid) => {
    const img = process.env.PUBLIC_URL + '/images/projects/project'+folderid+"/"+imgTitle;
    
    return img;

  };
  
export default VMImage;

