"use client"
import { useRouter } from 'next/navigation'

const ResultPage = () => {
    const router = useRouter();
    const { id } = router.query; 

    return (
        <>
            <div>Employee ID = {id}</div>
        </>
    )
}