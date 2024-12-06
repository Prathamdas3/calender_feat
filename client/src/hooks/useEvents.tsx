import {useQuery} from '@tanstack/react-query'



export const useEvents = ({userId,date,view}:{userId:string,date:Date,view:string}) => {
    
    const { data, isLoading, error } = useQuery({ queryKey: ['getEvents',date], queryFn: async () => await getEvents({userId:userId,date,view}) })
    return {
        data, isLoading, error
    }
}