import Swiper from '@/components/Swiper'
import Navbar from '@/components/Navbar2'
import S1 from '@/components/S1'
import S2 from '@/components/S2'
import S3 from '@/components/S3'
import S4 from '@/components/S4'
import Box from '@/components/Box'



const Page = async() => {

    await new Promise((res)=>setTimeout(res, 2500))

    return (
        <>
            <Navbar />
            <Swiper />
            <Box>
                <S1 />
            </Box>
            <Box>
                <S2 />
            </Box>
            <Box>
                <S3 />
            </Box>
            <Box>
                <S4 />
            </Box>

        </>
    )
}

export default Page