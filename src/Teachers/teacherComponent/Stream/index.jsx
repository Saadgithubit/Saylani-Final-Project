import { PersonAddAltOutlined as PersonAddAltOutlinedIcon } from '@mui/icons-material'
import { Avatar } from '@mui/material'

export default function Stream() {
    return (
        <div>
            <div className='border-2 flex items-center p-6 space-x-8 rounded-lg cursor-pointer hover:text-[#007B83]'>
                <Avatar src="/broken-image.jpg" />
                <p>Announce something to your class</p>
            </div>
        </div>
    )
}