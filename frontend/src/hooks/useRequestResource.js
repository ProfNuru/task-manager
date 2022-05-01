import { useCallback, useState } from "react";
import axios from 'axios';

const useRequestResource = ({endpoint}) => {
    const [resourceList, setResourceList] = useState({
                                                results:[]
                                            })
    const [resource,setResource] = useState(null)

    const getResourceList = useCallback(()=>{
        axios.get(`/api/${endpoint}/`)
            .then((res)=>{
                setResourceList({
                    results:res.data
                })
            }).catch((err)=>{
                console.error(err)
            })
    },[endpoint])

    const addResource = useCallback((values,successCallback)=>{
        axios.post(`/api/${endpoint}/`,values)
            .then(()=>{
                if(successCallback){
                    successCallback()
                }
            }).catch((err)=>{
                console.error(err)
            })
    }, [endpoint])

    const getResource = useCallback((id)=>{
        axios.get(`/api/${endpoint}/${id}/`)
            .then((res)=>{
                console.log(res)
                const {data} = res
                setResource(data)
            }).catch((err)=>{
                console.error(err)
            })
    },[endpoint])

    const updateResource = useCallback((id,values, successCallback)=>{
        axios.patch(`/api/${endpoint}/${id}/`, values)
            .then(()=>{
                if(successCallback){
                    successCallback();
                }
            }).catch((err)=>{
                console.error(err)
            })
    }, [endpoint])

    return {
        resourceList,
        getResourceList,
        addResource,
        resource,
        getResource,
        updateResource
    }
}

export default useRequestResource