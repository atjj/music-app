export const getAccessToken  = async (CLIENT_ID,CLIENT_SECRET) =>{

  const authParameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`
  }

  
   const res = await fetch('https://accounts.spotify.com/api/token',authParameters);

   if(!res.ok){
      console.error('Could not fetch',res.status);
      return false;
   }

   return await res.json();
}




export const getData = async (accessToken,type,id) =>{
  const res =  await fetch(`https://api.spotify.com/v1/${type}/${id}`,{
       headers: {
         'Authorization': `Bearer ${accessToken}`
       }
   });
   return res.json();
}


export const getArtistsTopTracks = async (accessToken,id) =>{
  const res =  await fetch(`https://api.spotify.com/v1/artists/${id}/top-tracks?market=KG`,{
       headers: {
         'Authorization': `Bearer ${accessToken}`
       }
   });
   return res.json();
}




export const getArtistsAlbums = async (accessToken,id) =>{
  const res =  await fetch(`https://api.spotify.com/v1/artists/${id}/albums?limit=10`,{
       headers: {
         'Authorization': `Bearer ${accessToken}`
       }
   });
   return res.json();
}



export const getSearchData = async (accessToken,artist) => {

  try{
    const res  = await fetch(`https://api.spotify.com/v1/search?q=${artist}&type=artist`,{
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
      });
  
      if(!res.ok){
        throw new Error(`Request faild with status ${res.status}`);
      }
      
      const data = await res.json();
      return data.artists.items;
  }
  catch(error){
    console.error('Error', error.message);
    return null;
  }
}




