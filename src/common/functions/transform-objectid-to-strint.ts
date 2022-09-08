import { Transform } from "class-transformer";

export function TransformObjectIdToString(){

    var convert = (e) => typeof e._id == 'string' ? e._id : e._id.toString()
    

    return  Transform(data =>{

        if(data.key == '_id'){
            return convert(data.obj);
        }else{
            const target = data.obj[data.key]

            if(Array.isArray(target)){
                return target.map(t => <any>{...t, _id: convert(t)});
            }else{
                return {...target, _id: convert(target)}
            }
        }
       
    })
}