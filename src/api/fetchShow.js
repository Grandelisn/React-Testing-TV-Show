import axios from 'axios'

export const fetchShow = () =>{
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
        .then(res =>{
            console.log('response inside fetchShow: ', res);
            return res;
        })
        .catch(err =>{
            console.error('Error fetching data from fetchShow: ', err.message);
            return err;
        })
        
}