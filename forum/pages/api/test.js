
export default function handler(request , response){
    var time = getCurrentTime();
    return response.status(200).json(time);
}