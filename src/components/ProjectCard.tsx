
import { Link } from 'react-router-dom'
import githubIcon from '../assets/icons/github.svg';
type ProjectProps = {
    title: string,
    description: string,
    image: string,
    href: string,
    tags: string[],
    github: string,
    demo?: string,
    date: string
}

export default function ({title, description, image, href, tags, github, demo, date}: ProjectProps) {
  return (
    <Link to={href} className='flex flex-col gap-y-4  rounded-lg cursor-pointer shadow-sm transition-all duration-300'>
        <img src={image} alt={title} className='rounded-t-lg object-contain'/>
        <div className='flex flex-col gap-y-2 p-4'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-text-secondary text-sm'>{date}</p>
            <p className='text-text-secondary text-md'>{description}</p>
            <div className='flex flex-wrap gap-y-2 gap-x-2 mt-4'>
                {tags.map(tag => <span className='text-black text-[12px] bg-white py-[2px] px-2 rounded-xl'>{tag}</span>)}
            </div>
            <div className='flex gap-x-4 mt-6'>
                <a href={github} target="_blank"  className='bg-background flex items-center gap-x-2 text-white border-2 border-border px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300'><img alt='github' src={githubIcon} className='w-6 h-6'/> Github</a>
                {demo && <a href={demo} target="_blank" className='bg-white text-background px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300'>Demo</a>}
            </div>
        </div>
    </Link>
  )
}