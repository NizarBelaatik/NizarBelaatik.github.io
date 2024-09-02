const getProjectImages = (projectFolder) => {
    const images = [];
    const context = require.context('../../../public/images/projects/', true, /\.(png|jpe?g|svg)$/);
    
    context.keys().forEach((key) => {
      if (key.includes(`/${projectFolder}/`)) {
        images.push("/./images/projects/"+key.replace('../../../public', ''));
      }
    });
  
    return images;//.map(image => `${process.env.PUBLIC_URL}${image}`);
  };
  
export default getProjectImages;

