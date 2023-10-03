import Image from 'next/image'
import Link from 'next/link'

export default function ContactLink() {

    return (
       <div className='flex mt-4'>
            <a href="mailto:bryanquek87@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image
                    src="/email.png"
                    width={50}
                    height={50}
                    alt="email"
                    className='mr-2'
                />
            </a>
            
            <a href="https://github.com/bquek00" target="_blank" rel="noopener noreferrer">
            <Image
                src="/github.png"
                width={50}
                height={50}
                alt="github"
                className='mr-2'
            />
            </a>

            <a href="https://www.linkedin.com/in/bryan-quek-3099a4245" target="_blank" rel="noopener noreferrer">
            <Image
                src="/linkedin.png"
                width={50}
                height={50}
                alt="linkedin"
            />
            </a>

       </div>
    )
}
    