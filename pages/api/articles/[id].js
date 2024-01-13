import {articles} from '../../../data.js'


export default function handler({query:{id}},res){

    const filtered = articles.filter((article)=> article.id === id)
    console.log('filtered :>> ', filtered);
    if(filtered.length !==0){
       
        return res.status(200).json(filtered[0])
    }

    return res.status(404).json({message:`Article ${id} was not found`})

}